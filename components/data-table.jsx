"use client";
import { useRouter } from "next/navigation";
import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TablePagination } from "@/components/table-pagination";
import { TableVisibility } from "@/components/table-visibility";

export function DataTable({ data, columns, random, searchTerm, perPage = 10 }) {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: perPage,
  });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    onPaginationChange: setPagination,
  });

  const placeholder =
    searchTerm == "university" ? "Üniversite ara ..." : "Akademisyen ara ...";
  const router = useRouter();

  const handleClick = (item) => {
    searchTerm === "university"
      ? router.push(`/universities/${item.original.id}`)
      : router.push(`/academics/${item.id}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder={placeholder}
          value={table.getColumn(searchTerm)?.getFilterValue() ?? ""}
          onChange={(event) =>
            table
              .getColumn(searchTerm)
              ?.setFilterValue(event.target.value.toLocaleLowerCase("tr"))
          }
          className="max-w-sm"
        />
        {searchTerm == "fullName" ? (
          <>
            <Input
              placeholder={"Bilim alanı ara ..."}
              value={table.getColumn("subField")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table
                  .getColumn("subField")
                  ?.setFilterValue(event.target.value.toLocaleLowerCase("tr"))
              }
              className="max-w-sm ml-4"
            />
            <Input
              placeholder={"Anahtar kavram ara ..."}
              value={table.getColumn("keyWords")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table
                  .getColumn("keyWords")
                  ?.setFilterValue(event.target.value.toLocaleLowerCase("tr"))
              }
              className="max-w-sm ml-4"
            />
          </>
        ) : (
          ""
        )}
        <TableVisibility table={table} />
      </div>

      <div className="rounded-md border capitalize">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  onClick={() => {
                    handleClick(row);
                  }}
                  className="cursor-pointer"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {!random && <TablePagination table={table} />}
    </div>
  );
}

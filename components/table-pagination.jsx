import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
  SelectGroup,
} from "./ui/select";

export function TablePagination({ table }) {
  return (
    <main className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-6 py-4">
      {/* First Row: Pagination Controls */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full lg:w-auto">
        <span className="flex items-center flex-wrap gap-2">
          Sayfaya git:
          <Input
            className="w-16 h-[36px]"
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </span>
        <div className="flex items-center gap-2">
          Sayfa başı gösterim:
          <Select
            defaultValue={table.getState().pagination.pageSize}
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            <SelectTrigger className="w-[80px] h-[36px]">
              <SelectValue placeholder="Sayfa başı gösterim" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={pageSize}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Second Row: Page Info & Navigation Buttons */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full lg:w-auto">
        <span className="flex items-center gap-1 flex-wrap">
          <div>Sayfa</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} /{" "}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <div className="space-x-2 flex items-center justify-center flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Geri
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            İleri
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </Button>
        </div>
      </div>
    </main>
  );
}

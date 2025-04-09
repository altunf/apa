"use client";
import React from "react";

import { columnsShort } from "@/components/academic/columns";
import { useUniversityContext } from "@/context/university-context";
import { DataTable } from "../data-table";

export const AcademicsList = () => {
  const { academics } = useUniversityContext();

  return (
    <DataTable
      data={academics}
      columns={columnsShort}
      perPage={6}
      searchTerm={"fullName"}
    />
  );
};

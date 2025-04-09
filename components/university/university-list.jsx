"use client";
import React from "react";
import { useUniversityContext } from "@/context/university-context";
import { getRandomElements } from "@/helpers/getRandomElement";

import { columns } from "./columns";
import { DataTable } from "../data-table";

export const UniversitiesList = ({ random = false }) => {
  const { mergedData } = useUniversityContext();
  let randomItems = JSON.parse(JSON.stringify(mergedData));
  const randomFiveItem = getRandomElements(randomItems);

  const displayedData = random ? randomFiveItem : mergedData;

  return (
    <DataTable
      data={displayedData}
      columns={columns}
      random={random}
      perPage={10}
      searchTerm={"university"}
    />
  );
};

"use client";

import { UniversityContextProvider } from "@/context/university-context";
import { Suspense } from "react";

export default function UniversityProvider({ children }) {
  return (
    <Suspense>
      <UniversityContextProvider>{children}</UniversityContextProvider>
    </Suspense>
  );
}

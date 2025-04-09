import { UniqueDepartments } from "@/components/charts/unique-departments";
import React from "react";

export default function Charts() {
  return (
    <main className="flex flex-1  gap-4 md:gap-8 md:p-8 h-full w-full flex-col p-4">
      <UniqueDepartments />
      <p>Yakında, farklı grafikler eklenerek mevcut veriyle daha kapsamlı görselleştirmeler yapılacaktır.</p>
    </main>
  );
}

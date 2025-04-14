import { UniqueDepartments } from "@/components/charts/unique-departments";
import { UndergraduateUniversityFrequence } from "@/components/charts/undergraduate-university-frequence";
import React from "react";

export default function Charts() {
  return (
    <main className="flex flex-1  gap-4 md:gap-8 md:p-8 h-full w-full flex-col p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <UniqueDepartments />
        <UndergraduateUniversityFrequence />
      </div>
      <p>
        Yakında, farklı grafikler eklenerek mevcut veriyle daha kapsamlı
        görselleştirmeler yapılacaktır.
      </p>
    </main>
  );
}

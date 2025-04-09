import { AcademicProfile } from "@/components/academic/academic-profile";
import React from "react";

export default function AcademicsDetailPage({ params }) {
  return (
    <div>
      <AcademicProfile id={params.detail} />
    </div>
  );
}

"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useUniversityContext } from "@/context/university-context";
import { getRandomElements } from "@/helpers/getRandomElement";

export const RandomAcademics = () => {
  const { mergedData } = useUniversityContext();

  const randomAcademics = getRandomElements(mergedData, 6);

  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader className="flex flex-row items-center ">
        <div className="grid gap-2">
          <CardTitle>Akademisyenler</CardTitle>
          <CardDescription>
            Rastgele seçilen akademisyenler görüntülenir
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="/academics">
            Tümünü Gör
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="grid gap-8">
        {randomAcademics?.map((academic, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between min-gap-4 p-[2px]"
            >
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  {academic.academicStaff[0].fullName}
                </p>
                <CardDescription className="text-sm text-muted-foreground flex justify-start capitalize">
                  {academic.university}
                </CardDescription>
              </div>
              <CardDescription className=" flex justify-end   font-medium">
                {academic.academicStaff[0].subField}
              </CardDescription>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

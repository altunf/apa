"use client";

import * as React from "react";
import { Label, Pie, PieChart, Cell } from "recharts";
import { getUniqueDepartments } from "@/helpers/visualizationFunctions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useUniversityContext } from "@/context/university-context";

export function UniqueDepartments() {
  const { academics } = useUniversityContext();

  const colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "#FF5733",
    "#4B9CD3", // Açık mavi
    "#A155B9", // Mor
    "#F4B400", // Sarı
    "#34A853", // Yeşil
    "#E91E63", // Pembe
  ];


  const rawData = getUniqueDepartments(academics);
  const topData = rawData.slice(0, 5).map((item, index) => ({
    ...item,
    color: colors[index % colors.length],
  }));
  const total = React.useMemo(() => {
    return rawData.reduce((acc, curr) => acc + curr.count, 0);
  }, [rawData]);
  const top = React.useMemo(() => {
    return topData.reduce((acc, curr) => acc + curr.count, 0);
  }, [rawData]);

  // Define a default config object if none is provided
  const defaultChartConfig = {
    count: {
      label: "count",
    },
    ...topData.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.department]: {
          label: curr.department,
          color: curr.color,
        },
      };
    }, {}),
  };


  
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Lisans Bölümü - Sayı</CardTitle>
          <CardDescription>{total} Akademisyen arasından {top} tanesini içerir</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={defaultChartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={topData}
              dataKey="count"
              nameKey="department"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={5}
            >
              {topData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Akademisyen
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Akademisyenlerin mezun olduğu en yaygın 5 lisans bölümü
        </div>
      </CardFooter>
    </Card>
  );
}
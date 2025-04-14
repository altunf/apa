"use client";
import * as React from "react";
import { Bar, BarChart, XAxis, YAxis, Cell } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { useUniversityContext } from "@/context/university-context";
import { getUndergraduateUniversityFrequence } from "@/helpers/visualizationFunctions";

export function UndergraduateUniversityFrequence() {
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

  
  const rawData = getUndergraduateUniversityFrequence(academics);
  const topData = rawData.slice(0, 10).map((item, index) => ({
    ...item,
    color: colors[index % colors.length],
  }));
  const total = React.useMemo(() => {
    return rawData.reduce((acc, curr) => acc + curr.count, 0);
  }, [rawData]);
  
  const defaultChartConfig = {
    count: {
      label: "count",
    },
    ...topData.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.university]: {
          label: curr.university,
          color: curr.color,
        },
      };
    }, {}),
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div className="rounded-md border bg-background p-2 shadow-sm">
          <div className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded"
              style={{ backgroundColor: data.color }}
            />
            <span className="text-xxs text-muted-foreground">
              {data.university}
            </span>
            <span className="text-xxs">{data.count}</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Üniversite - Sayı</CardTitle>
        <CardDescription>{total} Akademisyen</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={defaultChartConfig}>
          <BarChart
            accessibilityLayer
            data={topData}
            layout="vertical"
            margin={{ left: 0 }}
          >
            <YAxis
              hide
              dataKey="university"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => defaultChartConfig[value]?.label}
            />
            <XAxis type="number" hide />
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Bar dataKey="count" layout="horizontal" radius={5}>
              {topData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Akademisyenlerin lisans mezunu olduğu üniversitelerin dağılımı
        </div>
      </CardFooter>
    </Card>
  );
}

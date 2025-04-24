"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

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
import { getSubfieldFrequence } from "@/helpers/visualizationFunctions";
import React from "react";
const chartData = [
  { subfield: "January", desktop: 186, mobile: 80 },
  { subfield: "February", desktop: 305, mobile: 200 },
  { subfield: "March", desktop: 237, mobile: 120 },
  { subfield: "April", desktop: 73, mobile: 190 },
  { subfield: "May", desktop: 209, mobile: 130 },
  { subfield: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
};

export function SubfieldFrequence() {
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

  const rawData = getSubfieldFrequence(academics);
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

  const defaultChartConfig = {
    count: {
      label: "count",
    },
    ...topData.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.subfield]: {
          label: curr.subfield,
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
              {data.subfield}
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
        <CardTitle>Bilim Alanı</CardTitle>
        <CardDescription>
          Akademisyenlerin üzerine çalıştığı en yaygın 5 bilim alanı
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={defaultChartConfig}>
          <BarChart
            accessibilityLayer
            data={topData}
            layout="vertical"
            margin={{
              left: 32,
            }}
          >
            <YAxis
              dataKey="subfield"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => defaultChartConfig[value]?.label}
              hide
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Bar dataKey="count" layout="horizontal" radius={5}>
              {topData.map((entry, index) => (
                <>
                  <Cell key={`cell-${index}`} fill={entry.color} />
                  <LabelList
                    dataKey={`subfield`}
                    position="insideLeft"
                    offset={8}
                    className="fill-white"
                    fontSize={12}
                  />
                  <LabelList
                    dataKey="count"
                    position="left"
                    offset={8}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </>
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Bu alanda verisi bulunan {total} Akademisyen arasından {top} tanesini
          içerir
        </div>
      </CardFooter>
    </Card>
  );
}

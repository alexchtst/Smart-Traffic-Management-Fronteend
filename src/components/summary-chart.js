"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { useMemo, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-04-01", realtime: 222, predictive: 222 },
  { date: "2024-04-02", realtime: 97, predictive: 97 },
  { date: "2024-04-03", realtime: 167, predictive: 167 },
  { date: "2024-04-04", realtime: 242, predictive: 242 },
  { date: "2024-04-05", realtime: 373, predictive: 373 },
  { date: "2024-04-06", realtime: 301, predictive: 301 },
  { date: "2024-04-07", realtime: 245, predictive: 245 },
  { date: "2024-04-08", realtime: 409, predictive: 409 },
  { date: "2024-04-09", realtime: 59, predictive: 59 },
  { date: "2024-04-10", realtime: 261, predictive: 261 },
  { date: "2024-04-11", realtime: 327, predictive: 327 },
  { date: "2024-04-12", realtime: 292, predictive: 292 },
  { date: "2024-04-13", realtime: 342, predictive: 342 },
  { date: "2024-04-14", realtime: 137, predictive: 137 },
  { date: "2024-04-15", realtime: 120, predictive: 120 },
  { date: "2024-04-16", realtime: 138, predictive: 138 },
  { date: "2024-04-17", realtime: 446, predictive: 446 },
  { date: "2024-04-18", realtime: 364, predictive: 364 },
  { date: "2024-04-19", realtime: 243, predictive: 243 },
  { date: "2024-04-20", realtime: 89, predictive: 89 },
  { date: "2024-04-21", realtime: 137, predictive: 137 },
  { date: "2024-04-22", realtime: 224, predictive: 224 },
  { date: "2024-04-23", realtime: 138, predictive: 138 },
  { date: "2024-04-24", realtime: 387, predictive: 387 },
  { date: "2024-04-25", realtime: 215, predictive: 215 },
  { date: "2024-04-26", realtime: 75, predictive: 75 },
  { date: "2024-04-27", realtime: 383, predictive: 383 },
  { date: "2024-04-28", realtime: 122, predictive: 122 },
  { date: "2024-04-29", realtime: 315, predictive: 315 },
  { date: "2024-04-30", realtime: 454, predictive: 454 },
  { date: "2024-05-01", realtime: 165, predictive: 165 },
  { date: "2024-05-02", realtime: 293, predictive: 293 },
  { date: "2024-05-03", realtime: 247, predictive: 247 },
  { date: "2024-05-04", realtime: 385, predictive: 385 },
  { date: "2024-05-05", realtime: 481, predictive: 481 },
  { date: "2024-05-06", realtime: 498, predictive: 498 },
  { date: "2024-05-07", realtime: 388, predictive: 388 },
  { date: "2024-05-08", realtime: 149, predictive: 149 },
  { date: "2024-05-09", realtime: 227, predictive: 227 },
  { date: "2024-05-10", realtime: 293, predictive: 293 },
  { date: "2024-05-11", realtime: 335, predictive: 335 },
  { date: "2024-05-12", realtime: 197, predictive: 197 },
  { date: "2024-05-13", realtime: 197, predictive: 197 },
  { date: "2024-05-14", realtime: 448, predictive: 448 },
  { date: "2024-05-15", realtime: 473, predictive: 473 },
  { date: "2024-05-16", realtime: 338, predictive: 338 },
  { date: "2024-05-17", realtime: 499, predictive: 499 },
  { date: "2024-05-18", realtime: 315, predictive: 315 },
  { date: "2024-05-19", realtime: 235, predictive: 235 },
  { date: "2024-05-20", realtime: 177, predictive: 177 },
  { date: "2024-05-21", realtime: 82, predictive: 82 },
  { date: "2024-05-22", realtime: 81, predictive: 81 },
  { date: "2024-05-23", realtime: 252, predictive: 252 },
  { date: "2024-05-24", realtime: 294, predictive: 294 },
  { date: "2024-05-25", realtime: 201, predictive: 201 },
  { date: "2024-05-26", realtime: 213, predictive: 213 },
  { date: "2024-05-27", realtime: 420, predictive: 420 },
  { date: "2024-05-28", realtime: 233, predictive: 233 },
  { date: "2024-05-29", realtime: 78, predictive: 78 },
  { date: "2024-05-30", realtime: 340, predictive: 340 },
  { date: "2024-05-31", realtime: 178, predictive: 178 },
  { date: "2024-06-01", realtime: 178, predictive: 178 },
  { date: "2024-06-02", realtime: 470, predictive: 470 },
  { date: "2024-06-03", realtime: 103, predictive: 103 },
  { date: "2024-06-04", realtime: 439, predictive: 439 },
  { date: "2024-06-05", realtime: 88, predictive: 88 },
  { date: "2024-06-06", realtime: 294, predictive: 294 },
  { date: "2024-06-07", realtime: 323, predictive: 323 },
  { date: "2024-06-08", realtime: 385, predictive: 385 },
  { date: "2024-06-09", realtime: 438, predictive: 438 },
  { date: "2024-06-10", realtime: 155, predictive: 155 },
  { date: "2024-06-11", realtime: 92, predictive: 92 },
  { date: "2024-06-12", realtime: 492, predictive: 492 },
  { date: "2024-06-13", realtime: 81, predictive: 81 },
  { date: "2024-06-14", realtime: 426, predictive: 426 },
  { date: "2024-06-15", realtime: 307, predictive: 307 },
  { date: "2024-06-16", realtime: 371, predictive: 371 },
  { date: "2024-06-17", realtime: 475, predictive: 475 },
  { date: "2024-06-18", realtime: 107, predictive: 107 },
  { date: "2024-06-19", realtime: 341, predictive: 341 },
  { date: "2024-06-20", realtime: 408, predictive: 408 },
  { date: "2024-06-21", realtime: 169, predictive: 169 },
  { date: "2024-06-22", realtime: 317, predictive: 100 },
  { date: "2024-06-23", realtime: 480, predictive: 120 },
  { date: "2024-06-24", realtime: 132, predictive: 310 },
  { date: "2024-06-25", realtime: 141, predictive: 403 },
  { date: "2024-06-26", realtime: 434, predictive: 520 },
  { date: "2024-06-27", realtime: 448, predictive: 560 },
  { date: "2024-06-28", realtime: 149, predictive: 170 },
  { date: "2024-06-29", realtime: 103, predictive: 280 },
  { date: "2024-06-30", realtime: 446, predictive: 330 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  realtime: {
    label: "Real Time Data",
    color: "hsl(var(--chart-1))",
  },
  predictive: {
    label: "Prediction",
    color: "hsl(var(--chart-2))",
  },
};

export function SummaryChart() {
  const [activeChart, setActiveChart] = useState("realtime");

  // ini untuk animasinya
  const total = useMemo(
    () => ({
      realtime: chartData.reduce((acc, curr) => acc + curr.realtime, 0),
      predictive: chartData.reduce((acc, curr) => acc + curr.predictive, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Summary Line</CardTitle>
          <CardDescription>
            Enim nostrud sit labore tempor sunt deserunt amet ipsum enim sint
            ipsum eu.
          </CardDescription>
        </div>
        <div className="flex">
          {["realtime", "predictive"].map((key) => {
            const chart = key;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

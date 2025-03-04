"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { useMemo, useState, useEffect } from "react";

import { io } from "socket.io-client";

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
  const [realtimeData, setRealtimeData] = useState([]);

  useEffect(() => {
    const socket = io("http://127.0.0.1:5000", { transports: ["websocket"] });

    socket.on("connect", () => {
      console.log("✅ success to connect to socket io");
    });

    socket.on("crowd-realtime", (data) => {
      console.log("📥 data from crowd-realtime:", data);
      const extractedData = data?.data?.data ?? [];

      // Simpan data ke state biar bisa ditampilkan
      setRealtimeData((prevData) => [...prevData, ...extractedData]);
      // setRealtimeData((prevData) => [...prevData, data]);
    });

    // Cleanup saat component unmount
    return () => {
      console.log("disconnect socket io");
      socket.disconnect();
    };
  }, []);

  // ini untuk animasinya
  const total = useMemo(
    () => ({
      realtime: realtimeData.reduce((acc, curr) => acc + curr.realtime, 0),
      predictive: realtimeData.reduce((acc, curr) => acc + curr.predictive, 0),
    }),
    [realtimeData]
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
            data={realtimeData}
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

{/* <div>
  <h2>Crowd Realtime Data</h2>
  <ul>
    {realtimeData.map((item, index) => (
      <li key={index}>{JSON.stringify(item)}</li>
    ))}
  </ul>
</div> */}

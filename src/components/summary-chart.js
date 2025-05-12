"use client";

import * as React from "react";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { useMemo, useState, useEffect } from "react";
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
import { io } from "socket.io-client";

const chartConfig = {
  views: {
    label: "Page Views",
  },
  realtime: {
    label: "Real Time",
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
  const [predictiveData, setPredictiveData] = useState([]);

  useEffect(() => {
    const socket = io("http://127.0.0.1:5000", { transports: ["websocket"] });

    socket.on("connect", () => {
      console.log("✅ success to connect to socket io");
      socket.on("crowd-realtime", (data) => {
        console.log("crowd", data.data);
        setRealtimeData(data.data);
      });

      socket.on("predictive-realtime", (data) => {
        console.log("predictive", data.data);
        setPredictiveData(data.data);
      });
    });

    return () => {
      console.log("disconnect socket io");
      socket.disconnect();
    };
  }, []);

  const total = useMemo(
    () => ({
      realtime: realtimeData.reduce((acc, curr) => acc + (curr.val || 0), 0),
      predictive: predictiveData.reduce(
        (acc, curr) => acc + (curr.val || 0),
        0
      ),
    }),
    [realtimeData, predictiveData]
  );

  const activeData = activeChart === "realtime" ? realtimeData : predictiveData;

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
          {["realtime", "predictive"].map((chart) => (
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
                {total[chart].toLocaleString()}
                {/* test */}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={activeData}
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
                return date.toLocaleString("en-US", {
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleString("en-US", {
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    });
                  }}
                />
              }
            />
            <Line
              dataKey="val"
              type="monotone"
              stroke={chartConfig[activeChart].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

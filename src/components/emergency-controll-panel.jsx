import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TrafficLightConttroll } from "./traffic-light-conttroll";

export function EmergencyControllPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Emergency Detection</CardTitle>
        <CardDescription>
          Magna proident proident ad culpa mollit minim eiusmod ad.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-5 justify-center">
          <TrafficLightConttroll />
          <TrafficLightConttroll />
          <TrafficLightConttroll />
          <TrafficLightConttroll />
        </div>
      </CardContent>
    </Card>
  );
}

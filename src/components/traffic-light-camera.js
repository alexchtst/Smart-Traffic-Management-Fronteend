"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Video } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

export function TrafficLightCamera() {
  const [activeTab, setActiveTab] = useState("camera1");

  return (
    <div className="space-y-4">
      {/* Tabs Navigation */}
      <Tabs
        defaultValue="camera1"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="camera1">Camera 1</TabsTrigger>
          <TabsTrigger value="camera2">Camera 2</TabsTrigger>
          <TabsTrigger value="camera3">Camera 3</TabsTrigger>
          <TabsTrigger value="camera4">Camera 4</TabsTrigger>
        </TabsList>

        {/* Camera 1 */}
        <TabsContent value="camera1">
          <CameraCard title="Camera 1" />
        </TabsContent>

        {/* Camera 2 */}
        <TabsContent value="camera2">
          <CameraCard title="Camera 2" />
        </TabsContent>

        {/* Camera 3 */}
        <TabsContent value="camera3">
          <CameraCard title="Camera 3" />
        </TabsContent>

        {/* Camera 4 */}
        <TabsContent value="camera4">
          <CameraCard title="Camera 4" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Component Camera Card (biar reusable)
function CameraCard({ title }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* AspectRatio membungkus elemen video biar rasio-nya terjaga */}
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted flex items-center justify-center"
        >
          <Video size={48} className="text-gray-600" />
        </AspectRatio>
      </CardContent>
    </Card>
  );
}

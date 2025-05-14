"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { AspectRatio } from "./ui/aspect-ratio";
import { io } from "socket.io-client";
import Image from "next/image";

// Ganti URL sesuai backend Flask-mu
const socket = io("http://localhost:5000", { transports: ["websocket"] });

export function TrafficLightCamera() {
  const [activeTab, setActiveTab] = useState("camera1");

  return (
    <div className="space-y-4">
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

        <TabsContent value="camera1">
          <CameraCard title="Camera 1" socket={socket} />
        </TabsContent>
        <TabsContent value="camera2">
          <CameraCard title="Camera 2" socket={socket} />
        </TabsContent>
        <TabsContent value="camera3">
          <CameraCard title="Camera 3" socket={socket} />
        </TabsContent>
        <TabsContent value="camera4">
          <CameraCard title="Camera 4" socket={socket} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function CameraCard({ title, socket }) {
  const videoRef = useRef < HTMLVideoElement > null;
  const canvasRef = useRef < HTMLCanvasElement > null;
  const [frame, setFrame] = (useState < string) | (null > null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const constraints = {
      video: {
        width: 640,
        height: 360,
      },
    };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      const video = videoRef.current;
      if (video) {
        video.srcObject = stream;
        video.play();

        const sendFrame = () => {
          if (!video || !canvasRef.current) return;
          const ctx = canvasRef.current.getContext("2d");
          if (!ctx) return;

          ctx.drawImage(video, 0, 0, 640, 360);
          const imageData = canvasRef.current.toDataURL("image/jpeg");
          socket.emit("video_frame", { image: imageData });
        };

        const interval = setInterval(sendFrame, 500);
        return () => clearInterval(interval);
      }
    });

    socket.on("detection_result", (data) => {
      if (data.annotated_frame) {
        setFrame(data.annotated_frame);
      }
    });

    return () => {
      socket.off("detection_result");
    };
  }, [socket]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <video ref={videoRef} className="hidden" width={640} height={360} />
            <canvas
              ref={canvasRef}
              className="hidden"
              width={640}
              height={360}
            />

            {frame ? (
              <Image
                src={frame}
                alt="YOLO Annotated Frame"
                width={640}
                height={360}
                unoptimized
                className="w-full h-full object-contain"
              />
            ) : (
              <p className="text-center text-muted-foreground">
                Loading stream...
              </p>
            )}
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  );
}

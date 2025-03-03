import { EmergencyControllPanel } from "@/components/emergency-controll-panel";
import { TrafficLightCamera } from "@/components/traffic-light-camera";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen space-y-5 md:space-y-0 md:flex">
      <div className="pt-[10vw] px-[3vw] md:pt-[7vw] md:w-[60%] md:h-full">
        <TrafficLightCamera />
      </div>
      <div className="px-[3vw] md:w-[40%] md:pt-[8vw] md:h-full">
        <EmergencyControllPanel />
      </div>
    </div>
  );
};

export default Page;

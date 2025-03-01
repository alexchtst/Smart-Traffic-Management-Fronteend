import { SummaryChart } from "@/components/summary-chart";
import { SummaryPanel } from "@/components/summary-panel";
import React from "react";

const Page = () => {
  return (
    <div className="w-full min-h-screen space-y-5 md:space-y-0 md:flex md:h-screen">
      <div className="md:w-[65%] h-[80vw] md:h-screen pt-[10vw] px-[2vw]">
        <SummaryChart />
      </div>
      <div className="md:w-[35%] md:py-[10vw] px-[2vw]">
        {/* <GuardList /> */}
        <SummaryPanel />
      </div>
    </div>
  );
};

export default Page;

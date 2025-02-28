import { RegionDeviceTable } from "@/components/regiondevices-table";
import { ReportsTemplate } from "@/components/reports-template";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen py-[15vw] px-[3vw] space-x-0 space-y-10 md:flex md:py-[8vw] md:space-y-0 md:space-x-10">
      <div className="md:w-[40%]">
        <RegionDeviceTable />
      </div>
      <div className="md:w-[60%]">
        <ReportsTemplate />
      </div>
    </div>
  );
};

export default Page;
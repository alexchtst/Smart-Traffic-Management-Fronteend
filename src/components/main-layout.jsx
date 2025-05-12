import React from "react";
import { CustomMenuBar } from "./menu-bar";
import SearcRegion from "./search-region";

const MainLayout = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full flex items-center justify-center py-[3vw] absolute z-[99]">
        <CustomMenuBar />
      </div>
      <div className="w-fit flex items-end justify-end absolute py-[3vw] right-0 bottom-0 md:bottom-auto z-[99]">
        <SearcRegion />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default MainLayout;

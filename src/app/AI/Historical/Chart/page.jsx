import React from "react";

const Page = () => {
  return (
    <div className="w-full min-h-screen space-y-5 md:space-y-0 md:flex md:h-screen">
      <div className="md:w-[65%] h-[80vw] md:h-screen p-[2vw]">
        {/* <CrossRoads /> */}
        your chart
      </div>
      <div className="md:w-[35%] p-[2vw]">
        {/* <GuardList /> */}
        guard list
      </div>
    </div>
  );
};

export default Page;

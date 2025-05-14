"use client";

import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [guardpostdata, setGuardpostdata] = useState({
    name: "default name",
    xpos: -7.758315006983358,
    ypos: 110.39739904264715,
    isChoose: false,
  });

  const [selectedRegion, setselectedRegion] = useState({
    // set default value
    name: "default name",
    xpos: -7.758315006983358,
    ypos: 110.39739904264715,
    isChoose: false,
  });

  return (
    <AppContext.Provider
      value={{
        guardpostdata,
        setGuardpostdata,
        selectedRegion,
        setselectedRegion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

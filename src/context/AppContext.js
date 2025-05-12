'use client';

import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider ({ children }) {
  const [guardpostdata, setGuardpostdata] = useState({
    name: null,
    xpos: -7.758315006983358,
    ypos: 110.39739904264715,
    isChoose: false,
  });

  return (
    <AppContext.Provider value={{ guardpostdata, setGuardpostdata }}>
      {children}
    </AppContext.Provider>
  );
};

'use client';

import * as React from "react";
import { useContext, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { BellRing } from "lucide-react";
import { AppContext } from "@/context/AppContext";

export function PopupCard({ name, lat, long }) {
  const { guardpostdata, setGuardpostdata } = useContext(AppContext);
  const isActive = guardpostdata.xpos === lat && guardpostdata.ypos === long;

  const handleToggle = (checked) => {
    if (checked) {
      setGuardpostdata({
        name,
        xpos: lat,
        ypos: long,
        isChoose: true,
      });
    } else {
      setGuardpostdata({
        name: 'default name',
        xpos: guardpostdata.xpos,
        ypos: guardpostdata.ypos,
        isChoose: false,
      });
    }
  };

  return (
    <div className="flex items-center space-x-4 rounded-md p-4">
      <BellRing />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{name.toUpperCase()}</p>
        <p className="text-sm text-muted-foreground">Set This Guard Post</p>
      </div>
      <Switch checked={isActive} onCheckedChange={handleToggle} />
    </div>
  );
}

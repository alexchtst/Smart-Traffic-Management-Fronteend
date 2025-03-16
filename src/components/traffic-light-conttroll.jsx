import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function TrafficLightConttroll() {
  return (
    <Select>
      <SelectTrigger className="w-[12vw]">
        <SelectValue placeholder="Trafic Light 1 Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="auto">Auto</SelectItem>
          <SelectItem value="red">Red</SelectItem>
          <SelectItem value="red5">Red 5 mins...</SelectItem>
          <SelectItem value="green">Green</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

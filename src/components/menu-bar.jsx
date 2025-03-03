"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import Link from "next/link";

export function CustomMenuBar() {
  return (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/Map">MAP</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/AI/TrafficLight">AI Traffic Light</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/AI/Summary">AI Summary</Link>
        </MenubarTrigger>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/GuardPost">Guard Post</Link>
        </MenubarTrigger>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/Report">Reports</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

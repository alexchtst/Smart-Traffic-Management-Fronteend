'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

import Link from 'next/link'
  
export function CustomMenuBar() {
  return (
    <Menubar className="w-fit">
      {/* MAP */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link href='/Map'>MAP</Link>
        </MenubarTrigger>
      </MenubarMenu>
      {/* AI */}
      {/* Traffic Light | Historcal | Emergency */}
      <MenubarMenu>
        <MenubarTrigger>AI</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href='/AI/TraficLight'>Traffic Light</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <Link href='/AI/Historical'>Historical</Link>
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href='/AI/Historical/'>Summary</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link href='/AI/Historical/'>Chart</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            <Link href='/AI/Emergency/'>Emergency</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* Guard Post */}
      {/* Monitoring | Find | view all */}
      <MenubarMenu>
        <MenubarTrigger>Guard Post</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href='/GuardPost/Monitoring'>Monitoring</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href='/GuardPost/Find'>Find...</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href='/GuardPost/View'>All</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* Reports */}
      {/* Create | View */}
      <MenubarMenu>
        <MenubarTrigger>Reports</MenubarTrigger>
        <MenubarContent>
          <MenubarSeparator />
          <MenubarItem>
            <Link href='/Report/Create'>Create</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link href='/Report/View'>View</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

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
      {/* Traffic Light | Historcal */}
      <MenubarMenu>
        <MenubarTrigger>AI</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            {/* masih ada bug disini */}
            <Link href='/AI/TrafficLight'>
              Traffic Light
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              Historical
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href='/AI/Historical/Summary'>Summary</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link href='/AI/Historical/Chart'>Chart</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      {/* Guard Post */}
      {/* Monitoring */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link href='/GuardPost'>Guard Post</Link>
        </MenubarTrigger>
      </MenubarMenu>
      {/* Reports */}
      {/* Create | View */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link href='/Report'>Reports</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
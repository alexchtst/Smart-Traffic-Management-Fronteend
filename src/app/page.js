"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 md:mt-0">
        {/* Kartu 1 */}
        <Card className="w-[1/3]">
          <CardHeader>
            <CardTitle>Alex Cinatra</CardTitle>
            <CardDescription className="text-start text-sm">
              22/505820/TK/55377
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            {/* <Image
              src="/alex-profile.jpg"
              alt="Placeholder"
              width={1000}
              height={1000}
              className="rounded-xl mb-4"
            /> */}

            <Label className="text-start text-sm">Project Manager</Label>
            <Separator className="my-2" />

            <Label className="text-start text-sm">Backend</Label>
            <Separator className="my-2" />

            <Label className="text-start text-sm">Frontend</Label>
            <Separator className="my-2" />

            <Label className="text-start text-sm">AI Developer</Label>
            <Separator className="my-2" />
          </CardContent>
        </Card>

        {/* Kartu 2 */}
        <Card className="w-[1/3]">
          <CardHeader>
            <CardTitle>Muhamad Farrel Adrian</CardTitle>
            <CardDescription className="text-start text-sm">
              22/505897/TK/55394
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            {/* <Image
              src="/repal-profile.jpg"
              alt="Placeholder"
              className="rounded-xl mb-4"
              height={1000}
              width={1000}
            /> */}
            <Label className="text-start text-sm">Backend</Label>
            <Separator className="my-2" />
            <Label className="text-start text-sm">AI Developer</Label>
            <Separator className="my-2" />
          </CardContent>
        </Card>

        {/* Kartu 3 */}
        <Card className="w-[1/3]">
          <CardHeader>
            <CardTitle>Muhammad Rafli Ramadani</CardTitle>
            <CardDescription className="text-start text-sm">
              22/497787/TK/54571
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            {/* <Image
              src="/dani-profile.jpg"
              alt="Placeholder"
              className="rounded-xl mb-4"
              height={1000}
              width={1000}
            /> */}
            <Label className="text-start text-sm">Frontend</Label>
            <Separator className="my-2" />
            <Label className="text-start text-sm">UI/UX</Label>
            <Separator className="my-2" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

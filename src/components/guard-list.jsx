import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
 
// dummy data
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `post-name-${a.length - i}`
)

export function GuardList() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Guard List</CardTitle>
        <CardDescription>Consequat officia ut dolor laboris cillum adipisicing eu incididunt do officia.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 my-[2vw]">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="guardid">Guard Post Id</Label>
              <Input id="guardid" placeholder="Search GuardPost Id" />
            </div>
          </div>
          <ScrollArea className="h-52 w-full rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Post Name</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="text-sm">
                    {tag}
                  </div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </form>
      </CardContent>
      <CardFooter className="">
        <Button variant="outline">Find</Button>
      </CardFooter>
    </Card>
  )
}


// export default GuardList;
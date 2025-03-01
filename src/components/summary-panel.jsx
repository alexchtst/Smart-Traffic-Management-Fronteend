import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function SummaryPanel() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-[5vw] md:text-[3vw]">Find</CardTitle>
          <CardDescription>
            Non quis voluptate commodo anim fugiat nisi.Sunt magna veniam et
            cillum occaecat ipsum.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-[1vw]">
          <Input id="postguard" placeholder="find the post guard name here" />
          <Button className="w-full">Search</Button>
        </CardContent>
      </Card>
    </div>
  );
}

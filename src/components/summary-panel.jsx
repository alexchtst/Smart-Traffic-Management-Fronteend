import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

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
          <Label>
            Ullamco aliquip consequat excepteur ut consequat aliquip enim
            consectetur commodo eu non proident veniam.
          </Label>
          <Separator className="my-4" />
          <Label>
            Voluptate eiusmod veniam est ullamco nulla laboris reprehenderit
            reprehenderit elit mollit minim dolore mollit.
          </Label>
          <Separator className="my-4" />
          <Label>
            Labore occaecat elit fugiat veniam esse incididunt deserunt aliqua
            ullamco esse dolore aliquip.
          </Label>
        </CardContent>
      </Card>
    </div>
  );
}

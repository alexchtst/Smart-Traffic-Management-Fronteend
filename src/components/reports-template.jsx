'use client'

import { CrowdChart } from "./chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ReportsTemplate() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports Result</CardTitle>
        <CardDescription>
          This Report Template is Created by our LLM, check it again because may
          be there is some missconception about the Information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form type="submit">
          <div className="space-y-5">
            {/* title */}
            <div>
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" placeholder="Title" />
            </div>
            
            {/* chart */}
            <div>
              <Label htmlFor="chart">This Data is not Editable**</Label>
              <CrowdChart />
            </div>

            {/* additional notes */}
            <div>
              <Label htmlFor="points">Points</Label>
              <Input id="points" placeholder="Type your message here." />
            </div>

            {/* additional notes */}
            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Input id="notes" placeholder="Type your message here." />
            </div>

            {/* summary */}
            <div>
              <Label htmlFor="summary">Summary</Label>
              <Textarea id="summary" placeholder="Type your message here." />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

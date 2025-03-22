"use client";

import { Separator } from "@radix-ui/react-menubar";
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

import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function ReportsTemplate() {
  const [points, setPoints] = useState([
    {
      name: "poin 1",
      content: "Laboris do aliqua eiusmod esse culpa excepteur.",
    },
    {
      name: "poin 2",
      content: "Laboris do aliqua eiusmod esse culpa excepteur.",
    },
    {
      name: "poin 3",
      content: "Laboris do aliqua eiusmod esse culpa excepteur.",
    },
    {
      name: "poin 4",
      content: "Laboris do aliqua eiusmod esse culpa excepteur.",
    },
  ]);
  const [additionalNotes, setAdditionalNotes] = useState([
    {
      name: "notes 1",
      content: "Laboris do aliqua eiusmod esse culpa excepteur.",
    },
    {
      name: "notes 2",
      content: "Laboris do aliqua eiusmod esse culpa excepteur.",
    },
    {
      name: "notes 3",
      content: "Laboris do aliqua eiusmod esse culpa excepteur.",
    },
    {
      name: "notes 4",
      content: "Laboris do aliqua eiusmod esse culpa excepteur.",
    },
  ]);

  const [summary, setSummary] = useState(
    "Cupidatat sit veniam elit duis et mollit eu. Aliqua esse nostrud veniam occaecat minim laboris tempor sunt aliqua aliqua Lorem. Minim irure incididunt cupidatat magna id exercitation non aliqua. Fugiat ullamco elit id sint reprehenderit duis eu consequat veniam magna sunt pariatur tempor enim. Nisi elit consequat irure in aliquip ea nulla in proident consectetur."
  );

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
          <div className="grid  md:grid-cols-2 grid-cols-1 gap-4">
            {/* right */}
            <div className="space-y-5">
              {/* title */}
              <div>
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" placeholder="Title" />
              </div>

              {/* points */}
              <div>
                {points.map((point, idx) => (
                  <div key={idx}>
                    <Label htmlFor={point.name}>{point.name}</Label>
                    <Input id={point.name} placeholder={point.content} />
                  </div>
                ))}
                <Button className="my-2 w-full">Add Points</Button>
              </div>

              {/* additional notes */}
              <div>
                {additionalNotes.map((additionalNote, idx) => (
                  <div key={idx}>
                    <Label htmlFor={additionalNote.name}>
                      {additionalNote.name}
                    </Label>
                    <Input
                      id={additionalNote.name}
                      placeholder={additionalNote.content}
                    />
                  </div>
                ))}
                <Button className="my-2 w-full">Add Points</Button>
              </div>
            </div>
            {/* left */}
            <div className="space-y-5">
              {/* chart */}
              <div>
                <Label htmlFor="chart">This Data is not Editable**</Label>
                <CrowdChart />
              </div>

              {/* summary */}
              <div>
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  placeholder={summary}
                  className="h-fit"
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

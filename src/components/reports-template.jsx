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
  ]);

  const [summary, setSummary] = useState(
    "Cupidatat sit veniam elit duis et mollit eu. Aliqua esse nostrud veniam occaecat minim laboris tempor sunt aliqua aliqua Lorem. Minim irure incididunt cupidatat magna id exercitation non aliqua. Fugiat ullamco elit id sint reprehenderit duis eu consequat veniam magna sunt pariatur tempor enim. Nisi elit consequat irure in aliquip ea nulla in proident consectetur."
  );

  const handleAddPoint = () => {
    setPoints([...points, { name: `poin ${points.length + 1}`, content: "" }]);
  };

  const handleChangePoint = (idx, value) => {
    const newPoints = [...points];
    newPoints[idx].content = value;
    setPoints(newPoints);
  };

  const handleDeletePoint = (idx) => {
    const newPoints = points.filter((_, i) => i !== idx);
    setPoints(newPoints);
  };

  const handleAddNote = () => {
    setAdditionalNotes([
      ...additionalNotes,
      { name: `notes ${additionalNotes.length + 1}`, content: "" },
    ]);
  };

  const handleChangeNote = (idx, value) => {
    const newNotes = [...additionalNotes];
    newNotes[idx].content = value;
    setAdditionalNotes(newNotes);
  };

  const handleDeleteNote = (idx) => {
    const newNotes = additionalNotes.filter((_, i) => i !== idx);
    setAdditionalNotes(newNotes);
  };

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
                  <div key={idx} className="flex items-center gap-2 mb-2">
                    <Label className="hidden md:flex" htmlFor={point.name}>
                      {point.name}
                    </Label>
                    <Input
                      id={point.name}
                      placeholder={point.content || "add something"}
                      onChange={(e) => handleChangePoint(idx, e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => handleDeletePoint(idx)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  className="my-2 w-full"
                  onClick={handleAddPoint}
                >
                  Add Point
                </Button>
              </div>

              {/* additional notes */}
              <div>
                {additionalNotes.map((additionalNote, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-2">
                    <Label
                      className="hidden md:flex"
                      htmlFor={additionalNote.name}
                    >
                      {additionalNote.name}
                    </Label>
                    <Input
                      onChange={(e) => handleChangeNote(idx, e.target.value)}
                      id={additionalNote.name}
                      placeholder={additionalNote.content || "add something"}
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => handleDeleteNote(idx)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  className="my-2 w-full"
                  onClick={handleAddNote}
                >
                  Add Note
                </Button>
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
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Masukkan ringkasan laporan di sini..."
                  className="h-32 resize-y"
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

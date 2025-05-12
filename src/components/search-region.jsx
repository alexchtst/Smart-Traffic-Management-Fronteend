"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const SearcRegion = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex items-center space-x-2 w-full max-w-md bg-white/60 mx-3">
      <Input
        type="text"
        placeholder={"find region here"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1"
      />
      <Button onClick={handleSearch} variant="default" size="icon">
        <SearchIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SearcRegion;

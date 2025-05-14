"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "@/context/AppContext";
import { FetchLocation } from "@/tools/apitools";

const SearcRegion = () => {
  const [query, setQuery] = useState("");
  const [dataFetch, setDataFetch] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const { selectedRegion, setselectedRegion } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchLocation();
        if (result.msg) {
          setErrorMsg(result.msg);
        } else {
          setDataFetch(result);
        }
      } catch (error) {
        setErrorMsg("Terjadi kesalahan saat mengambil data.");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;

    const filtered = dataFetch.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length > 0) {
      setselectedRegion(filtered);
      console.log(filtered);
    } else {
      setselectedRegion([]);
      console.log("Region tidak ditemukan");
    }
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

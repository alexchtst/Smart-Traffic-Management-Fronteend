"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FetchGuardPost, FetchLocation } from "./tools";

const Map = dynamic(() => import("../../components/map"), { ssr: false });

const Page = () => {
  const [guardposts, setGuardposts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchGuardPost();
        console.log(data);
        setGuardposts(data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative z-0 h-screen">
      <Map guardposts={guardposts} />
    </div>
  );
};

export default Page;

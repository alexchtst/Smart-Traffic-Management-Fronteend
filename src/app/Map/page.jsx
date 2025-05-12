'use client'

import React, { useEffect } from 'react'
import dynamic from "next/dynamic";
import { FetchLocation } from './tools';

const Map = dynamic(() => import('../../components/map'), { ssr: false });

const Page = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchLocation();
        console.log(data);
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='relative z-0 h-screen'>
      <Map />
    </div>
  );
}

export default Page;

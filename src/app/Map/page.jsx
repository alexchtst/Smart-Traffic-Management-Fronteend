'use client'

import React from 'react'
import dynamic from "next/dynamic";

const Map = dynamic(() => import('../../components/map'), { ssr: false });

const Page = () => {
  return (
    <div className='relative z-0 h-screen'>
      <Map />
    </div>
  )
}

export default Page
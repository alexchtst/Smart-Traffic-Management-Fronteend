'use client'

import { CrossRoads } from '@/components/crossroads-camera';
import { GuardList } from '@/components/guard-list';
import React from 'react';

const Page = () => {
  return (
    <div className='w-full min-h-screen space-y-5 md:space-y-0 md:flex md:h-screen'>
      <div className='md:w-[65%] h-[80vw] md:h-screen p-[2vw]'>
        <CrossRoads />
      </div>
      <div className='md:w-[35%] p-[2vw]'>
        <GuardList />
      </div>
    </div>
  );
};

export default Page;
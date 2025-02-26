'use client'

import React from 'react'
import Map from '@/components/map'
import { CardWithForm } from '@/components/card-form'
import { Component } from '@/components/chart'

const Page = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <CardWithForm />
        <Component />
    </div>
  )
}

export default Page
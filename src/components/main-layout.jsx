import React from 'react'
import { CustomMenuBar } from './menu-bar'

const MainLayout = ({children}) => {
  return (
    <div className='relative w-full h-full'>
        <div className='w-full flex items-center justify-center py-[3vw] absolute z-[99]'>
            <CustomMenuBar />
        </div>
        <div>{children}</div>
    </div>
  )
}

export default MainLayout
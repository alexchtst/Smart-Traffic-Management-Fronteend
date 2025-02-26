import React from 'react'
import { CustomMenuBar } from './menu-bar'

const MainLayout = ({children}) => {
  return (
    <div>
        <div className='w-full flex items-center justify-center py-[3vw]'>
            <CustomMenuBar />
        </div>
        <div>{children}</div>
    </div>
  )
}

export default MainLayout
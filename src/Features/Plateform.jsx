import React from 'react'
import Sidebar from '../Dash/Sidebar';
import Company from '../Dash/Company';

const Plateform = () => {
  return (
    <div className='w-full max-h-[100%]'>
    <div className='flex '>
      <div className='flex-auto w-[25%]  top-12 border-r-2'>
        <Sidebar/>
      </div>
      <div  className='flex-auto w-[50%] top-14 bg-gray-100 rounded-xl '>
        <Company/>
      </div>
    </div>
    </div>
  )
}

export default Plateform

import React from 'react'
import Login from './Login'
import Testimonial from './Testimonial'


export default function BelowSearchBar() {
  return (
    <>
    <div className='flex items-center justify-center mx-10 '>
        <div className='hidden md:block md:w-1/2'>
            <img src="https://drive.google.com/uc?export=view&id=15lx_bP6hLjHLjn6h-GzcjaHKtND4TQth" alt="" />
            <div className='flex items-center space-x-16'>
            <span className='text-4xl font-semibold'> <span className='text-[#ff7951]'>We </span><span className='text-[#d5dd6f]'>legit </span><span className='text-[#aee2df]'>ya</span><span className='text-[#ff7951]'> homies</span><span className='text-[#d5dd6f]'> Fr</span></span>
            <a href="https://jobs-page2.vercel.app/" type="button" className="text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search Jobs</a>
            </div>
            
        </div>
        <div className='md:hidden md:p-2 md:justify-evenly rounded-xl md:items-center w-[90%] md:w-[40%] md:bg-[#bdeae7] drop-shadow-2xl'>
        <div className='md:w-2/3'>
        <Login/>
        </div>
        </div>
        <div className='hidden md:block md:w-5/12'>
        <Testimonial/>
        </div>
    </div>
    </>
  )
}

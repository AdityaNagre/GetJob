import React from 'react'
import Login from './Login'
import Login2 from './Login2'
import Testimonial from './Testimonial'


export default function BelowSearchBar() {
  return (
    <>
    <div className='flex items-center justify-center mx-10 '>
        <div className='hidden md:block md:w-1/2'>
            <img src="https://drive.google.com/uc?export=view&id=15lx_bP6hLjHLjn6h-GzcjaHKtND4TQth" alt="" />
            <div className='flex items-center space-x-16'>
            <span className='text-4xl font-semibold'> <span className='text-[#ff7951]'>We </span><span className='text-[#d5dd6f]'>legit </span><span className='text-[#aee2df]'>ya</span><span className='text-[#ff7951]'> homies</span><span className='text-[#d5dd6f]'> Fr</span></span>
            <a type='button' href="https://jobs-page2.vercel.app/" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search Jobs (Guest)</a>
            </div>
            
        </div>
        <div className='md:hidden'>
        <Login2/>
        </div>
        <div className='hidden md:block md:w-5/12'>
        <Testimonial/>
        </div>
    </div>
    </>
  )
}

import React from 'react'

export default function AboveFooter() {
  return (
    <>
    <div className=' flex justify-between pl-10 pr-10 mt-12 md:pl-40 md:pr-20 items-center ml-3 mr-3 md:ml-24 md:mr-24 md:mb-28'>
        <div className='text-xl font-semibold  md:text-5xl md:font-bold'>
            <p>Aspiring candidates,</p>
            <p className='mb-3'>inspiring companies</p>
            <p className='text-xl text-gray-400 font-normal hidden md:block'>Whether a Fortune 500, a start-up, or somewhere<br /> in between, companies use us to find super-<br />smart, analytical talent with 0-15 years of<br /> experience in non-technical business roles.</p>
        </div>
        <div className='w-1/2' >
            <img src="https://drive.google.com/uc?export=view&id=1DNXzPuVn1lNme64vw8R6EguWw-K0GXXH" alt="" className='h-20rem md:h-[30rem]'/>
        </div>
    </div>
    </>
    
  )
}

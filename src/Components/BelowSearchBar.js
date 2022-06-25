import React from 'react'
import AboveFooter from './AboveFooter'
import Login from './Login'


export default function BelowSearchBar() {
  return (
    <>
    <div className='block md:hidden'>
        <AboveFooter/>
    </div>
    <div className='flex justify-center mt-12 md:mt-16 md:justify-between items-center md:w-3/4 md:m-auto'>
        <div className='hidden md:block md:w-[40%]'>
            <img src="https://drive.google.com/uc?export=view&id=15lx_bP6hLjHLjn6h-GzcjaHKtND4TQth" alt="" />
            <p className='text-4xl font-semibold'> <span className='text-[#ff7951]'>We </span><span className='text-[#d5dd6f]'>legit </span><span className='text-[#aee2df]'>ya</span><span className='text-[#ff7951]'> homies</span><span className='text-[#d5dd6f]'> Fr</span></p>
        </div>
        <div className='md:flex md:p-2 md:justify-evenly rounded-xl md:items-center w-[90%] md:w-[40%] md:bg-[#bdeae7] drop-shadow-2xl'>
        <div className='md:w-2/3'>
        <Login/>
        </div>
        <div className='hidden md:block '>
            <p className='flex justify-center mb-2'>or</p>
        <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
        <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
        Log In with Google
        </button>
        </div>
        </div>
    </div>
    </>
  )
}

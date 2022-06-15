import React from 'react'
import Data from '../Data/DiscoverJobsCardData.json'                             

export default function DiscoverJobsCard() {
    return (
        <>
        <div className='h-[250px] w-80 md:h-[22rem] md:w-2/3 overflow-auto md:p-[3rem] border border-gray-200 rounded-xl md:bg-white '>
            <div className='md:flex md:p-2 md:justify-between'>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-red-100 rounded-lg border border-gray-100 shadow-md hover:bg-red-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">Full Stack Developer</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">21.7K+ Jobs</p>
                    </a>
                </div>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-cyan-100 rounded-lg border border-gray-100 shadow-md hover:bg-cyan-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[1].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[1].jobs} Jobs</p>
                    </a>
                </div>
            </div>
            <div className='md:flex md:p-2 md:justify-between'>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-orange-200 rounded-lg border border-gray-100 shadow-md hover:bg-orange-300 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[2].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[2].jobs} Jobs</p>
                    </a>
                </div>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-teal-100 rounded-lg border border-gray-100 shadow-md hover:bg-teal-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[3].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[3].jobs} Jobs</p>
                    </a>
                </div>
            </div>
            <div className='md:flex md:p-2 md:justify-between'>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-sky-100 rounded-lg border border-gray-100 shadow-md hover:bg-sky-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[4].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[4].jobs} Jobs</p>
                    </a>
                </div>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-yellow-100 rounded-lg border border-gray-100 shadow-md hover:bg-yellow-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[5].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[5].jobs} Jobs</p>
                    </a>
                </div>
            </div>
            <div className='md:flex md:p-2 md:justify-between'>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-green-100 rounded-lg border border-gray-100 shadow-md hover:bg-green-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[6].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[6].jobs} Jobs</p>
                    </a>
                </div>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-pink-100 rounded-lg border border-gray-100 shadow-md hover:bg-pink-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[7].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[7].jobs} Jobs</p>
                    </a>
                </div>
            </div>
            <div className='md:flex md:p-2 md:justify-between'>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-rose-100 rounded-lg border border-gray-100 shadow-md hover:bg-rose-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[8].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[8].jobs} Jobs</p>
                    </a>
                </div>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-purple-100 rounded-lg border border-gray-100 shadow-md hover:bg-purple-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[9].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[9].jobs} Jobs</p>
                    </a>
                </div>
            </div>
            <div className='md:flex md:p-2 md:justify-between'>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-blue-100 rounded-lg border border-gray-100 shadow-md hover:bg-blue-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[10].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[10].jobs} Jobs</p>
                    </a>
                </div>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-emerald-100 rounded-lg border border-gray-100 shadow-md hover:bg-emerald-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{Data[11].title}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Data[11].jobs} Jobs</p>
                    </a>
                </div>
            </div>

            </div>
        </>
      )
}

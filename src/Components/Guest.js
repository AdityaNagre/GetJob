import React from 'react'

export default function Guest(props) {
  return (
    <div>
        <div className="max-w-sm bg-[#bdeae7] rounded-lg shadow-md  dark:border-gray-700 md:p-3">
              <div className='flex justify-center'>
                  <img className="p-8 rounded-[50%] bg-black w-32" src="/docs/images/products/product-1.png" alt="product image"/>
              </div>
        <div className="px-5 pb-5">
                  <div>
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">Hey {props.gender} </h5>
                      <h6 className="text-lg font-semibold text-gray-900 ">Wanna explore the site as a guest ?</h6>
                  </div>
                  <div className="flex justify-center items-center">
                      <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore</a>
                  </div>
              </div>
        </div>

    </div>
  )
}

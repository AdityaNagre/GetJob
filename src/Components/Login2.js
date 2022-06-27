import React from 'react'

export default function Login2() {
  return (
    <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">LOG IN to get personalised job searches</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
              <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full  bg-opacity-50 border-b-2  border-indigo-300 focus:border-b-indigo-500 focus:bg-[#bdeae7] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "/>
              </div>
              <div className="relative flex-grow w-full">
                <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                <input type="password" id="password" name="password" className="w-full   bg-opacity-50 border-b-2 border-indigo-300  focus:border-b-indigo-500 focus:bg-[#bdeae7]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
          </div>
        </section>

    </div>
  )
}

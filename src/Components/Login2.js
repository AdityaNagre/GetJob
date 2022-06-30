import React, {useState} from 'react'
import Spinner from './Spinner';

export default function Login2() {
  
  const [alert, setalert] = useState(false)
  const [loading, setloading] = useState(false)
  const [user, setuser] = useState({
    name:"",
    email:""
  })

  let name, value;
  const handleChange= (e)=>{
    name= e.target.name 
    value= e.target.value 
    setuser({...user, [name]:value})
  }
  
  const checkData=async ()=>{
    setloading(true)
    const url="https://getjobs-b7cb8-default-rtdb.firebaseio.com/signupdata.json"
    const Data= await fetch(url)
    const parsedData= await Data.json()

    if(user.name && user.email){
    for (const key in parsedData) {
      if (Object.hasOwnProperty.call(parsedData, key)) {
        if(user.name===parsedData[key].name && user.email===parsedData[key].email){
        window.location.href="https://jobs-page2.vercel.app/";}
        else {
          setloading(false)
          setalert(true)
        }
      }
    }
    }
    else{
      setloading(false)
      setalert(true)
    }
    
  }

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
              <label  for="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input onChange={handleChange} value={user.name} type="text" id="name" name="name" className="w-full  bg-opacity-50 border-b-2  border-indigo-300 focus:border-b-indigo-500 focus:bg-[#bdeae7] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "/>
              </div>
              <div className="relative flex-grow w-full">
                <label  for="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input onChange={handleChange} value={user.email} type="email" id="email" name="email" className="w-full   bg-opacity-50 border-b-2 border-indigo-300  focus:border-b-indigo-500 focus:bg-[#bdeae7]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              {!loading ? <button onClick={checkData} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">LogIN</button> : <Spinner/>}
            </div>
            <div>
            {alert && <div className='w-1/2 mt-2 mx-auto'>
            <div id="alert-2" className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                <svg className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                  Enter Correct Credentials !!
                </div>
                <button onClick={()=>{
                  setalert(false)
                }} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-2" aria-label="Close">
                  <span className="sr-only">Close</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div></div>
            }
            </div>
          </div>
        </section>

    </div>
  )
}

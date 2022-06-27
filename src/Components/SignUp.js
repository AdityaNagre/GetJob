import React, {useState} from 'react'

export default function SignUp() {
  const [signUpData, setsignUpData] = useState({
    name:"",
    email:"",
    address:""
  })

  let name, value;
  const handleData=(e)=>{
    name=e.target.name
    value=e.target.value
    setsignUpData({...signUpData,[name]:value})
  }

  const postData=async (e)=>{
    e.preventDefault();
    const {name, email, address}=signUpData

    const res= await fetch("https://getjobs-b7cb8-default-rtdb.firebaseio.com/signupdata.json",
    {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        address
      })
    })

    if(res){
      setsignUpData({
        name:"",
        email:"",
        address:""
      })
      window.location.href="https://jobs-page2.vercel.app/";
    }
    
    
  }


  return (
    <>
        <div className="flex justify-around ">
            <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{"filter": "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a className="text-indigo-500 leading-relaxed">example@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Sign Up</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                <form action="" method='POST'>
                <div className="relative mb-4" >
                  <label for="name" className="leading-7 text-sm text-gray-600">Name <span className='text-red-500'>*</span></label>
                  <input onChange={handleData} value={signUpData.name}   type="text" id="name" name="name" className="w-full  bg-opacity-50 border-b-2  border-indigo-300 focus:border-b-indigo-500 focus:bg-[#bdeae7] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  " required/>
                </div>
                <div className="relative mb-4">
                  <label for="email" className="leading-7 text-sm text-gray-600">Email <span className='text-red-500'>*</span></label>
                  <input onChange={handleData} value={signUpData.email}  type="email" id="email" name="email" className="w-full  bg-opacity-50 border-b-2  border-indigo-300 focus:border-b-indigo-500 focus:bg-[#bdeae7] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  " required/> 
                </div>
                <div className="relative mb-4">
                  <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <textarea onChange={handleData} value={signUpData.address}  id="address" name="address" className="w-full bg-white border-b-2  border-indigo-300 focus:border-b-indigo-500 focus:bg-[#bdeae7] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button onClick={postData} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                </form>
                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
              </div>
            </div>
          </section>
        </div>
    </>
  )
}

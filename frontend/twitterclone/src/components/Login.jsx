import React, { useState } from 'react'

const Login = () => {
  const [islogin, setIsLogin] = useState(true);
  
  const loginSignupHandler = () =>{
    setIsLogin(!islogin)
  }
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div>
        <img className='ml-5' width={"300px"} src="https://loodibee.com/wp-content/uploads/Twitter-X-Logo.png" alt="twtterlogo" />
        </div>
        <div >
          <div className='my-5'>
            <h1 className="font-bold text-7xl">Hapenning Now</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{islogin ? "Login" : "SignUp"}</h1>
          <form action="" className='flex flex-col w-[55%] '>
            {
              !islogin && (<>
              <input type="text" placeholder='Name' className='outline-blue-500 border border-gray-500 rounded-full px-3 py-2 my-1 font-semibold' />
              <input type="text" placeholder='Username' className='outline-blue-500 border border-gray-500 rounded-full px-3 py-2 my-1 font-semibold'/>  
              </>)
            }
            <input type="text" placeholder='Email' className='outline-blue-500 border border-gray-500 rounded-full px-3 py-2 my-1 font-semibold'/>
            <input type="text" placeholder='Password' className='outline-blue-500 border border-gray-500 rounded-full px-3 py-2 my-1 font-semibold'/>
            <button className='bg-[#1D9BF0] border-none my-4 py-2 rounded-full tex-lg text-white'>{islogin ? "Login" : "Creat Account"}</button>
            <h1>{islogin ? "Do not have an account?" : "Already have an account?"} <span onClick={loginSignupHandler} className='font-bold text-blue-500 cursor-pointer'>{islogin ? "SignUp" : "login"}</span></h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
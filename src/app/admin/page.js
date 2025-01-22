'use client'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState, } from 'react'
import Toastify from 'toastify-js'


const page = () => {
 
  const router = useRouter();

const [data, setdata] = useState({
  id:"",
  password:""
})

const handlelogin=()=>{
  if(data.id=="" && data.password==""){
    Toastify({
            text: "Enter All Details",
            position: "center",
            duration: 2000,
            style: {
              background: "red",
            }
            
            }).showToast();
  }else if(data.id=="admin@gmail.com" && data.password=="admin"){
    Toastify({
    
            text: "Login Successfully",
            position: "center",
            duration: 2000,
            style: {
              background: "green",
            }
            
            }).showToast();
            localStorage.setItem('admin',JSON.stringify(data))
            router.push('/admin/products')
  }else{
    Toastify({
      text: "Wrong Credentials",
      position: "center",
      duration: 2000,
      style: {
        background: "red",
      }
      
      }).showToast();
  }
}


useEffect(() => {
  let admin=localStorage.getItem('admin');
  admin=JSON.parse(admin);
  if(admin){if (admin.id!="admin@gmail.com" && admin.password!="admin") {
    router.push('/admin')
    }}
}, [])


  return (
    <div className='w-[100vw] h-full'>
      <section class="bg-gray-50">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Ecom Admin   
      </a>
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Sign in to your account
              </h1>
              <div class="space-y-4 md:space-y-6">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input onChange={(e)=>setdata({...data,id:e.target.value})} value={data.id} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input onChange={(e)=>setdata({...data,password:e.target.value})} value={data.password} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " required=""/>
                  </div>
                  <button onClick={handlelogin} type="submit" class="w-full text-white bg-pink-400 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
              </div>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default page

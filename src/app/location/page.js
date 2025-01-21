import React from 'react'

const page = () => {
  return (
    <div class="dropshadowbtn h-[calc(100vh-2.5rem)] bg-gray-100 m-5 rounded-xl overflow-auto hide-scrollbar flex justify-center items-center p-10">
    <div class="w-full h-full  bg-gray-300 rounded-lg overflow-hidden  flex items-end justify-start relative border-2 border-black">
      <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.4563354159589!2d74.47729900998874!3d19.75907134357154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc5b5f3f63d005%3A0xa58db83c67a2628f!2sAao%20sai%20electronics!5e0!3m2!1sen!2sus!4v1736598058237!5m2!1sen!2sus"          
      ></iframe>

      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-blue-600 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Aao Sai Electronics, Shirdi</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-pink-500 leading-relaxed">example@email.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
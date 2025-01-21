import React from 'react'
import { FaAddressBook } from 'react-icons/fa'
import { MdCall, MdEmail, MdMapsHomeWork } from 'react-icons/md'

const about = () => {
  return (
    <>
    
     <div className="dropshadowbtn h-[calc(100vh-2.5rem)] bg-gray-100 m-5 rounded-xl   justify-center  flex flex-col lg:flex-row items-center lg:items-start px-6 py-12 text-gray-800">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <img 
          src="/s2.png" 
          alt="About Us" 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-1/2 h-full overflow-auto hide-scrollbar">
        
        {/* Introduction Section */}
        <section className="text-left max-w-lg mb-12">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">About Aao Sai Electronics</h1>
          <p className="text-lg leading-relaxed text-gray-600">
            Welcome to <span className="font-semibold text-orange-500 ">Digital Village</span>, your trusted local destination for quality electronics! At AAo Sai Electronics, we are dedicated to offering the latest technology with a commitment to personalized service. Every visit to our store is designed to provide you with the finest electronics and expert advice.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-pink-100 shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-pink-500">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide top-quality electronics and services that make your life easier and more enjoyable. We prioritize quality, expertise, and customer satisfaction in everything we do.
          </p>
        </section>

        {/* Values Section */}
        <section className="bg-pink-100 shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-pink-500">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Quality:</strong> Only the best, most reliable products for our customers.</li>
            <li><strong>Integrity:</strong> Honest and transparent service with every interaction.</li>
            <li><strong>Community:</strong> We are proud to support our local community.</li>
          </ul>
        </section>

        {/* History Section */}
        <section className="bg-pink-100 shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-pink-500">Our History</h2>
          <p className="text-gray-700 leading-relaxed">
            Since our founding, AAo Sai Electronics has grown from a small shop to a trusted name in the community. Our loyal customers and commitment to quality have been our driving forces.
          </p>
        </section>

        {/* Contact Information Section */}
        <section className="bg-pink-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-pink-500">Get In Touch</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Need help? We’re here to assist! Visit us or get in touch using the details below.
          </p>
          <p className="text-gray-700">
           <MdMapsHomeWork className='inline-block' /> <strong> Address:</strong> 123 Main Street, YourCity<br />
            <MdCall className=' inline-block'/><strong> Phone:</strong> (123) 456-7890<br />
            <MdEmail className=' inline-block' /><strong> Email:</strong> contact@aaosaielectronics.com
          </p>
        </section>
      </div>
    </div>
  </>
  )
}

export default about
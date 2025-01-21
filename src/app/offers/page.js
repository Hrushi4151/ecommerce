import Link from "next/link";
import React from "react";

const offers = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    //     <div> <div class="h-[calc(100vh-2.5rem)] bg-gray-100 m-5 overflow-auto hide-scrollbar">
    //   <section class="text-center bg-pink-600 text-white py-12 mb-10 rounded-2xl">
    //     <h1 class="text-4xl font-bold">Exclusive Offers</h1>
    //     <p class="mt-4 text-lg">Get the best deals on top electronics now!</p>
    //   </section>
    //   <div class="container mx-auto px-4 grid gap-8">
    //   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
    //     {data.map(()=>(<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm ">
    //         {/* <div class="h-56 w-full">
    //           <a href="#">
    //             <img class="mx-auto h-full " src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
    //           </a>
    //         </div> */}
    //         <div class="h-56 w-full relative mb-4">
    //           <img src="https://via.placeholder.com/250x200" alt="Product Image" class="w-full h-60 object-cover rounded"/>
    //           <span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
    //             40% OFF
    //           </span>
    //         </div>
    //         <div class="pt-6">
    //           <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline ">Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max</a>

    //           <div class="mt-2 flex items-center gap-2">
    //             <div class="flex items-center">
    //               <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    //               </svg>

    //               <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    //               </svg>

    //               <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    //               </svg>

    //               <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    //               </svg>

    //               <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    //               </svg>
    //             </div>

    //             <p class="text-sm font-medium text-gray-900 ">5.0</p>
    //             <p class="text-sm font-medium text-gray-500 ">(455)</p>
    //           </div>

    //           <ul class="mt-2 flex items-center gap-4">
    //             <li class="flex items-center gap-2">
    //               <svg class="h-4 w-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    //                 <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    //               </svg>
    //               <p class="text-sm font-medium text-gray-500 ">Best Price</p>
    //             </li>
    //           </ul>

    //           <div class="mt-4 flex items-center justify-between gap-4">
    //             <div>
    //             <p class="text-lg line-through font- leading-tight text-gray-900 ">Rs.15,699</p>
    //             <p class="text-2xl font-extrabold leading-tight text-gray-900 ">Rs.14,699</p>
    //               </div>

    //             {/* <button type="button" class="inline-flex items-center rounded-lg bg-pink-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300  ">
    //               <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
    //               </svg>
    //               Add to cart
    //             </button> */}
    //           </div>
    //           <button class="w-full py-2 px-4 bg-pink-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
    //           Add to Favorites
    //         </button>
    //         </div>
    //       </div>)) }

    //       <div class="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white p-10 rounded-lg shadow-lg md:col-span-3">
    //         <h2 class="text-3xl font-bold">Exclusive Headphone Sale - Up to 30% OFF!</h2>
    //         <p class="mt-4 text-lg">Experience premium sound quality at a great price.</p>
    //         <button class="mt-6 py-2 px-4 bg-white text-pink-500 font-semibold rounded hover:bg-gray-100 transition-colors">
    //           Browse Deals
    //         </button>
    //       </div>

    //       <div class="relative bg-gradient-to-r from-green-400 to-blue-500 text-white p-10 rounded-lg shadow-lg md:col-span-1">
    //       <h2 class="text-3xl font-bold">Mega Deal on Laptops - Up to 50% OFF!</h2>
    //       <p class="mt-4 text-lg">Find high-performance laptops at unbeatable prices.</p>
    //       <button class="mt-6 py-2 px-4 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100 transition-colors">
    //         Shop Now
    //       </button>
    //     </div>

    //     </div>

    // </div>
    // </div>

    //     </div>
           <div> <div class="h-[calc(100vh-2.5rem)] bg-gray-100 m-5 overflow-auto hide-scrollbar">

      <section class="bg-gradient-to-r from-yellow-500 to-red-500 text-white py-16 mb-10 rounded-2xl">
        <div class="container mx-auto text-center px-4">
          <h1 class="text-5xl font-bold">In-Store Exclusive Offers!</h1>
          <p class="mt-6 text-lg">
            Visit our store today to take advantage of these unbeatable deals.
          </p>
        </div>
      </section>

      
      <div class=" my-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
  <h3 class="text-2xl font-bold">Exclusive Audio Sale - Up to 35% OFF!</h3>
  <p class="mt-4">Only available in-store. Don’t miss out on top-notch headphones and speakers at huge discounts.</p>

 
  <div class="flex space-x-4 mt-6">
   
    <div class="relative w-1/2">
      <img src="https://t3.ftcdn.net/jpg/05/74/49/52/240_F_574495273_mjKwXQi0l1P3DLtUt9M4asBQisrp7SKu.jpg" alt="Speaker" class="w-full h-full object-cover rounded-lg"/>
      <span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
        25% OFF
      </span>
    </div>

    <div class="relative w-1/2">
      <img src="https://t4.ftcdn.net/jpg/09/75/91/57/240_F_975915756_BDG579HzdYyFey8BEuXpBTmENUrOiDbH.jpg" alt="Headphones" class="w-full h-full object-cover rounded-lg"/>
      <span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
        35% OFF
      </span>
    </div>
  </div>

  <button class="mt-6 py-2 px-4 bg-white text-pink-500 font-semibold rounded hover:bg-gray-100 transition-colors">
    See Deals
  </button>
</div>


      <div class="container mx-auto  mb-10">
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-lg shadow-lg text-center">
          <h2 class="text-3xl font-bold">
            Special Deal: Laptops Up to 50% OFF!
          </h2>
          <p class="mt-4 text-lg">
            Available in-store only. Get your hands on the latest models at
            discounted prices!
          </p>
          <button class="mt-6 py-2 px-4 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition-colors">
            Find Out More
          </button>
      <img src="/s4.png" className="p-3 rounded-3xl" />
        </div>
      </div>
      <img src="/s3.png" />
      <div class="container mt-4 mx-auto px-4 grid gap-8 grid-cols-2 md:grid-cols-3 ">
        <img src="/s2.png" />
        <img src="/s1.png" />
        <img src="/s5.png" />
        <img src="/s9.png" className="grid-1 col-span-2" />
        <div class=" grid-1 col-span-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
          <h3 class="text-2xl font-bold">
            Exclusive Audio Sale - Up to 35% OFF!
          </h3>
          <p class="mt-4">
            Only available in-store. Don’t miss out on top-notch headphones and
            speakers at huge discounts.
          </p>
          <button class="mt-6 py-2 px-4 bg-white text-pink-500 font-semibold rounded hover:bg-gray-100 transition-colors">
            See Deals
          </button>
        </div>

       
      </div>
      <img src="/s7.png" />
      <img src="/s8.png" />

      <div class="bg-blue-600 text-white py-12 mt-10 text-center rounded-lg">
        <h3 class="text-2xl font-bold">Visit Us to Unlock These Deals</h3>
        <p class="mt-2 text-lg">
          Find the nearest store to take advantage of these in-store offers!
        </p>
        <Link
          href="/location"
          class="mt-6 inline-block py-2 px-4 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100"
        >
          Store Locator
        </Link>
      </div>
    </div>
      </div>
  );
};

export default offers;

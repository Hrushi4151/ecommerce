// 'use client'
// import Link from 'next/link'
// import React, { useContext, useEffect } from 'react'
// import { AiFillHeart } from 'react-icons/ai'
// import { Productsdata } from '../components/Providers';

// const page = () => {
  
//   const {setFav,fav} = useContext(Productsdata);
//   const handleFav = (item) => {
//     let updatedFav;
  
//     // Check if the object (by its id) already exists in the favorites
//     if (fav.some((favItem) => favItem._id === item._id)) {
//       // Remove the object if it exists
//       updatedFav = fav.filter((favItem) => favItem._id !== item._id);
//     } else {
//       // Add the object if it doesn't exist
//       updatedFav = [...fav, item];
//     }
  
//     setFav(updatedFav); // Update state
//     localStorage.setItem("fav", JSON.stringify(updatedFav)); // Store the updated array in localStorage
//     console.log("Updated Favorites:", updatedFav);
//   };

//   useEffect(() => {
//     const f = localStorage.getItem('fav');
//     if (fav) {
//       setFav(JSON.parse(f));
//     }else {
//       setFav([]);
//     }
//   }, [])


//   return (
//     <>
//    <section class="dropshadowbtn h-[calc(100vh-2.5rem)] bg-gray-100 m-5 rounded-xl overflow-auto hide-scrollbar pt-5">
//    <div class="mx-auto max-w-screen-xl px-4 ">
//     <h2 class="text-xl font-semibold text-pink-600  sm:text-2xl"><AiFillHeart className=' inline-block'/> Favourites</h2>

//     <div class="mt-6  md:gap-6 flex items-start">
//       <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
//         <div class="space-y-6">
//           {Array.isArray(fav) && fav.map((val)=>((
//             <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm text-gray-700  dropshadowbtn md:p-6">
//             <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//               <a href="#" class="shrink-0 md:order-1">
//                 <img class="h-20 w-20" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
//               </a>

//               <label for="counter-input" class="sr-only">Choose quantity:</label>
//               <div class="flex items-center justify-between md:order-3 md:justify-end">
//                 <div class="flex items-center">
//                   <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100  ">
//                     <svg class="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
//                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
//                     </svg>
//                   </button>
//                   <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 " placeholder="" value="2" required />
//                   <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100  ">
//                     <svg class="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                     </svg>
//                   </button>
//                 </div>
//                 <div class="text-end md:order-4 md:w-32">
//                   <p class="text-base font-bold text-gray-900 ">Rs.{val.dprice}</p>
//                 </div>
//               </div>

//               <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
//                 <a href="#" class="text-base font-medium text-gray-900 hover:underline ">{val.name}</a>

//                 <div class="flex items-center gap-4">
//                   <button 
//                   onClick={()=>handleFav(val)}
//                   type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline ">
//                     <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
//                     </svg>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           )))
//           }
//         </div>
        
//       </div>


//     </div>
//   </div>
// </section>
//     </>
//   )
// }

// export default page




'use client'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { Productsdata } from '../components/Providers';

// const page = () => {
  
//   const {setFav,fav} = useContext(Productsdata);
//   const handleFav = (item) => {
//     let updatedFav;
  
//     // Check if the object (by its id) already exists in the favorites
//     if (fav.some((favItem) => favItem._id === item._id)) {
//       // Remove the object if it exists
//       updatedFav = fav.filter((favItem) => favItem._id !== item._id);
//     } else {
//       // Add the object if it doesn't exist
//       updatedFav = [...fav, item];
//     }
  
//     setFav(updatedFav); // Update state
//     localStorage.setItem("fav", JSON.stringify(updatedFav)); // Store the updated array in localStorage
//     console.log("Updated Favorites:", updatedFav);
//   };

//   useEffect(() => {
//     const f = localStorage.getItem('fav');
//     if (fav) {
//       setFav(JSON.parse(f));
//     }else {
//       setFav([]);
//     }
//   }, [])


//   return (
//     <>
//    <section class="dropshadowbtn h-[calc(100vh-2.5rem)] bg-gray-100 m-5 rounded-xl overflow-auto hide-scrollbar pt-5">
//    <div class="mx-auto max-w-screen-xl px-4 ">
//     <h2 class="text-xl font-semibold text-pink-600  sm:text-2xl"><AiFillHeart className=' inline-block'/> Favourites</h2>

//     <div class="mt-6  md:gap-6 flex items-start">
//       <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
//         <div class="space-y-6">
//           {Array.isArray(fav) && fav.map((val)=>((
//             <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm text-gray-700  dropshadowbtn md:p-6">
//             <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//               <a href="#" class="shrink-0 md:order-1">
//                 <img class="h-20 w-20" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
//               </a>

//               <label for="counter-input" class="sr-only">Choose quantity:</label>
//               <div class="flex items-center justify-between md:order-3 md:justify-end">
//                 <div class="flex items-center">
//                   <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100  ">
//                     <svg class="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
//                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
//                     </svg>
//                   </button>
//                   <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 " placeholder="" value="2" required />
//                   <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100  ">
//                     <svg class="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                     </svg>
//                   </button>
//                 </div>
//                 <div class="text-end md:order-4 md:w-32">
//                   <p class="text-base font-bold text-gray-900 ">Rs.{val.dprice}</p>
//                 </div>
//               </div>

//               <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
//                 <a href="#" class="text-base font-medium text-gray-900 hover:underline ">{val.name}</a>

//                 <div class="flex items-center gap-4">
//                   <button 
//                   onClick={()=>handleFav(val)}
//                   type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline ">
//                     <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
//                     </svg>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           )))
//           }
//         </div>
        
//       </div>


//     </div>
//   </div>
// </section>
//     </>
//   )
// }

// export default page

const Cart = ({ handleIncrement, handleDecrement, handleRemove }) => {
  // Calculate total price
  const {setFav,fav} = useContext(Productsdata);
  const [total, settotal] = useState(0)

  const handleFav = (item) => {
        let updatedFav;
      
        // Check if the object (by its id) already exists in the favorites
        if (fav.some((favItem) => favItem._id === item._id)) {
          // Remove the object if it exists
          updatedFav = fav.filter((favItem) => favItem._id !== item._id);
        } else {
          // Add the object if it doesn't exist
          updatedFav = [...fav, item];
        }
      
        setFav(updatedFav); // Update state
        localStorage.setItem("fav", JSON.stringify(updatedFav)); // Store the updated array in localStorage
        console.log("Updated Favorites:", updatedFav);
      };
    
      useEffect(() => {
        const f = localStorage.getItem('fav');
        if (fav) {
          setFav(JSON.parse(f));
          let a=0;
          JSON.parse(f).map((element) => {
            a += Number(element.dprice); // Convert `element.dprice` to a number if necessary
          });
          settotal(a);
        }else {
          setFav([]);
        }
      }, [])

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-pink-600 mb-6">
          Your Shopping Cart
        </h2>

        {fav.length > 0 ? (
          <>
            <div className="space-y-6">
              {fav.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white shadow rounded-lg p-4 flex-col md:flex-row"
                >
                  {/* Product Image */}
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-20 w-20 rounded-md object-cover"
                      src={item.images[0]}
                      alt={item.name}
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">Price: Rs.{item.dprice}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className='flex flex-row gap-4'>
                  <div className="flex items-center space-x-2 ">
                    <button
                      onClick={() => handleDecrement(item)}
                      className="h-8 w-8 flex items-center justify-center border rounded-md bg-gray-100 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{1}</span>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="h-8 w-8 flex items-center justify-center border rounded-md bg-gray-100 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  {/* Total and Remove Button */}
                  <div className="flex justify-center flex-col ">
                    <p className="text-lg font-bold text-gray-900">
                      Rs.{item.dprice * 1}
                    </p>
                    <button
                      onClick={() => handleFav(item)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Total:</h3>
                <p className="text-xl font-bold text-gray-900">
                  Rs.{total}
                </p>
              </div>
              <button
                className="mt-4 w-full bg-pink-600 text-white py-2 rounded-md text-lg hover:bg-pink-700"
                onClick={() => alert("Proceed to Checkout")}
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>
    </section>
  );
};

export default Cart;

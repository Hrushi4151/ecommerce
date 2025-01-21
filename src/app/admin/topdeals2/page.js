

'use client'
import FeaturedProducts from '@/app/components/FeaturedProducts'
import ProductsCard from '@/app/components/ProductsCard'
import TopDealsCarousel from '@/app/components/TopDeals'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [data, setdata] = useState([]);
     const [selectedItems, setselectedItems] = useState([]);
     const [isModalOpen, setIsModalOpen] = useState(false);
  const [discount, setDiscount] = useState("");

  const handleSetDiscount = () => {
    console.log("Discount set to:", discount);
    setIsModalOpen(false); // Close the modal
  };


   const handleCheckboxChange = (event) => {
     const isChecked = event.target.checked; 
     if(isChecked){
      setselectedItems(data);
     } 
     else{
      setselectedItems([]);
     }
    };
    const handleButton = () => {
      console.log(selectedItems);
      }

      useEffect(() => {
       
      }, [])
      
  return (
    <>
<div className="productspage h-[calc(100vh-2.5rem)] relative m-5 rounded-2xl flex flex-col justify-between items-center overflow-auto hide-scrollbar">
      
  <section id="featured" className="relative container mx-auto py-8 px-5">
    <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
    <div class="flex flex-row justify-start items-center my-4">
   <div className="flex items-center gap-4">
    
     <input
          type="checkbox"
          class="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          id="selectProduct"
          name="all"
          onChange={(e)=>handleCheckboxChange(e)}
          checked={selectedItems.length===data.length}
        />
         <label for="selectProduct" class="text-sm font-bold">Select All</label>
         </div>
          <div className="ml-4"
          onClick={()=>{selectedItems.length >0 ?setIsModalOpen(true):alert("Please select items")}}>
          <button className="bg-pink-500 text-white px-2 py-1 rounded">Set %</button>
          </div>
          <div className="ml-4"
          onClick={handleButton}>
          <button className="bg-pink-500 text-white px-2 py-1 rounded">Set On Slider</button>
          </div>

        </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
      {data.map((val,index) => {
        return (
            <ProductsCard   data={val} key={index}   selectedItems={selectedItems}
            setselectedItems={setselectedItems} />
        );
      })}
    </div>
  </section>
  <div className=" bg-red-500 text-white text-lg uppercase px-4 py-2 sticky bottom-2 left-1/2 transform -translate-x-1/2 rounded z-10">
    <button>Save</button>
  </div>
</div>
{isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-10">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96 text-center">
            <h2 className="text-lg font-semibold mb-4">Set Discount</h2>
            <input
              type="number"
              placeholder="Enter Discount (%)"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-center gap-4">
            <button
              onClick={handleSetDiscount}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Apply
            </button>
            <button
              onClick={()=>setIsModalOpen(false)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancle
            </button>

          </div>
          </div>
        </div>
      )}
    </>
  )
}

export default page







// 'use client'
// import ProductsCard from '@/app/components/ProductsCard'
// import TopDealsCarousel from '@/app/components/TopDeals'
// import React, { useState } from 'react'

// const page = () => {
//     let data=[1,2,3,4,5,6,7,8,9,10]
//      const [selectedItems, setselectedItems] = useState(data);
//      console.log(selectedItems);
     
//   return (
//     <>
//        <div className="productspage h-[calc(100vh-2.5rem)]  m-5 rounded-2xl flex flex-col justify-between items-center overflow-auto hide-scrollbar">
//     <TopDealsCarousel data={selectedItems} />
//     <section class="w-full h-full bg-transparent px-5 antialiased ">
//     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
//     {data.map((val,index)=>(
//      <ProductsCard cate={val} key={index} id={val} selectedItems={selectedItems} setselectedItems={setselectedItems} />
//     )) }
    
//     </div>
//       <div class="w-full text-center py-8">
//       <button type="button" class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
//     </div>
// </section>
//     </div>
//     </>
//   )
// }

// export default page
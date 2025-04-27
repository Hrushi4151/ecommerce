import Link from 'next/link';
import React, { useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md';
import ProductsCard from './ProductsCard';

const ProductsGrid = ({cate}) => {
const data=[1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,22,33,44,55,66,77,88];
const [selectedItems, setselectedItems] = useState([]);
console.log(selectedItems);

  return (
    <>
    <section class="w-full h-full bg-transparent px-5 antialiased ">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
    {data.map((val,index)=>(
     <ProductsCard cate={cate} key={index} id={val} selectedItems={selectedItems} setselectedItems={setselectedItems} />
    )) }
    
    </div>
      <div class="w-full text-center py-8">
      <button type="button" class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
    </div>


</section>
    </>
  )
}

export default ProductsGrid

'use client'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import ProductsCard from './ProductsCard'
import { Productsdata } from "../components/Providers";

const FeaturedProducts = () => {
  const [data, setdata] = useState([])

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch("/api/getfeaturedproducts");
      const d = await response.json();
      console.log("Featured Products:", d.result);
      setdata(d.result);
      } catch (error) {
      console.log("Errrrrrrrrror fetching featured products:", error);
    }
  }
  useEffect(() => {
    fetchFeaturedProducts()
  }, [])
  
    
  return (
    <>
    <section id="featured" class="container mx-auto py-8">
    <h2 class="text-3xl font-bold text-center mb-6">Featured Products</h2>
  { data!=null ? <>
    <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 overflow-x-auto overflow-y-hidden">
  {data.map((val ,index)=>{
       if(index<5)
        return(
            <ProductsCard data={val} />
      )
    })}
    </div>
    </>:<div className="text-2xl font-bold text-center mb-8">No Data</div>}

    
    <div className="flex items-center  justify-center">
              <Link href="/brands" className="px-4 py-2 bg-pink-500  rounded mt-4 font-semibold text-gray-800">See More</Link>
            </div>  </section>
    </>
  )
}

export default FeaturedProducts
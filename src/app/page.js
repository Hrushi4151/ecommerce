'use client'
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import ProductsGrid from "./components/ProductsGrid";
import { MdFavoriteBorder } from "react-icons/md";
import TopDealsCarousel from "./components/TopDeals";
import Customer from "./components/Customer";
import TopBrands from "./components/TopBrands";
import Footer from "./components/Footer";
import FeaturedProducts from "./components/FeaturedProducts";
import { Productsdata } from "./components/Providers";

export default function Home() {
  return (

    <div className="h-[calc(100vh-2.5rem)] bg-white border  dropshadowbtn m-0 md:m-5 rounded-2xl flex flex-col justify-between items-center overflow-y-auto hide-scrollbar">
 <div class="w-full h-full flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-purple-200 to-pink-200">
 
  <div class="w-full lg:w-1/2 h-full flex flex-col justify-start items-start pt-16 lg:pt-32 px-6 lg:pl-20">
    <h2 class="text-left text-2xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4 py-3 leading-snug">
      <span class="text-white block">Welcome To</span>
      <br /> Aao Sai Electronics
    </h2>
    <p class="text-left text-lg md:text-xl font-bold text-gray-600">
      Powering Your World with the Latest Electronics. Innovation, Quality, and Value – All in One Place!
    </p>
    <div class="w-full flex flex-row justify-start gap-0 md:gap-4  pt-8">
      <Link href="/location" class="w-fit">
        <button
          type="button"
          class="rounded-lg border border-gray-200 bg-pink-700 px-4 md:px-6 py-2 md:py-3 text-sm md:text-md font-medium text-white hover:bg-pink-500 hover:text-primary-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
        >
          Visit Now
        </button>
      </Link>
      <Link href="/products" class="w-fit">
        <button
          type="button"
          class="rounded-lg border border-black bg-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-md font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-100"
        >
          Explore
        </button>
      </Link>
    </div>
  </div>

  <div class="w-full lg:w-1/2 h-full flex justify-center items-center px-6 lg:px-0 py-8 lg:py-0">
    <img src="/p1.png" class="max-w-full h-auto object-contain" alt="Electronics Image" />
  </div>
</div>

<div className="w-full h-full">
<section class="bg-gray-700 text-white">
    <div class="container mx-auto p-8 text-center">
      <h1 class="text-4xl font-bold mb-4">Find the Best Deals on Electronics</h1>
      <p class="mb-8">Explore our collection of the latest electronics with unbeatable discounts</p>
      <Link href="/products" class="bg-yellow-500 px-6 py-3 text-lg font-semibold rounded hover:bg-yellow-400">Shop Now</Link>
    </div>
  </section>
  <TopDealsCarousel/>
  <FeaturedProducts />
  <Customer />
  <TopBrands />
  <Footer />
</div>
 </div>
  );
}

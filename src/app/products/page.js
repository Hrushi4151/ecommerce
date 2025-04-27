'use client'
import Image from "next/image";
import { Suspense, useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductsGrid from "../components/ProductsGrid";
import Loader from "../components/Loader";
import { lazy } from 'react';
import ProductsCard from "../components/ProductsCard";
import { Productsdata } from "../components/Providers";

export default function Home() {
  const [activecat, setActiveCat] = useState("all");
  const [searchval, setsearchval] = useState("");
  const { data,categories,setData} = useContext(Productsdata);

  const [filteredData, setFilteredData] = useState(data);

  // Sorting Functions
  const sortIncreasing = () => {
    const sorted = [...data].sort((a, b) => a.price - b.price);
    setFilteredData(sorted);
  };

  const sortDecreasing = () => {
    const sorted = [...data].sort((a, b) => b.price - a.price);
    setFilteredData(sorted);
  };

  const sortAlphabetically = () => {
    const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredData(sorted);
  };

  // Reset to Default Order
  const resetSort = () => {
    setFilteredData(data);
  };

  // const [categories, setCategories] = useState({
  //   all: [],
  //   smartphones: [],
  //   laptops: [],
  //   TV: [],
  //   homeappliances: [],
  //   speakers: [],
  //   others: [],
  // });
 
    // const fetchProducts = async () => {
    //   try {
    //     const response = await fetch("/api/getproducts");
    //     const { products } = await response.json();
    //     const categorized = {
    //       all: products,
    //       smartphones: products.filter((val) => val.category === "smartphones"),
    //       laptops: products.filter((val) => val.category === "laptops"),
    //       TV: products.filter((val) => val.category === "TV"),
    //       homeappliances: products.filter((val) => val.category === "Home Appliances"),
    //       speakers: products.filter((val) => val.category === "speakers"),
    //       others: products.filter((val) => val.category === "others"),
    //     };
    //     setCategories(categorized);
    //     setData(categorized.all);
    //   } catch (error) {
    //     console.error("Error fetching products:", error);
    //   }
    // };
  
    // useEffect(() => {
    //   fetchProducts();
    // }, []);

      useEffect(() => {
        setData(categories[activecat] || categories.all);
        setFilteredData(categories[activecat] || categories.all)
      }, [activecat, categories]);



  return (
   <>
   <div className="productspage h-[calc(100vh-2.5rem)] mt-3 m-0 md:m-5  rounded-2xl flex flex-col justify-between items-center overflow-auto hide-scrollbar">
    <div className="w-fit h-fit sticky top-0 z-10 hidden md:block">
      <div className="flex  justify-center items-center gap-2 rounded-full  dropshadowbtn bg-glass  px-3 py-2 ">
  
         {Object.keys(categories).map((cat) => (
              <div
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`text-lg ${
                  activecat === cat && "text-white bg-pink-500 rounded-full"
                } px-5 py-3 cursor-pointer transition-all duration-[0.3s]`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </div>
            ))}
        <div className="flex justify-center items-center bg-white rounded-full pl-3 p-1   overflow-hidden" >
        <input  className={`w-40 text-xl bg-white rounded-md outline-none `}  onChange={(e)=>setsearchval(e.target.value)} value={searchval}/>
        <FaSearch className="w-fit h-fit p-2 text-xl text-white rounded-full  bg-pink-500"/>
        </div>
        
      </div>
    </div>

<div className="w-full h-fit sticky top-0 z-10 bg-white shadow-lg md:hidden">
 {
  // <div className="flex justify-between items-center p-4">
  //   {/* Left Side: Logo */}
  //   <div className="flex items-center">
  //     <img src="/logo.png" alt="Logo" className="h-14 w-14 p-0" /> {/* Adjust logo size as needed */}
  //   </div>

  //   {/* Right Side: Search Bar */}
  //   <div className="flex justify-center items-center bg-white rounded-full pl-3 p-1 overflow-hidden">
  //     <input
  //       className="w-32 sm:w-40 text-xl bg-white rounded-md outline-none"
  //       onChange={(e) => setsearchval(e.target.value)}
  //       value={searchval}
  //       placeholder="Search..."
  //     />
  //     <FaSearch className="w-10 h-10 p-2 text-xl text-white rounded-full bg-pink-500" />
  //   </div>
  // </div>
  }

  {/* Categories */}
  <div className="flex justify-between items-center gap-2 rounded-full drop-shadow-btn bg-glass  flex-row overflow-auto w-full">
    {Object.keys(categories).map((cat) => (
      <div
        key={cat}
        onClick={() => setActiveCat(cat)}
        className={`text-lg ${
          activecat === cat ? "flex justify-center items-center text-white bg-pink-500 rounded-xl" : "text-gray-700"
        } px-2  py-1  pb-3  cursor-pointer transition-all duration-300 text-sm`}
      >
        {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </div>
    ))}
  </div>
</div>

    <div className="flex-grow w-full h-full justify-center">
    <div className="m-5 select group relative cursor-pointer w-fit">
        {/* Selected Dropdown */}
        <div
          className="selected flex items-center justify-between bg-gray-100 rounded-md px-4 py-2 text-sm"
          data-default="All"
          data-one="Option 1"
          data-two="Option 2"
          data-three="Option 3"
        >
          <span className="mr-2">Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arrow h-4 w-4 transform group-hover:rotate-0 transition-transform duration-300 rotate-[-90deg]"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
        {/* Options */}
        <div className="w-fit options absolute top-8 left-0 z-10 hidden flex-col bg-gray-100 rounded-md shadow-lg py-2 group-hover:flex transition-opacity duration-300">
          <div title="all" className="relative"  onClick={sortIncreasing}>
            <input id="all" name="option" type="radio" className="hidden" defaultChecked />
            <label
              htmlFor="all"
              data-txt="All"
              className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
            >
             Low-High
            </label>
          </div>
          <div title="option-1" className="relative" onClick={sortDecreasing}>
            <input id="option-1" name="option" type="radio" className="hidden" />
            <label
              htmlFor="option-1"
              data-txt="Option 1"
              className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
            >
             High-Low
            </label>
          </div>
          <div title="option-2" className="relative" onClick={sortAlphabetically}>
            <input id="option-2" name="option" type="radio" className="hidden" />
            <label
              htmlFor="option-2"
              data-txt="Option 2"
              className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
            >
             A-Z
            </label>
          </div>
          <div title="option-3" className="relative"
          onClick={resetSort}>
            <input id="option-3" name="option" type="radio" className="hidden" />
            <label
              htmlFor="option-3"
              data-txt="Option 3"
              className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
            >
             Reset
            </label>
          </div>
        </div>
      </div>
    <section class="w-full h-full bg-transparent px-5 antialiased ">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
    {searchval === ""
  ? filteredData.map((val, index) => (
    <ProductsCard   data={val} key={index} />
    ))
  : filteredData
      .filter((val) => val.name.toLowerCase().includes(searchval.toLowerCase()))
      .map((val, index) => (
        <ProductsCard   data={val} key={index} />
      ))}
    </div>
      <div class="w-full text-center py-8">
      <button type="button" class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
    </div>
</section>
    </div>
   </div>
   </>
  );
}

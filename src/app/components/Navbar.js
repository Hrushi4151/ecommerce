"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { LuHome } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { MdFavoriteBorder, MdOutlineLocalOffer } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Productsdata } from "./Providers";

const Navbar = () => {
  const Active = usePathname();
  const router = useRouter();
  const [toggle, settoogle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { data } = useContext(Productsdata);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = data.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results.slice(0, 5)); // Show only first 5 results
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, data]);

  const handleSearchItemClick = (productId) => {
    setShowSearch(false);
    setSearchQuery("");
    router.push(`/products/${productId}`);
  };
  
  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white md:hidden flex justify-between items-center px-5 py-2 m-5 rounded-xl dropshadowbtn">
        <img src="/logo.png" className="h-12 w-12" alt="Logo" />
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-black text-xl p-2 hover:bg-pink-100 rounded-lg"
          >
            <BiSearch />
          </button>
          <button
            onClick={() => settoogle(!toggle)}
            className="text-black text-2xl p-2 hover:bg-pink-100 rounded-lg"
          >
            {toggle ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-white flex flex-col px-5 py-3 mt-24 md:mt-5 mx-5 rounded-xl dropshadowbtn">
          <div className="relative w-full max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-500"
            />
            <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
          
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-2 w-full max-w-2xl mx-auto bg-white rounded-lg border border-gray-200">
              {searchResults.map((product) => (
                <div
                  key={product._id}
                  onClick={() => handleSearchItemClick(product._id)}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                >
                  <img
                    src={product.images[0] || "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-pink-600 font-medium">₹{product.dprice || product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Add a spacer div for mobile view */}
      <div className="h-48 md:h-0"></div>

      {/* Navigation Menu */}
      {(toggle || isDesktop) && (
        !Active.includes("/admin") ? 
        <nav className="navbar m-5 mt-24 md:mt-5 box-border w-[90%] md:w-fit lg:w-[18vw] h-[calc(100vh-8rem)] md:h-[calc(100vh-2.5rem)] bg-white rounded-2xl fixed md:relative top-0 left-0 transition-all z-40">
          <div className="mx-auto flex w-fit flex-col justify-between items-center h-full">
            <div className="logo mt-4 flex-none hidden md:block">
              <img src="/logo.png" className="logoimg h-28 w-28 md:w-36 md:h-36" alt="Logo" />
            </div>
            <div className="w-full flex flex-col justify-start items-center p-5 px-10 flex-grow gap-5">
              <Link
                href={"/"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/" && "dropshadowbtn bg-pink-500"}`}
              >
                <LuHome className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  Home
                </span>
              </Link>
              <Link
                href={"/products"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/products" && "dropshadowbtn bg-pink-500"}`}
              >
                <AiOutlineProduct className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  Products
                </span>
              </Link>
              <Link
                href={"/offers"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/offers" && "dropshadowbtn bg-pink-500"}`}
              >
                <MdOutlineLocalOffer className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  Offers
                </span>
              </Link>
              <Link
                href={"/favourites"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/favourites" && "dropshadowbtn bg-pink-500"}`}
              >
                <MdFavoriteBorder className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  Favourites
                </span>
              </Link>
              <Link
                href={"/contact"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/contact" && "dropshadowbtn bg-pink-500"}`}
              >
                <BiPhoneCall className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  ContactUs
                </span>
              </Link>
              <Link
                href={"/about"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/about" && "dropshadowbtn bg-pink-500"}`}
              >
                <FaRegUser className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  About Us
                </span>
              </Link>
              <Link
                href={"/location"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/location" && "dropshadowbtn bg-pink-500"}`}
              >
                <IoLocationOutline className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  Location
                </span>
              </Link>
            </div>
          </div>
        </nav>
        :
        // Admin side navbar
        <nav className="navbar m-5 mt-24 md:mt-5 box-border w-[90%] md:w-fit lg:w-[18vw] h-[calc(100vh-8rem)] md:h-[calc(100vh-2.5rem)] bg-white rounded-2xl fixed md:relative top-0 left-0 transition-all z-40">
          <div className="flex flex-col justify-between items-center h-full">
            <div className="logo mt-4 flex-none hidden md:block">
              <img src="/logo.png" className="logoimg h-28 w-28 md:w-36 md:h-36" alt="Logo" />
            </div>
            <div className="w-full flex flex-col justify-start items-center p-5 px-14 flex-grow gap-5">
              <Link
                href={"/admin/products"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/admin/products" && "dropshadowbtn bg-pink-500"}`}
              >
                <AiOutlineProduct className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  Products
                </span>
              </Link>
              <Link
                href={"/offers"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/admin/offers" && "dropshadowbtn bg-pink-500"}`}
              >
                <MdOutlineLocalOffer className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  Offers
                </span>
              </Link>
              <Link
                href={"/admin/topdeals"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/admin/topdeals" && "dropshadowbtn bg-pink-500"}`}
              >
                <BiPhoneCall className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  Top Deals
                </span>
              </Link>
              <Link
                href={"/admin/featuredproducts"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/admin/featuredproducts" && "dropshadowbtn bg-pink-500"}`}
              >
                <FaRegUser className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  Featured
                </span>
              </Link>
              <Link
                href={"/location"}
                className={`text-white flex justify-between items-center rounded-2xl w-full ${Active=="/location" && "dropshadowbtn bg-pink-500"}`}
              >
                <IoLocationOutline className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
                <span className="pl-3 block md:hidden lg:block text-center text-black font-medium text-md m-auto">
                  Location
                </span>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;

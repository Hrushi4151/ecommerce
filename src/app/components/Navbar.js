"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuHome } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { MdFavoriteBorder, MdOutlineLocalOffer } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";


const Navbar = () => {
  const Active = usePathname();
  const [toggle, settoogle] = useState(true);
  
  return (<>
         <button
            onClick={()=>settoogle(!toggle)}
            className={`text-black text-2xl  md:hidden fixed  left-[5%] ${toggle ? "top-5" : "top-4"} z-[70] bg-pink-400 p-3 rounded-full`}
          >
            {toggle ? <HiX /> : <HiMenuAlt3 />}
          </button>
    {toggle && (
    !Active.includes("/admin") ? 
<nav
  class="navbar m-5 box-border w-fit md:w-fit lg:w-[18vw] h-[calc(100vh-2.5rem)] bg-[#ffff] rounded-2xl fixed md:relative top-0 left-0 transition-all z-50"
>      <div className="flex flex-col justify-between items-center h-full">
        <div className="logo mt-4 flex-none">
          <img src="/logo.png" className="logoimg h-28 w-28 md:w-36 md:h-36"  />
        </div>
        <div className="w-full flex flex-col justify-start items-center p-5 px-10 flex-grow gap-5 ">
          <Link
            // onClick={() => setActive("/")}
            href={"/"}
            className={`text-white flex justify-between items-center  rounded-2xl  w-full ${Active=="/" && "dropshadowbtn bg-pink-500"}`}
          >
            <LuHome className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              Home
            </span>
          </Link>
          <Link
            // onClick={() => setActive("/products")}
            href={"/products"}
            className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/products" && "dropshadowbtn bg-pink-500"}`}
          >
            <AiOutlineProduct className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              Products
            </span>
          </Link>
          <Link
            // onClick={() => setActive("/offers")}
            href={"/offers"}
            className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/offers" && "dropshadowbtn bg-pink-500"}`}
          >
            <MdOutlineLocalOffer className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              Offers
            </span>
          </Link>
          <Link
            // onClick={() => setActive("/favourites")}
            href={"/favourites"}
            className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/favourites" && "dropshadowbtn bg-pink-500"}`}
          >
            <MdFavoriteBorder className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
            Favourites
            </span>
          </Link>
          <Link
            // onClick={() => setActive("/contact")}
            href={"/contact"}
            className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/contact" && "dropshadowbtn bg-pink-500"}`}
          >
            <BiPhoneCall className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className=" pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              ContactUs
            </span>
          </Link>
          <Link
            //  onClick={() => setActive("/about")}
             href={"/about"}
             className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/about" && "dropshadowbtn bg-pink-500"}`}
          >
            <FaRegUser className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              About Us
            </span>
          </Link>
          <Link
            //  onClick={() => setActive("/location")}
             href={"/location"}
             className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/location" && "dropshadowbtn bg-pink-500"}`}
          >
            <IoLocationOutline className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              Location
            </span>
          </Link>
        </div>
      </div>
    </nav>
    :
    //admin side navbar
    <nav class="navbar m-5 box-border w-fit md:w-fit lg:w-[18vw] h-[calc(100vh-2.5rem)] bg-[#ffff] rounded-2xl fixed md:relative top-0 left-0 transition-all z-50 ">
      <div className="flex flex-col justify-between items-center h-full">
      <div className="logo mt-4 flex-none">
          <img src="/logo.png" className="logoimg h-28 w-28 md:w-36 md:h-36"  />
        </div>
        <div className="w-full flex flex-col justify-start items-center p-5 px-14 flex-grow gap-5 ">
          <Link
            // onClick={() => setActive("/products")}
            href={"/admin/products"}
            className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/admin/products" && "dropshadowbtn bg-pink-500"}`}
          >
            <AiOutlineProduct className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              Products
            </span>
          </Link>
          <Link
            // onClick={() => setActive("/offers")}
            href={"/offers"}
            className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/admin/offers" && "dropshadowbtn bg-pink-500"}`}
          >
            <MdOutlineLocalOffer className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              Offers
            </span>
          </Link>
          
          <Link
            // onClick={() => setActive("/contact")}
            href={"/admin/topdeals"}
            className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/admin/topdeals" && "dropshadowbtn bg-pink-500"}`}
          >
            <BiPhoneCall className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              Top Deals
            </span>
          </Link>
          <Link
            //  onClick={() => setActive("/about")}
             href={"/admin/featuredproducts"}
             className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/admin/featuredproducts" && "dropshadowbtn bg-pink-500"}`}
          >
            <FaRegUser className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 block md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              Featured
            </span>
          </Link>
          <Link
            //  onClick={() => setActive("/location")}
             href={"/location"}
             className={`text-white flex justify-between items-center  rounded-2xl  w-full  ${Active=="/location" && "dropshadowbtn bg-pink-500"}`}
          >
            <IoLocationOutline className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
            <span className="pl-3 md:hidden lg:block text-center text-black font-medium  text-md   m-auto">
              Location
            </span>
          </Link>
        </div>
        {/* <div>
        <iframe width="250" height="200" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=397&amp;height=400&amp;hl=en&amp;q=Shri%20Khandoba%20Mandir%20Shirdi+(Aao%20Sai%20Electronics)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://hauckautoren.ch/'>Hauck & Autoren</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=1c911d32760f41028d94b0ce0778c561a46b2bb0'></script>
        </div> */}
      </div>
    </nav>
  )}
    </>
  );
};

export default Navbar;



// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { LuHome } from "react-icons/lu";
// import { AiOutlineProduct } from "react-icons/ai";
// import { MdFavoriteBorder, MdOutlineLocalOffer } from "react-icons/md";
// import { BiPhoneCall } from "react-icons/bi";
// import { FaRegUser } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const Active = usePathname();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const renderLinks = (prefix = "") => (
//     <>
//       <Link
//         href={`${prefix}/`}
//         className={`text-white flex justify-between items-center rounded-2xl gap-3 w-full ${
//           Active === `${prefix}/` && "dropshadowbtn bg-pink-500"
//         }`}
//       >
//         <LuHome className="w-fit h-fit text-2xl font-thin p-3 bg-pink-700 rounded-2xl" />
//         <span className="text-center text-black font-medium text-lg px-4 pr-10 m-auto">
//           Home
//         </span>
//       </Link>
//       <Link
//         href={`${prefix}/products`}
//         className={`text-white flex justify-between items-center rounded-2xl gap-3 w-full ${
//           Active === `${prefix}/products` && "dropshadowbtn bg-pink-500"
//         }`}
//       >
//         <AiOutlineProduct className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
//         <span className="text-center text-black font-medium text-lg px-4 pr-10 m-auto">
//           Products
//         </span>
//       </Link>
//       <Link
//         href={`${prefix}/offers`}
//         className={`text-white flex justify-between items-center rounded-2xl gap-3 w-full ${
//           Active === `${prefix}/offers` && "dropshadowbtn bg-pink-500"
//         }`}
//       >
//         <MdOutlineLocalOffer className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
//         <span className="text-center text-black font-medium text-lg px-4 pr-10 m-auto">
//           Offers
//         </span>
//       </Link>
//       <Link
//         href={`${prefix}/favourites`}
//         className={`text-white flex justify-between items-center rounded-2xl gap-3 w-full ${
//           Active === `${prefix}/favourites` && "dropshadowbtn bg-pink-500"
//         }`}
//       >
//         <MdFavoriteBorder className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
//         <span className="text-center text-black font-medium text-lg px-4 pr-10 m-auto">
//           Favourites
//         </span>
//       </Link>
//       <Link
//         href={`${prefix}/contact`}
//         className={`text-white flex justify-between items-center rounded-2xl gap-3 w-full ${
//           Active === `${prefix}/contact` && "dropshadowbtn bg-pink-500"
//         }`}
//       >
//         <BiPhoneCall className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
//         <span className="text-center text-black font-medium text-lg px-4 pr-10 m-auto">
//           Contact Us
//         </span>
//       </Link>
//       <Link
//         href={`${prefix}/about`}
//         className={`text-white flex justify-between items-center rounded-2xl gap-3 w-full ${
//           Active === `${prefix}/about` && "dropshadowbtn bg-pink-500"
//         }`}
//       >
//         <FaRegUser className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
//         <span className="text-center text-black font-medium text-lg px-4 pr-10 m-auto">
//           About Us
//         </span>
//       </Link>
//       <Link
//         href={`${prefix}/location`}
//         className={`text-white flex justify-between items-center rounded-2xl gap-3 w-full ${
//           Active === `${prefix}/location` && "dropshadowbtn bg-pink-500"
//         }`}
//       >
//         <IoLocationOutline className="w-10 h-10 font-thin p-3 bg-pink-700 rounded-xl" />
//         <span className="text-center text-black font-medium text-lg px-4 pr-10 m-auto">
//           Location
//         </span>
//       </Link>
//     </>
//   );

//   return (
//     <nav
//     className={`fixed top-0 left-0 h-full bg-white p-5 rounded-2xl box-border 
//       ${isMenuOpen ? "w-[80vw]" : "w-[20vw]"} 
//       md:w-[20vw] lg:w-[15vw] transition-all z-50 m-5`}>
//       <div className="flex flex-col h-full">
//         <div className="flex justify-between items-center mb-5">
//           <Image src="/logo.png" className="logoimg" height={60} width={60} />
//           <button
//             onClick={toggleMenu}
//             className="text-black text-2xl md:hidden"
//           >
//             {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
//           </button>
//         </div>
//         <div
//           className={`flex-col ${
//             isMenuOpen ? "flex" : "hidden"
//           } md:flex w-full gap-5`}
//         >
//           {Active.includes("/admin")
//             ? renderLinks("/admin")
//             : renderLinks("")}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

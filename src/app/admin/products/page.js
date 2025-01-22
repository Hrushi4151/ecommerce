// 'use client'
// import Image from "next/image";
// import { Suspense, useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import ProductsGrid from "@/app/components/ProductsGrid";
// import Loader from "@/app/components/Loader";
// import { lazy } from 'react';
// import AddProductPopUp from "@/app/components/AddProductPopUp";
// import EditProductPopUp from "@/app/components/EditProductPopUp";
// import ProductsCard from "@/app/components/ProductsCard";
// import { MdFavoriteBorder } from 'react-icons/md';


// export default function Home() {
//   const [activecat, setactivecat] = useState("all");
//   const [selectedItems, setselectedItems] = useState([]);
//    const [open, setOpen] = useState(false);
//    const [eopen, seteOpen] = useState(false);
//  const [selectAll, setselectAll] = useState({
//     all: false,
//     smartphones:false,
//     laptops:false,
//     TV:false,
//     homeappliances:false,
//     speakers:false,
//     others:false,
//  })
//   const [data, setdata] = useState([])
//   let smartphones=[];
//   let laptops=[];
//   let TV=[];
//   let homeappliances=[];
//   let speakers=[];
//   let others=[];
//   let all=[...smartphones,...laptops,...TV,...homeappliances,...speakers,...others].sort(() => Math.random() - 0.5);

//  const handleCheckboxChange = (event,add) => {
//     const { name, checked } = event.target;
//     console.log(name,checked);
    
//     if (checked) {
//         setselectAll((prev) => ({ ...prev, [name]: true }));
//         setselectedItems(() => [
//             ...new Set([...selectedItems, ...add]),
//           ]);
//     } else {
//         setselectAll((prev) => ({ ...prev, [name]: false }));
//         setselectedItems((prevSelected) =>
//             prevSelected.filter((item) => !add.includes(item))
//           );    
//     }
// };

// const handleButton = () => {
//   console.log(selectedItems);
//   }

  

 
//   useEffect(() => {
//     switch (activecat) {
//       case "smartphones":
//         setdata(smartphones);
//         break;
//       case "laptops":
//         setdata(laptops);
//         break;
//       case "TV":
//         setdata(TV);
//         break;
//       case "homeappliances":
//         console.log("ssss",homeappliances);
//         setdata(homeappliances);
//         break;
//       case "speakers":
//         setdata(speakers);
//         break;
//       case "others":
//         setdata(others);
//         break;
//       default:
//         setdata(all);
//     }
//   }, [activecat]);
//   console.log(selectedItems);

//   const handleOpen = () => setOpen(true);
// useEffect(() => {
//   fetchProducts();
// }, []);



"use client";
import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import AddProductPopUp from "@/app/components/AddProductPopUp";
import EditProductPopUp from "@/app/components/EditProductPopUp";
import ProductsCard from "@/app/components/ProductsCard";
import { Productsdata } from "@/app/components/Providers";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


export default function Home() {
    const { data,categories,setData,fetchProducts} = useContext(Productsdata);

  const [filteredData, setFilteredData] = useState(data);
  const [activecat, setActiveCat] = useState("all");
  const [searchval, setsearchval] = useState("");
  const [selectedItems, setselectedItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [eopen, seteOpen] = useState(false);
  const [selectAll, setselectAll] = useState({
        all: false,
        smartphones:false,
        laptops:false,
        TV:false,
        homeappliances:false,
        speakers:false,
        others:false,
     }
    );




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


 const handleCheckboxChange = (event,add) => {
    const { name, checked } = event.target;
    console.log(name,checked);
    
    if (checked) {
        setselectAll((prev) => ({ ...prev, [name]: true }));
        setselectedItems(() => [
            ...new Set([...selectedItems, ...add]),
          ]);
    } else {
        setselectAll((prev) => ({ ...prev, [name]: false }));
        setselectedItems((prevSelected) =>
            prevSelected.filter((item) => !add.includes(item))
          );    
    }
};

  const topdealsbtn = async () => {
    let ids=[]
      selectedItems.map((val) => {
        ids.push(val._id);
      })
      console.log(ids)
      const res=await fetch("/api/addTopDeals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids }),
      });

      let r=await res.json();
      if(r.status==200){
        Toastify({

          text: "Added to Top Deals",
          position: "center",
        duration: 2000,
        style: {
          background: "green",
        }
          
          }).showToast();
    }else if(r.status==300){
      Toastify({

        text: "Already Added",
        position: "center",
        duration: 2000,
        style: {
          background: "orange",
        }
        
        }).showToast();
    }else{
      Toastify({

        text: "Failed to Added",
        position: "center",
        duration: 2000,
        style: {
          background: "red",
        }
        
        }).showToast();
    }

  };

  const featuredbtn =async () => {
      let ids=[]
      selectedItems.map((val) => {
        ids.push(val._id);
      })
      console.log(ids)
      const res=await fetch("/api/addfeaturedProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids }),
      });
      let r=await res.json();
      if(r.status==200){
          Toastify({

            text: "Added to Featured",
            position: "center",
        duration: 2000,
        style: {
          background: "green",
        }
            
            }).showToast();
      }else if(r.status==300){
        Toastify({

          text: "Already Added",
          position: "center",
        duration: 2000,
        style: {
          background: "orange",
        }
          
          }).showToast();
      }else{
        Toastify({

          text: "Failed to Added",
          position: "center",
        duration: 2000,
        style: {
          background: "red",
        }
          
          }).showToast();
      }
  };

  const deletebtn =async () => {
    let ids=[]
    selectedItems.map((val) => {
      ids.push(val._id);
    })
    console.log(ids)
    const res=await fetch("/api/deleteProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids }),
    });

    let r=await res.json();
    fetchProducts();
    if(r.status==200){
      Toastify({

        text: "Deleted Successfully",
        position: "center",
        duration: 2000,
        style: {
          background: "green",
        }
        
        }).showToast();
  }else{
    Toastify({

      text: "Failed to Delete",
      position: "center",
        duration: 2000,
        style: {
          background: "red",
        }
      
      }).showToast();
  }

  };
  


  useEffect(() => {
    fetchProducts();
  }, [open,eopen]);

  useEffect(() => {
    setData(categories[activecat] || categories.all);
    setFilteredData(categories[activecat] || categories.all)
  }, [activecat, categories]);

  const handleOpen = () => setOpen(true);

 useEffect(() => {
   let admin=localStorage.getItem('admin');
   admin=JSON.parse(admin);
   if (admin.id=="admin@gmail.com" && admin.password=="admin") {
     router.push('/admin/products')
     }
 }, [])

  return (
   <>
   <AddProductPopUp open={open} setOpen={setOpen} />
   <EditProductPopUp eopen={eopen} seteOpen={seteOpen} data={data} />
   <div className="productspage h-[calc(100vh-2.5rem)] m-0 md:m-5 rounded-2xl flex flex-col justify-between items-center overflow-auto hide-scrollbar">
    {/* <div className="w-fit h-fit sticky top-0 z-10">
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
        <input  className={`w-40 text-xl bg-white rounded-md outline-none `} onChange={(e)=>setsearchval(e.target.value)} value={searchval}/>
        <FaSearch className="w-fit h-fit p-2 text-xl text-white rounded-full  bg-pink-500" />
        </div>
      </div>
    </div> */}
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
  <div className="flex justify-between items-center px-4 py-2">
    {/* Left Side: Logo */}
    <div className="flex items-center ml-16">
    <img src="/logo.png" alt="Logo" className=" h-14 w-14 p-0" /> {/* Adjust logo size as needed */}
    </div>

    {/* Right Side: Search Bar */}
    <div className="flex justify-center items-center bg-white rounded-full pl-3 p-1 overflow-hidden">
      <input
        className="w-32 sm:w-40 text-xl bg-white rounded-md outline-none"
        onChange={(e) => setsearchval(e.target.value)}
        value={searchval}
        placeholder="Search..."
      />
      <FaSearch className="w-10 h-10 p-2 text-xl text-white rounded-full bg-pink-500" />
    </div>
  </div>

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
         
    <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">  
     <div class="pl-5 flex items-center space-x-4 pt-5">
     <div className="relative inline-block w-fit text-white">
      <div className="select group relative cursor-pointer w-fit">
        {/* Selected Dropdown */}
        <div
          className="selected flex items-center justify-between bg-gray-100 rounded-md px-4 py-2 text-sm text-gray-800"
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
        <div className="w-fit options absolute top-8 left-0 z-10 hidden flex-col bg-gray-100 text-gray-800 rounded-md shadow-lg py-2 group-hover:flex transition-opacity duration-300">
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
    </div>
       <div class="flex flex-row justify-end items-center gap-4 ">
       { 
        activecat =="all" && <input
          type="checkbox"
          class="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          id="selectProduct"
          name="all"
          onChange={(e)=>handleCheckboxChange(e,categories.all)}
          checked={selectAll.all} 
        />
       }
       {
        activecat =="smartphones" && <input
          type="checkbox"
          class="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          id="selectProduct"
          onChange={(e)=>handleCheckboxChange(e,categories.smartphones)}
          checked={selectAll.smartphones}
          name="smartphones"
        />
        }
        {
        activecat =="TV" && <input
          type="checkbox"

          name="TV"
          class="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          id="selectProduct"
          onChange={(e)=>handleCheckboxChange(e,categories.TV)}
          checked={selectAll.TV}
        />
        }
        {
        activecat =="laptops" && <input
          type="checkbox"
          name="laptops"
          class="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          id="selectProduct"
          onChange={(e)=>handleCheckboxChange(e,categories.laptops)}
          checked={selectAll.laptops}
        />
        }
        {
        activecat =="homeappliances" && <input
          type="checkbox"
          name="homeappliances"
          class="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          id="selectProduct"
          onChange={(e)=>handleCheckboxChange(e,categories.homeappliances)}
          checked={selectAll.homeappliances}
        />
        }
        {
        activecat =="speakers" && <input
          type="checkbox"
          name="speakers"
          class="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          id="selectProduct"
          onChange={(e)=>handleCheckboxChange(e,categories.speakers)}
          checked={selectAll.speakers}
        />
        }
        {
        activecat =="others" && <input
          type="checkbox"
          name="others"
          class="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          id="selectProduct"
          onChange={(e)=>handleCheckboxChange(e,categories.others)}
          checked={selectAll.others}
        />
        }

        <label for="selectProduct" class="text-sm font-bold">Select All</label>
        <div className="flex-row hidden md:flex">
        <div className="ml-4"
          onClick={topdealsbtn}
          >
          <button className="bg-pink-500 text-white px-2 py-1 rounded cursor-pointer">Top Deals</button>
          </div>
          <div className="ml-4"
          onClick={featuredbtn}>
          <button className="bg-pink-500 text-white px-2 py-1 rounded">Featured</button>
          </div>
          <div className="ml-4"
          onClick={deletebtn}>
          <button className="bg-pink-500 text-white px-2 py-1 rounded">Delete</button>
          </div>
          <div className="ml-4"
         >
            <button className="bg-pink-500 text-white px-2 py-1 rounded" onClick={handleOpen}>
                 Add Product
               </button>
          </div>
          </div>
          <div className=" md:hidden select group relative cursor-pointer w-fit">
        {/* Selected Dropdown */}
        <div
          className="selected flex items-center justify-between bg-gray-100 rounded-md px-4 py-2 text-sm text-gray-800"
          data-default="All"
          data-one="Option 1"
          data-two="Option 2"
          data-three="Option 3"
        >
          <span className="mr-2">Options</span>
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
        <div className="w-fit options absolute top-8 left-0 z-10 hidden flex-col bg-gray-100 text-gray-800 rounded-md shadow-lg py-2 group-hover:flex transition-opacity duration-300">
          <div title="all" className="relative"   onClick={topdealsbtn} >
            <input id="all" name="option" type="radio" className="hidden" defaultChecked />
            <label
              htmlFor="all"
              data-txt="All"
              className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
            >
             Top Deals
            </label>
          </div>
          <div title="option-1" className="relative" onClick={featuredbtn}>
            <input id="option-1" name="option" type="radio" className="hidden" />
            <label
              htmlFor="option-1"
              data-txt="Option 1"
              className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
            >
             Featured
            </label>
          </div>
          <div title="option-2" className="relative" onClick={deletebtn} >
            <input id="option-2" name="option" type="radio" className="hidden" />
            <label

              htmlFor="option-2"
              data-txt="Option 2"
              className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
            >
             Delete
            </label>
          </div>
          <div title="option-3" className="relative"
          onClick={handleOpen}>
            <input id="option-3" name="option" type="radio" className="hidden" />
            <label
              htmlFor="option-3"
              data-txt="Option 3"
              className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
            >
             AddProduct
            </label>
          </div>
        </div>
      </div>
          
      </div>

     </div>
   </div>
    {/* <ProductsGrid cate={activecat}/> */}
    <section class="w-full h-full bg-transparent px-5 antialiased ">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
    {searchval === ""
  ? filteredData.map((val, index) => (
      <ProductsCard
        eopen={eopen}
        seteOpen={seteOpen}
        data={val}
        key={index}
        id={index + 1}
        selectedItems={selectedItems}
        setselectedItems={setselectedItems}
      />
    ))
  : data
      .filter((val) => val.name.toLowerCase().includes(searchval.toLowerCase()))
      .map((val, index) => (
        <ProductsCard
          eopen={eopen}
          seteOpen={seteOpen}
          data={val}
          key={index}
          id={index + 1}
          selectedItems={selectedItems}
          setselectedItems={setselectedItems}
        />
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




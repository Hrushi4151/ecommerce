"use client";

import ProductsCard from "@/app/components/ProductsCard";
import { Productsdata } from "@/app/components/Providers";
import React, { useContext, useEffect, useState } from "react";
import Toastify from 'toastify-js'

const page = () => {
  const [data, setdata] = useState([]);
  const [selectedItems, setselectedItems] = useState(data);
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setselectedItems(data);
    } else {
      setselectedItems([]);
    }
  };

  const handleButton =async () => {
    let ids=[]
    selectedItems.map((val) => {
      ids.push(val._id);
    })
    console.log(ids)
    const res=fetch("/api/addfeaturedProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids }),
    });
    let r=await res.json();
    if(r.status==200){
      fetchdata()
    }

  };

  const handleDeleteButton = async () => {
    let ids=[]
    selectedItems.map((val) => {
      ids.push(val._id);
    })
    console.log(ids)
    const res=await fetch("/api/deletefeaturedProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids }),
    });

    let r=await res.json();
    fetchdata();
    if(r.status==200){
      setselectedItems([])
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


  const fetchdata = async () => {
    const res = await fetch("/api/getfeaturedproducts");
    const d = await res.json();
    console.log(d.status);
    if (d.status==200) {
      setdata(d.result);
    }
  };


  useEffect(() => {
    fetchdata()
  }, []);


useEffect(() => {
  let admin=localStorage.getItem('admin');
  admin=JSON.parse(admin);
  if (admin.id=="admin@gmail.com" && admin.password=="admin") {
    router.push('/admin/products')
    }
}, [])

  return (
    <>
      <div className="productspage h-[calc(100vh-2.5rem)] relative m-5 rounded-2xl flex flex-col justify-between items-center overflow-auto hide-scrollbar">
        <section id="featured" className="relative container mx-auto py-8 px-5">
          <h2 className="text-3xl font-bold text-center mb-6">
            Featured Products
          </h2>
          <div class="flex flex-row justify-start items-center my-4">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                class="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                id="selectProduct"
                name="all"
                onChange={(e) => handleCheckboxChange(e)}
                checked={selectedItems.length === data.length}
              />
              <label for="selectProduct" class="text-sm font-bold">
                Select All
              </label>
            </div>
            <div className="ml-4" onClick={handleDeleteButton}>
              <button className="bg-pink-500 text-white px-2 py-1 rounded">
                Delete
              </button>
            </div>
            {/* <div className="ml-4" onClick={handleButton}>
              <button className="bg-pink-500 text-white px-2 py-1 rounded">
                Set On Front
              </button>
            </div> */}
          </div>
         {data.length>0 ? <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
            {data.map((val, index) => {
              return (
                <ProductsCard
                  key={index}
                  data={val}
                  selectedItems={selectedItems}
                  setselectedItems={setselectedItems}
                />
              );
            })}
          </div>:<div className="text-2xl font-bold text-center mb-8">No Data</div>}
        </section>
        <div
        onClick={()=>handleButton()}
        className=" bg-red-500 text-white text-lg uppercase px-4 py-2 sticky bottom-2 left-1/2 transform -translate-x-1/2 rounded z-10">
          <button>Save</button>
        </div>
      </div>

      {/* <div className="productspage h-[calc(100vh-2.5rem)] absolute  m-5 rounded-2xl flex flex-col justify-between items-center overflow-auto hide-scrollbar">
       <section id="featured" class=" relative container mx-auto py-8">
    <h2 class="text-3xl font-bold text-center mb-6">Featured Products</h2>
    <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 overflow-x-auto overflow-y-hidden">
    {data.map((index)=>{
       
        return(
            <ProductsCard  key={index} id={index} selectedItems={selectedItems} setselectedItems={setselectedItems} />
  
      )
    })}

    </div>
      </section>
    <div className="bg-red-500 text-white text-lg uppercase px-2 py-1 fixed top-2 left-2 rounded">
                          <button>
                            Save
                          </button>
                        </div>
    </div> */}
    </>
  );
};

export default page;

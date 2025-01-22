// import React, { useState, useEffect, useContext } from "react";
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
// import { Productsdata } from "./Providers";
// import Link from "next/link";

// const TopDealsCarousel = () => {
//     const {fav, setFav } = useContext(Productsdata);
//     const [data, setdata] = useState([]);
//     const handleFav = (item) => {
//       let updatedFav;
  
//       if (Array.isArray(fav) && fav.some((favItem) => favItem._id === item._id)) {
//         updatedFav = fav.filter((favItem) => favItem._id !== item._id);
//       } else {
//         updatedFav = [...fav, item];
//       }
  
//       setFav(updatedFav);
//       localStorage.setItem("fav", JSON.stringify(updatedFav));
//     };

//     const fetchdata = async () => {
//       try {
//         const res = await fetch("/api/getTopDeals");
//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const d = await res.json();
//         setdata(d.result);
//       } catch (error) {
//         console.error(error);
//       }
//     };
    
  
//   useEffect(() => {

//     const f = localStorage.getItem("fav");
//     if (f) {
//       setFav(JSON.parse(f));
//     } else {
//       setFav([]);
//     }
//   }, [setFav]);


//   useEffect(() => {
//     fetchdata()
//   }, [])
  

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const chunkSize = 3;

//   const dividedArrays = [];
//   for (let i = 0; i < data.length; i += chunkSize) {
//     dividedArrays.push(data.slice(i, i + chunkSize));
//   }

//   const showSlide = (index) => {
//     console.log(index)
//     setCurrentIndex((index + dividedArrays.length) % dividedArrays.length);
//   };

//   const nextSlide = () => {
//     showSlide(currentIndex + 1);
//   };

//   const prevSlide = () => {
//     showSlide(currentIndex - 1);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [currentIndex]);

//   return (
//     <div className="bg-gradient-to- from-gray-400 to-purple-200 container mx-auto p-4">
//       <h2 className="text-2xl font-bold text-center mb-8">Top Deals</h2>
//       {data.length > 0 ? <div className="relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-500"
//           style={{ transform: `translateX(-${currentIndex * 100}%) ` }}
//         >
//           {dividedArrays.map((slide, index) => {
//             return (
//               <div key={index} className="w-full flex-shrink-0">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
//                   {
//                     slide.map((val) => (
//                       <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
//                         <Link href={`/products/${val._id}`}>
//                         {/* Discount Label */}
//                         <div className="bg-red-500 text-white text-lg uppercase px-2 py-1 absolute top-2 left-2 rounded">
//                           {(((val.price - val.dprice) / val.price) * 100).toFixed(0)}% OFF
//                         </div>

//                         {/* Product Image */}
//                         <div className="h-56 w-full">
//                           <a href="#">
//                             <img
//                               className="mx-auto h-full"
//                               src={val.images[0]}
//                               alt=""
//                             />
//                           </a>
//                         </div>
// </Link>
//                         {/* Product Info */}
//                         <div className="pt-6">
//                           <Link
//                             href={`/products/${val._id}`}
//                             className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
//                           >
//                           {val.name}
//                           </Link>
//                           {/* Product Ratings */}
//                           <div className="mt-2 flex items-center gap-2">
//                             <div className="flex items-center">
//                               {/* Star Icons */}
//                               {[...Array(5)].map((_, i) => (
//                                 <svg
//                                   key={i}
//                                   className="h-4 w-4 text-yellow-400"
//                                   aria-hidden="true"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
//                                 </svg>
//                               ))}
//                             </div>
//                             <p className="text-sm font-medium text-gray-900">
//                               5.0
//                             </p>
//                             <p className="text-sm font-medium text-gray-500">
//                               (455)
//                             </p>
//                           </div>

//                           {/* Product Features */}
//                           <ul class="mt-2 flex items-center gap-4">
//                             <li class="flex items-center gap-2">
//                               <svg
//                                 class="h-4 w-4 text-gray-500 "
//                                 aria-hidden="true"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   stroke="currentColor"
//                                   stroke-linecap="round"
//                                   stroke-width="2"
//                                   d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
//                                 />
//                               </svg>
//                               <p class="text-sm font-medium text-gray-500 ">
//                                 Best Price
//                               </p>
//                             </li>
//                           </ul>
//                           <div class="mt-4 flex items-center justify-between gap-4">
//                             <div>
//                               <p class="text-lg line-through font- leading-tight text-gray-900 ">
//                                 Rs.{val.price}
//                               </p>
//                               <p class="text-2xl font-extrabold leading-tight text-gray-900 ">
//                                 Rs.{val.dprice}
//                               </p>
//                             </div>
//                           </div>
//                           <button
//   onClick={() => handleFav(val)}
//   className="w-full flex justify-center items-center py-2 px-4 bg-pink-600 text-white font-semibold rounded hover:bg-pink-500 transition-colors"
// >
//   {Array.isArray(fav) && !fav.some((favItem) => favItem._id === val._id) ? (
//     <>
//       Add to
//       <MdFavoriteBorder className="w-fit h-fit text-xl font-thin pl-1" />
//     </>
//   ) : (
//     <>
//       Remove
//       <MdFavorite className="w-fit h-fit text-xl font-thin pl-1" />
//     </>
//   )}
// </button>

//                         </div>
//                       </div>
//                     ))
//                   }
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
//         >
//           <svg
//             className="w-6 h-6 text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19l-7-7 7-7"
//             ></path>
//           </svg>
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
//         >
//           <svg
//             className="w-6 h-6 text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 5l7 7-7 7"
//             ></path>
//           </svg>
//         </button>
//       </div> : <div className="text-2xl font-bold text-center mb-8">No Data</div>}
//     </div>
//   );
// };

// export default TopDealsCarousel;


import React, { useState, useEffect, useContext } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Productsdata } from "./Providers";
import Link from "next/link";

const TopDealsCarousel = () => {
    const { fav, setFav } = useContext(Productsdata);
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleFav = (item) => {
        let updatedFav;
        if (Array.isArray(fav) && fav.some((favItem) => favItem._id === item._id)) {
            updatedFav = fav.filter((favItem) => favItem._id !== item._id);
        } else {
            updatedFav = [...fav, item];
        }
        setFav(updatedFav);
        localStorage.setItem("fav", JSON.stringify(updatedFav));
    };

    const fetchData = async () => {
        try {
            const res = await fetch("/api/getTopDeals");
            const d = await res.json();
            if (d.result) {
                setData(d.result);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const f = localStorage.getItem("fav");
        if (f) {
            setFav(JSON.parse(f));
        } else {
            setFav([]);
        }
    }, [setFav]);

    useEffect(() => {
        fetchData();
    }, []);

    const chunkSize = 3;
    const dividedArrays = [];
    for (let i = 0; i < data.length; i += chunkSize) {
        dividedArrays.push(data.slice(i, i + chunkSize));
    }

    const showSlide = (index) => {
        if (dividedArrays.length > 0) {
            setCurrentIndex((index + dividedArrays.length) % dividedArrays.length);
        }
    };

    const nextSlide = () => {
        if (dividedArrays.length > 0) {
            showSlide(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (dividedArrays.length > 0) {
            showSlide(currentIndex - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentIndex]);

    if (!data.length) return <div></div>;

    return (
        <div className="bg-gradient-to- from-gray-400 to-purple-200 container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-8">Top Deals</h2>
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%) ` }}
                >
                    {dividedArrays.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
                                {slide.map((val) => (
                                    <div key={val._id} className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                                        <Link href={`/products/${val._id}`}>
                                            {/* Discount Label */}
                                            <div className="bg-red-500 text-white text-lg uppercase px-2 py-1 absolute top-2 left-2 rounded">
                                                {(((val.price - val.dprice) / val.price) * 100).toFixed(0)}% OFF
                                            </div>

                                            {/* Product Image */}
                                            <div className="h-56 w-full">
                                                <a href="#">
                                                    <img className="mx-auto h-full" src={val.images[0]} alt="" />
                                                </a>
                                            </div>
                                        </Link>
                                        {/* Product Info */}
                                        <div className="pt-6">
                                            <Link href={`/products/${val._id}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
                                                {val.name}
                                            </Link>
                                            {/* Product Ratings */}
                                            <div className="mt-2 flex items-center gap-2">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">5.0</p>
                                                <p className="text-sm font-medium text-gray-500">(455)</p>
                                            </div>

                                            {/* Product Features */}
                                            <ul className="mt-2 flex items-center gap-4">
                                                <li className="flex items-center gap-2">
                                                    <svg className="h-4 w-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                                    </svg>
                                                    <p className="text-sm font-medium text-gray-500">Best Price</p>
                                                </li>
                                            </ul>
                                            <div className="mt-4 flex items-center justify-between gap-4">
                                                <div>
                                                    <p className="text-lg line-through font- leading-tight text-gray-900">
                                                        Rs.{val.price}
                                                    </p>
                                                    <p className="text-2xl font-extrabold leading-tight text-gray-900">
                                                        Rs.{val.dprice}
                                                    </p>
                                                </div>
                                            </div>
                                            <button onClick={() => handleFav(val)} className="w-full flex justify-center items-center py-2 px-4 bg-pink-600 text-white font-semibold rounded hover:bg-pink-500 transition-colors">
                                                {Array.isArray(fav) && !fav.some((favItem) => favItem._id === val._id) ? (
                                                    <>
                                                        Add to
                                                        <MdFavoriteBorder className="w-fit h-fit text-xl font-thin pl-1" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Remove
                                                        <MdFavorite className="w-fit h-fit text-xl font-thin pl-1" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TopDealsCarousel;

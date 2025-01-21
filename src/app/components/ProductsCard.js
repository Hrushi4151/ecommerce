// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useContext, useEffect, useState } from "react";
// import { MdEdit, MdFavorite, MdFavoriteBorder } from "react-icons/md";
// import EditProductPopUp from "@/app/components/EditProductPopUp";
// import { Productsdata } from "./Providers";

// const ProductsCard = ({
//   data,
//   selectedItems = [],
//   setselectedItems,
//   id
// }) => {
//   const path = usePathname();
//   const [eopen, seteOpen] = useState(false);
//   const { fav, setFav } = useContext(Productsdata);

//   const handleFav = (item) => {
//     let updatedFav;
  
//     // Check if the object (by its id) already exists in the favorites
//     if (fav.some((favItem) => favItem._id === item._id)) {
//       // Remove the object if it exists
//       updatedFav = fav.filter((favItem) => favItem._id !== item._id);
//     } else {
//       // Add the object if it doesn't exist
//       updatedFav = [...fav, item];
//     }
  
//     setFav(updatedFav); // Update state
//     localStorage.setItem("fav", JSON.stringify(updatedFav)); // Store the updated array in localStorage
//     console.log("Updated Favorites:", updatedFav);
//   };

//   useEffect(() => {
//     const f = localStorage.getItem('fav');
//     if (f) {
//       setFav(JSON.parse(f)); // Parse and set the favorites from localStorage
//     } else {
//       setFav([]); // Initialize with an empty array if no data exists
//     }
//   }, []);
  

//   const handleCheckboxChange = (event) => {
//     const isChecked = event.target.checked;
//     setselectedItems(
//       (prevSelected) =>
//         isChecked
//           ? [...prevSelected, data] // Add the item if checked
//           : prevSelected.filter((k) => k._id !== data._id) // Remove the item if unchecked
//     );
//   };

//   return (
//     <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
//       <EditProductPopUp eopen={eopen} seteOpen={seteOpen} data={data} />
//       {data.dprice && (
//         <div className="bg-red-500 text-white text-lg uppercase px-2 py-1 absolute top-2 left-2 rounded">
//           {(((data.price - data.dprice) / data.price) * 100).toFixed(0)}% OFF
//         </div>
//       )}
//       {path.includes("admin") && (
//         <div className="absolute top-2 right-2">
//           <input
//             type="checkbox"
//             className="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
//             id="selectProduct"
//             onChange={handleCheckboxChange}
//             checked={selectedItems.includes(data)}
//           />
//           <label htmlFor="selectProduct" className="sr-only">
//             Select Product
//           </label>
//         </div>
//       )}

//       <Link href={`/products/` + data._id}>
//         <div className="h-56 w-full">
//           <img
//             className="mx-auto h-full"
//             src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
//             alt="Product"
//           />
//         </div>
//       </Link>
//       <div className="pt-6">
//         <h2 className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
//           {data.name}
//         </h2>

//         <div className="mt-2 flex items-center gap-2">
//           {/* Rating icons */}
//           {[...Array(5)].map((_, idx) => (
//             <svg
//               key={idx}
//               className="h-4 w-4 text-yellow-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
//             </svg>
//           ))}
//           <p className="text-sm font-medium text-gray-900">5.0</p>
//           <p className="text-sm font-medium text-gray-500">(455)</p>
//         </div>

//         <ul className="mt-2 flex items-center gap-4">
//           <li className="flex items-center gap-2">
//             <svg
//               className="h-4 w-4 text-gray-500"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
//               />
//             </svg>
//             <p className="text-sm font-medium text-gray-500">Fast Delivery</p>
//           </li>

//           <li className="flex items-center gap-2">
//             <svg
//               className="h-4 w-4 text-gray-500"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeWidth="2"
//                 d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
//               />
//             </svg>
//             <p className="text-sm font-medium text-gray-500">Best Price</p>
//           </li>
//         </ul>

//         <div className="mt-4 flex items-center justify-between gap-4">
//           <p className="text-2xl font-extrabold leading-tight text-gray-900">
//             ${data.price}
//           </p>

//           {path.includes("admin") ? (
//             <button
//               type="button"
//               className="inline-flex items-center rounded-lg bg-pink-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
//               onClick={() => seteOpen(true)}
//             >
//               Edit
//               <MdEdit className="w-fit h-fit text-xl font-thin pl-1" />
//             </button>
//           ) : (
//             <> 
//   <button
//     onClick={() => handleFav(data)} // Add the full data object
//     type="button"
//     className="inline-flex items-center rounded-lg bg-pink-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
//   >
//     {Array.isArray(fav) && !fav.some((favItem) => favItem._id === data._id) ? (
//   <>
//     Add to
//     <MdFavoriteBorder className="w-fit h-fit text-xl font-thin pl-1" />
//   </>
// ) : (
//   <>
//     Remove
//     <MdFavorite className="w-fit h-fit text-xl font-thin pl-1" />
//   </>
// )}
//   </button>


//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsCard;



"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { MdEdit, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import EditProductPopUp from "@/app/components/EditProductPopUp";
import { Productsdata } from "./Providers";

const ProductsCard = ({ data, selectedItems = [], setselectedItems }) => {
  const path = usePathname();
  const [eopen, seteOpen] = useState(false);
  const { fav, setFav } = useContext(Productsdata);

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

  useEffect(() => {
    const f = localStorage.getItem("fav");
    if (f) {
      setFav(JSON.parse(f));
    } else {
      setFav([]);
    }
  }, [setFav]);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setselectedItems((prevSelected) =>
      isChecked
        ? [...prevSelected, data]
        : prevSelected.filter((k) => k._id !== data._id)
    );
  };

  return (
    <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm w-full">
      <EditProductPopUp eopen={eopen} seteOpen={seteOpen} data={data} />
      {data && data.dprice && (
        <div className="bg-red-500 text-white text-lg uppercase px-2 py-1 absolute top-2 left-2 rounded">
          {(((data.price - data.dprice) / data.price) * 100).toFixed(0)}% OFF
        </div>
      )}

      {path.includes("admin") && (
        <div className="absolute top-2 right-2">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
            id="selectProduct"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes(data)}
          />
          <label htmlFor="selectProduct" className="sr-only">
            Select Product
          </label>
        </div>
      )}

      <Link href={`/products/${data._id}`}>
        <div className="h-56 w-full">
          <img
            className="mx-auto h-full"
            src={data.images.length>0 ? data.images[0] : "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"}
            alt="Product"
          />
        </div>
      </Link>

      <div className="pt-6">
        <h2 className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
          {data.name}
        </h2>

        <div className="mt-2 flex items-center gap-2">
          {[...Array(5)].map((_, idx) => (
            <svg
              key={`rating-${idx}`}
              className="h-4 w-4 text-yellow-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          ))}
          <p className="text-sm font-medium text-gray-900">5.0</p>
          <p className="text-sm font-medium text-gray-500">(455)</p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900">
          <div>
                              <p class="text-lg line-through font- leading-tight text-gray-900 ">
                                Rs.{data.price}
                              </p>
                              <p class="text-2xl font-extrabold leading-tight text-gray-900 ">
                                Rs.{data.dprice}
                              </p>
                            </div>
          </p>
          {path.includes("admin") ? 
          <button
            onClick={() => seteOpen(true)}
            type="button"
            className="inline-flex items-center rounded-lg bg-pink-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            Edit
            <MdEdit className="w-fit h-fit text-xl font-thin pl-1" />
          </button>
      :
          <button
            onClick={() => handleFav(data)}
            type="button"
            className="inline-flex items-center rounded-lg bg-pink-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            {Array.isArray(fav) && !fav.some((favItem) => favItem._id === data._id) ? (
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
          }
        </div>
      </div>

      {/* {path.includes("admin") && (
        <div className="absolute top-2 left-10">
          <button
            type="button"
            onClick={() => seteOpen(true)}
            className="inline-flex items-center rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            Edit
            <MdEdit className="w-fit h-fit text-xl font-thin pl-1" />
          </button>
        </div>
      )} */}
    </div>
  );
};

export default ProductsCard;


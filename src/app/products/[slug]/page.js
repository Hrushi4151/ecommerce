'use client';
import Loader from '@/app/components/Loader';
import { Productsdata } from '@/app/components/Providers';
import { useContext, useEffect, useState } from 'react';

const ProductInfo = ({ params }) => {
   const { data } = useContext(Productsdata);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSSD, setSelectedSSD] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = data.find((item) => item._id === params.slug);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]); // Set the default image
        setLoading(false);
      }
    };
    
    if (data.length > 0) {
      fetchProduct();
    }
  }, [data, params.slug]);

  if (loading || !product) {
    // Render a loader or fallback UI while product data is loading
    return (
      <div className="h-[calc(100vh-2.5rem)] flex items-center justify-center">
       <Loader />
      </div>
    );
  }

   
  return (
    <div className=" h-[calc(100vh-2.5rem)]  m-5 rounded-2xl flex flex-row lg:flex-row gap-8 p-8 bg-gray-100 dropshadowbtn text-black">
      
      {/* Product Image Gallery */}
      <div className="flex flex-col items-center w-[100%] h-[100%] lg:w-1/2 ">
         <div className="flex justify-center items-center w-[100%] h-[100%] mb-4 rounded-md shadow-xl shadow-pink-400 border border-pink-300">
        <img src={selectedImage} alt="Product" className="h-auto w-auto" />
         </div>
        <div className="flex space-x-2">
          {product.images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt="Thumbnail"
              className={`w-20 h-20 cursor-pointer rounded-md ${selectedImage === image ? 'border-2 border-blue-500' : ''}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
      
      {/* Product Information */}
      <div className="w-full lg:w-1/2 space-y-6">
        <p className="text-green-500 font-semibold">In stock</p>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2 text-black">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <span className='text-bue-400'>({product.reviews} Reviews)</span>
        </div>
        <p className="text-4xl font-bold">${product.price}</p>

        <div className="flex gap-4">
          <button className="px-4 py-2 border border-pink-500 rounded-md">Add to Favorites</button>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-md">Add to Cart</button>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 p-2 border rounded-md bg-pink-800 text-center"
          />
        </div>

        {/* Color Options */}
        <div>
          <h3 className="text-lg font-semibold">Color</h3>
          <div className="flex gap-2 mt-2">
              <button
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 rounded-md bg-pink-600`}
              >
                {product.color}
              </button>
          </div>
        </div>

        {/* SSD Options */}
        <div>
          <h3 className="text-lg font-semibold">SSD Capacity</h3>
          <div className="flex gap-2 mt-2">
            {/* {product.ssdOptions.map((ssd, idx) => ( */}
              <button
                
                onClick={() => setSelectedSSD(ssd)}
                className={`px-4 py-2 rounded-md ${selectedSSD === "ssd" ? 'bg-pink-600' : 'bg-gray-300'}`}
              >
                ssd
              </button>
             {/* ))} */}``
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default ProductInfo;


// 'use client';
// import Loader from '@/app/components/Loader';
// import { Productsdata } from '@/app/components/Providers';
// import { useContext, useEffect, useState } from 'react';

// const ProductInfo = ({ params }) => {
//   const { data } = useContext(Productsdata);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedSSD, setSelectedSSD] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     const fetchProduct = () => {
//       const foundProduct = data.find((item) => item._id === params.slug);
//       if (foundProduct) {
//         setProduct(foundProduct);
//         setSelectedImage([]); // Set the default image
//         setLoading(false);
//       }
//     };
    
//     if (data.length > 0) {
//       fetchProduct();
//     }
//   }, [data, params.slug]);

//   if (loading || !product) {
//     // Render a loader or fallback UI while product data is loading
//     return (
//       <div className="h-[calc(100vh-2.5rem)] flex items-center justify-center">
//        <Loader />
//       </div>
//     );
//   }


//   return (
//     <div className="h-[calc(100vh-2.5rem)] m-5 rounded-2xl flex flex-col lg:flex-row gap-8 p-8 bg-gray-100 shadow-lg text-black">
//       {/* Product Image Gallery */}
//       <div className="flex flex-col items-center w-full lg:w-1/2">
//         <div className="flex justify-center items-center w-full h-96 mb-4 rounded-md shadow-xl shadow-pink-400 border border-pink-300">
//           <img src={selectedImage} alt="Product" className="h-auto w-auto" />
//         </div>
//         <div className="flex space-x-2">
//           {/* {product.images.map((image, idx) => (
//             <img
//               key={idx}
//               src={image}
//               alt="Thumbnail"
//               className={`w-20 h-20 cursor-pointer rounded-md ${
//                 selectedImage === image ? 'border-2 border-blue-500' : ''
//               }`}
//               onClick={() => setSelectedImage(image)}
//             />
//           ))} */}
//         </div>
//       </div>

//       {/* Product Information */}
//       <div className="w-full lg:w-1/2 space-y-6">
//         <p className="text-green-500 font-semibold">In stock</p>
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <div className="flex items-center gap-2 text-black">
//           <p className="text-yellow-500">★ ★ ★ ★ ★</p>
//           <span className="text-blue-400">(Reviews)</span>
//         </div>
//         <p className="text-4xl font-bold">Rs. {product.price}</p>

//         <div className="flex gap-4">
//           <button className="px-4 py-2 border border-pink-500 rounded-md">
//             Add to Favorites
//           </button>
//           <button className="px-4 py-2 bg-pink-600 text-white rounded-md">
//             Add to Cart
//           </button>
//           <input
//             type="number"
//             value={quantity}
//             min="1"
//             onChange={(e) => setQuantity(e.target.value)}
//             className="w-16 p-2 border rounded-md bg-pink-800 text-center"
//           />
//         </div>

//         {/* Color Options */}
//         <div>
//           <h3 className="text-lg font-semibold">Color</h3>
//           <div className="flex gap-2 mt-2">
//             {product.colors.map((color, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setSelectedColor(color)}
//                 className={`px-4 py-2 rounded-md ${
//                   selectedColor === color ? 'bg-pink-600' : 'bg-gray-300'
//                 }`}
//               >
//                 {color}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* SSD Options */}
//         <div>
//           <h3 className="text-lg font-semibold">SSD Capacity</h3>
//           <div className="flex gap-2 mt-2">
//             { product.ssdOptions && product.ssdOptions.map((ssd, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setSelectedSSD(ssd)}
//                 className={`px-4 py-2 rounded-md ${
//                   selectedSSD === ssd ? 'bg-pink-600' : 'bg-gray-300'
//                 }`}
//               >
//                 {ssd}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;

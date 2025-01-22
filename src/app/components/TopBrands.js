import Link from 'next/link';
import React from 'react';

const TopBrands = () => {
  const brands = [
    { name: 'Sony', logo: 'https://via.placeholder.com/150x100?text=Sony' },
    { name: 'Samsung', logo: 'https://via.placeholder.com/150x100?text=Samsung' },
    { name: 'Apple', logo: 'https://via.placeholder.com/150x100?text=Apple' },
    { name: 'LG', logo: 'https://via.placeholder.com/150x100?text=LG' },
    { name: 'Bose', logo: 'https://via.placeholder.com/150x100?text=Bose' },
    { name: 'JBL', logo: 'https://via.placeholder.com/150x100?text=JBL' },
    { name: 'Panasonic', logo: 'https://via.placeholder.com/150x100?text=Panasonic' },
    { name: 'Philips', logo: 'https://via.placeholder.com/150x100?text=Philips' },
    { name: 'JBL', logo: 'https://via.placeholder.com/150x100?text=JBL' },
    { name: 'Panasonic', logo: 'https://via.placeholder.com/150x100?text=Panasonic' },
    { name: 'Philips', logo: 'https://via.placeholder.com/150x100?text=Philips' },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-200 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">Top Brands</h2>
        <p className="text-gray-700 mb-10">Explore the most trusted brands in the electronics industry!</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => {if(index<7)return( 
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={brand.logo} alt={brand.name} className="w-32 h-20 object-contain" />
              </div>
              <p className="mt-4 font-semibold text-gray-800">{brand.name}</p>
            </div>
          )})}
          <div className="flex flex-col  justify-center">
              {/* <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"> */}
              <Link href="/brands" className="mt-4 font-semibold text-gray-800">See More</Link>
              {/* </div> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;

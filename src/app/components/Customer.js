import React from 'react';

const Customer = () => {
  const customers = [
    {
      name: 'John Doe',
      product: 'Smartphone',
      review: 'Great experience! The quality is fantastic, and the service at AAo Sai Electronics was top-notch!',
      image: '/s1.png'
    },
    {
      name: 'Jane Smith',
      product: 'Headphone',
      review: 'I absolutely love my new headphones! AAo Sai Electronics has the best deals and products.',
      image: '/s1.png'
    },
    {
      name: 'Michael Lee',
      product: 'Laptop',
      review: 'Excellent service and quality! I highly recommend AAo Sai Electronics for any tech needs.',
      image: '/s1.png'
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">Happy Customers</h2>
        <p className="text-center text-gray-600 mb-12">See what our customers are saying about AAo Sai Electronics!</p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {customers.map((customer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={customer.image} 
                alt={customer.name} 
                className="w-400 h-400 object-cover rounded-lg mb-4 mx-auto" 
                style={{ width: '400px', height: '400px' }} 
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">{customer.name}</h3>
              <p className="text-sm text-gray-500 text-center">Purchased a {customer.product}</p>
              <p className="mt-4 text-gray-700 text-center">"{customer.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;

import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between ">
          
          {/* Shop Description */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">AAo Sai Electronics</h3>
            <p>Explore a world of top-notch electronics and unbeatable deals. Your satisfaction is our priority!</p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/offers" className="hover:text-white transition-colors">Offers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 text-right">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-end">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF size={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center text-white mt-8">
          <p>&copy; 2024 Aao Sai Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

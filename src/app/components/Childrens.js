// components/Childrens.js
"use client";
import React, { Suspense, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Loader from './Loader';
import Footer from './Footer';
import {Providers} from './Providers';
import "toastify-js/src/toastify.css"

const Childrens = ({ children }) => {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Show the loader when the path changes
    setShowLoader(true);

    // Set a timeout to hide the loader after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    // Cleanup the timeout when the component unmounts or path changes again
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <div className="flex flex-row ">
    
          <Providers>
     {pathname=='/admin' ?<></>: <Navbar />}
      {showLoader ? (
       <div className='flex justify-center items-center w-[100vw] h-[100vh] '> <Loader /></div>
      ) : (
       
        <main className="w-full md:w-[80vw] h-full">{children}

        </main>
      )}
      </Providers>
    </div>
  );
};

export default Childrens;

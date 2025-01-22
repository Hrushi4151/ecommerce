"use client";
import { createContext, useEffect, useState } from "react";

export const Productsdata = createContext();

export const Providers = ({ children }) => {
 
  const [data, setData] = useState([]);
  const [featured, setfeatured] = useState([]);
  const [fav, setFav] = useState(() => {
    if (typeof window !== "undefined") {
      const storedFav = localStorage.getItem("fav");
      return storedFav ? JSON.parse(storedFav) : []; // Parse or default to an empty array
    }
    return []; // Default value during server-side rendering
  });
  
  const [categories, setCategories] = useState({
    all: [],
    smartphones: [],
    laptops: [],
    TV: [],
    homeappliances: [],
    speakers: [],
    others: [],
  });

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/getproducts");
      const { products } = await response.json();
      const categorized = {
        all: products,
        smartphones: products.filter((val) => val.category === "smartphones"),
        laptops: products.filter((val) => val.category === "laptops"),
        TV: products.filter((val) => val.category === "TV"),
        homeappliances: products.filter(
          (val) => val.category === "homeappliances"
        ),
        speakers: products.filter((val) => val.category === "speakers"),
        others: products.filter((val) => val.category === "others"),
      };
      setCategories(categorized);
      setData(categorized.all);
      console.error("Error fetching products:", categorized);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Productsdata.Provider value={{data, categories, setData, fav, setFav,fetchProducts }}>
      {children}
    </Productsdata.Provider>
  );
};

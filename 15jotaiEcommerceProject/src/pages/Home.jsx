import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../components/index";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Correctly set the products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="container mx-auto px-4 ">
      <h2 className="text-2xl font-bold text-gray-400 mb-6 pb-5 text-center border-b">CheckOut Our New Products at <span className="text-black"> NEXTON eCommerce </span> !!!</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {
            products.map( (product) => {
                return <ProductCard key={product.id} product={product}/> 
            })
        }
      </div>
    </div>
  );
}

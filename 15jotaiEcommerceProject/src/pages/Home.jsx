import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../components/index";
import { useAtom } from "jotai";
import { loadableDataAtom } from "../atom/cartAtom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [data] = useAtom(loadableDataAtom)
  console.log(data.state);


  useEffect(() => {
    // Define an async function inside useEffect
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Correctly set the products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false)
      }
    };

    fetchProducts(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once

  if (loading || data?.state === "loading") {
    return (
      <div className="loader flex justify-center items-center min-h-screen">
        <svg
          className="animate-spin h-12 w-12 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          width="50"
          viewBox="0 0 24 24"
        >
          <path
            fill="#5f6368"
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
            opacity="0.4"
          />
          <path fill="#5f6368" d="M20 12a8 8 0 0 1-8 8v-2a6 6 0 0 0 6-6z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-500 mb-6 pb-5 text-center border-b">
        Check Out Our New Products at{" "}
        <span className="text-black relative hover:text-3xl">
          NEXTON eCommerce !!!
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
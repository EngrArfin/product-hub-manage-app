/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { getProducts } from "@/src/services/getProducts";
import { TProduct } from "@/src/types";
import { useEffect, useState } from "react";
import ProductCard from "./ProducrCard";

const ProductData = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <span className="text-xl text-gray-500">Loading Products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <span className="text-xl text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <section className="py-5 px-5 mx-auto">
      <h1 className="text-4xl font-bold text-left mb-6 leading-tight text-gray-800 dark:text-white">
        Explore Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        ) : (
          <div className="col-span-full text-center py-4 text-lg text-gray-500">
            No products available.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductData;

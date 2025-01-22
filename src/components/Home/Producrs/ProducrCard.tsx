"use client";
import { TProduct } from "@/src/types";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { _id, title, price, photo, stock, discount } = product;
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    console.log("Image failed to load. Using default image.");
    setImgError(true);
  };

  const imageUrl =
    imgError || !photo?.thumbnail ? "/default-profile.jpg" : photo.thumbnail;

  return (
    <div className="card bg-white dark:bg-gray-800 w-full max-w-sm shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-transform duration-300 transform hover:scale-105 m-2">
      <figure className="relative w-full h-40 overflow-hidden rounded-t-lg">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
          width={320}
          height={140}
          onError={handleImageError}
        />
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded">
            -{discount}%
          </span>
        )}
      </figure>

      <div className="card-body p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
          {title}
        </h2>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-1">
            <p className="text-gray-700 dark:text-gray-200 font-medium">
              $
              {discount ? (price - (price * discount) / 100).toFixed(2) : price}
            </p>
            {discount && (
              <span className="text-gray-500 dark:text-gray-400 text-sm line-through">
                ${price}
              </span>
            )}
          </div>
          <span
            className={`text-xs px-2 py-1 rounded ${
              stock > 0
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
            }`}
          >
            {stock > 0 ? `${stock} in stock` : "Out of stock"}
          </span>
        </div>
      </div>

      <div className="flex justify-center p-4">
        <Link
          href={`/products/${_id}`}
          className="bg-teal-500 dark:bg-teal-700 text-white text-sm font-medium py-2 px-6 rounded hover:bg-teal-600 dark:hover:bg-teal-800 transition-transform duration-300 transform hover:scale-105 shadow-md"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

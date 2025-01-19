import Link from "next/link";
import photo from "../../UI/image/product.jpg";
import Image from "next/image";

const ProducrCard = () => {
  return (
    <div className="card bg-white w-full max-w-sm shadow-lg rounded-lg border border-gray-200 duration-300 transform  relative">
      <Link href={`/services/`}>
        <figure className="relative w-full h-56 overflow-hidden">
          <Image
            src={photo || "/default-profile.jpg"}
            alt="photo"
            className="object-cover w-full h-full rounded-t-lg"
            width={320}
            height={160}
          />
        </figure>
      </Link>

      <div className="card-body p-2">
        <h2 className="text-lg font-medium text-gray-900 truncate">
          A Beautiful Cosmetic Advertising{" "}
        </h2>
        <div className="flex items-center ">
          <p className="text-sm text-gray-700 mr-2">
            Price : 1000
            <span className=" text-sm text-orange-600">Discount </span>
          </p>
          {/*  {price && ( */}
          <div className="flex flex-col items-start">
            <p className="text-sm text-gray-600 line-through">1200</p>
          </div>
          {/* )} */}
        </div>
        <div className="flex items-center">
          <span className="font-bold text-sm">
            Quantity: <span className="text-red-600">Good</span>
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-sm">
            stock: <span className="text-green-600">Available</span>
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-1 mb-1">
        <Link
          href={`/products/`}
          className="bg-green-700 text-white py-2 px-8 rounded font-semibold hover:bg-green-900 transition-transform duration-300 transform hover:scale-105"
        >
          Product
        </Link>
      </div>
    </div>
  );
};

export default ProducrCard;

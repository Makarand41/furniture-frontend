import React from "react";
import { Link } from "react-router-dom";
import productBg from "../assets/productBg.jpg"; // ✅ Import your image

const ProductsHeader = () => {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-white py-3 sm:py-4 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center text-xs sm:text-sm text-gray-700 space-x-2">
          <Link
            to="/"
            className="hover:text-amber-800 font-medium transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="font-semibold text-gray-900">Products</span>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-[200px] sm:h-[250px] md:h-[280px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${productBg})`,
        }}
      >
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center z-10 px-4">
          Products
        </h1>
      </div>
    </div>
  );
};

export default ProductsHeader;
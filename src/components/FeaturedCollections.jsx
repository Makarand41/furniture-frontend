import React from "react";
import fc01 from "../assets/fc01.jpeg";
import fc02 from "../assets/fc02.jpg";
import fc03 from "../assets/fc03.jpeg";
import fc04 from "../assets/fc04.jpeg";

const items = [
  { id: 1, img: fc01, title: "Dining Room Sets", count: "" },
  { id: 2, img: fc02, title: "Wooden Chairs", count: "" },
  { id: 3, img: fc03, title: "Luxury Sofas", count: "" },
  { id: 4, img: fc04, title: "Study Tables", count: "" },
];

const FeaturedCollections = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="text-amber-400 tracking-widest text-sm uppercase mb-2">
          Furniture Picks Every Room Style
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-12">
          Featured Collections
        </h2>

        {/* Responsive Circles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 place-items-center">
          {items.map((it) => (
            <div
              key={it.id}
              className="relative group flex items-center justify-center cursor-pointer"
            >
              {/* Circular frame */}
              <div className="rounded-full border border-gray-200 
                              w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 
                              flex items-center justify-center overflow-hidden 
                              transition-transform duration-300 group-hover:scale-105">
                {/* Image */}
                <img
                  src={it.img}
                  alt={it.title}
                  className="object-contain w-[80%] h-[80%] transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 rounded-full 
                                flex flex-col items-center justify-center text-white px-2 text-center">
                  <p className="text-xs sm:text-sm md:text-base font-semibold">
                    {it.title}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-200">
                    {it.count}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;

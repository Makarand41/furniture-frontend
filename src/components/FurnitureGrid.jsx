import React, { useEffect, useState } from "react";
import axios from "axios";

const buildImageUrl = (path) => {
  if (!path) return null;
  const cleaned = path.replace(/^\/+/, "");
  return `http://localhost:8081/${cleaned}`;
};

export default function FurnitureGrid() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:8081/api/furniture/all");
        setItems(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Fetch error:", err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center py-24 text-gray-500">
        Loading…
      </div>
    );

  if (items.length === 0)
    return (
      <div className="flex items-center justify-center py-24 text-gray-500">
        No furniture found.
      </div>
    );

  return (
    <section className="bg-[#fff8f6] py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Our Furniture Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((f) => {
            const imgUrl = buildImageUrl(f.image);
            return (
              <article
                key={f.id}
                className="group bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* square image area */}
                <div className="w-full aspect-square bg-white flex items-center justify-center">
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={f.name || "furniture"}
                      className="max-w-full max-h-full object-contain p-4 transition-transform duration-400 group-hover:scale-105"
                      draggable="false"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                      No Image
                    </div>
                  )}
                </div>

                {/* content */}
                <div className="px-4 py-4">
                  <div className="flex items-center justify-between w-full mb-3">
                    <p className="text-base font-medium text-gray-900 line-clamp-2">
                      {f.name}
                    </p>

                    {/* category badge */}
                    {f.category?.name && (
                      <span className="ml-3 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                        {f.category.name}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-5 py-2 border border-gray-800 text-sm font-medium rounded-md hover:bg-gray-900 hover:text-white transition"
                      aria-label={`View ${f.name}`}
                      onClick={() => console.log(`View ${f.id}`)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

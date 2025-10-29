// src/components/CategorySidebar.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../api";
export default function CategorySidebar({
  selectedCategories,
  onChangeSelectedCategories,
  productList = [], // pass products to compute counts
}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchCategories = async () => {
      try {
        // const res = await axios.get("http://localhost:8080/api/category/all");
        const res = await api.get("/api/category/all");
        if (!mounted) return;
        setCategories(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to fetch categories", err);
        setCategories([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchCategories();
    return () => (mounted = false);
  }, []);

  // compute counts from productList
  const counts = productList.reduce((acc, p) => {
    const catId = p.category?.id ?? "uncategorized";
    acc[catId] = (acc[catId] || 0) + 1;
    return acc;
  }, {});

  const toggleCategory = (catId) => {
    // allow multi-select. If you want single-select use different logic.
    const already = selectedCategories.includes(catId);
    if (already) {
      onChangeSelectedCategories(selectedCategories.filter((c) => c !== catId));
    } else {
      onChangeSelectedCategories([...selectedCategories, catId]);
    }
  };

  if (loading) {
    return (
      <aside className="w-full md:w-64 p-6 bg-transparent">
        <h3 className="text-lg font-semibold mb-4">Filter</h3>
        <div className="text-sm text-gray-500">Loading categories…</div>
      </aside>
    );
  }

  return (
    <aside className="w-full md:w-64 p-6 bg-transparent">
      <h3 className="text-2xl font-bold mb-4">Filter:</h3>

      <div className="border-t border-gray-200 pt-4">
        <h4 className="text-sm font-semibold mb-3">Categories</h4>

        {/* "All" control */}
        <label className="flex items-center gap-3 mb-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedCategories.length === 0}
            onChange={() => onChangeSelectedCategories([])} // empty => all
            className="w-4 h-4"
          />
          <span className="text-sm text-gray-700">All ({productList.length})</span>
        </label>

        <div className="space-y-2 mt-2">
          {categories.map((cat) => {
            const count = counts[cat.id] ?? 0;
            return (
              <label key={cat.id} className="flex items-center justify-between gap-3 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">{cat.name}</span>
                </div>
                <span className="text-sm text-gray-400">({count})</span>
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

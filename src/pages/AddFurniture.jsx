import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./AddFurniture.module.css";

const AddFurniture = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
    status: "",
    categoryId: "",
  });
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });

  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/category/all");
      setCategories(res.data);
    } catch {
      setCategories([]);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCategorySelect = (e) => {
    const value = e.target.value;
    if (value === "add_new") {
      setShowNewCategory(true);
      setForm({ ...form, categoryId: "" });
    } else {
      setShowNewCategory(false);
      setForm({ ...form, categoryId: value });
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) {
      setMessage({ type: "error", text: "Category name is required!" });
      return;
    }

    try {
      const res = await axios.post("http://localhost:8081/api/category/add", {
        name: newCategory,
      });
      setNewCategory("");
      setShowNewCategory(false);
      await fetchCategories();
      setForm({ ...form, categoryId: res.data.id });
      setMessage({ type: "success", text: "Category added successfully!" });
    } catch {
      setMessage({ type: "error", text: "Failed to add category!" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.categoryId) {
      setMessage({ type: "error", text: "Name and category are required!" });
      return;
    }

    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      if (image) data.append("image", image);
      for (const img of images) data.append("images", img);

      await axios.post("http://localhost:8081/api/furniture/add", data);

      setMessage({ type: "success", text: "Furniture added successfully!" });
      setForm({
        name: "",
        description: "",
        quantity: "",
        price: "",
        status: "",
        categoryId: "",
      });
      setImage(null);
      setImages([]);
      setNewCategory("");
      setShowNewCategory(false);
    } catch {
      setMessage({ type: "error", text: "Failed to add furniture!" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center flex-1">
            🪑 Add New Furniture
          </h2>
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition ml-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
        </div>

        {message.text && (
          <div
            className={`mb-4 text-center py-2 px-4 rounded-md font-medium ${
              message.type === "error"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              className={styles.input}
              name="name"
              placeholder="Furniture Name *"
              value={form.name}
              onChange={handleChange}
              required
            />
            <select
  name="status"
  value={form.status}
  onChange={handleChange}
  className={styles.select}
  required
>
  <option value="">Select Status (Available/Out of Stock)</option>
  <option value="Available">Available</option>
  <option value="Out of Stock">Out of Stock</option>
</select>

          </div>

          <textarea
            className={styles.textarea}
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              className={styles.input}
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={form.quantity}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="number"
              name="price"
              placeholder="Price (₹)"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <select
            className={styles.select}
            onChange={handleCategorySelect}
            value={form.categoryId}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
            <option value="add_new">➕ Add New Category</option>
          </select>

          {showNewCategory && (
            <div className="flex gap-3 items-center">
              <input
                className={styles.input}
                placeholder="Enter new category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <button
                type="button"
                onClick={handleAddCategory}
                className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition"
              >
                Save
              </button>
            </div>
          )}

          {/* Upload Section */}
          <div className="space-y-5 mt-6">
            {/* Primary Image */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-2">
                Upload Primary Image <span className="text-red-500">*</span>
              </label>
              <label
                htmlFor="primaryImage"
                className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-700 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6.1 5.002 5.002 0 0119 11a4 4 0 11-2.906 6.906M12 14v7m0 0l-3-3m3 3l3-3"
                  />
                </svg>
                <span className="text-gray-600 text-sm font-medium">
                  Click to upload or drag & drop
                </span>
              </label>
              <input
                id="primaryImage"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="hidden"
              />

              {image && (
                <div className="mt-3 flex justify-center">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded-md border"
                  />
                </div>
              )}
            </div>

            {/* Additional Images */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-2">
                Upload Additional Images
              </label>
              <label
                htmlFor="additionalImages"
                className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-600 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="text-gray-600 text-sm font-medium">
                  Upload multiple images
                </span>
              </label>
              <input
                id="additionalImages"
                type="file"
                multiple
                onChange={(e) => setImages(Array.from(e.target.files))}
                className="hidden"
              />

              {images.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3 justify-center">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={URL.createObjectURL(img)}
                      alt={`Preview ${i + 1}`}
                      className="w-24 h-24 object-cover rounded-md border"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-800 hover:bg-amber-900 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
          >
            ✅ Add Furniture
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFurniture;

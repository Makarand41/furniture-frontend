// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const EditFurniture = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     quantity: "",
//     price: "",
//     status: "",
//     categoryId: "",
//   });
//   const [categories, setCategories] = useState([]);
//   const [image, setImage] = useState(null);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetchFurniture();
//     fetchCategories();
//   }, []);

//   const fetchFurniture = async () => {
//     const res = await axios.get(`http://localhost:8080/api/furniture/${id}`);
//     setForm({
//       name: res.data.name,
//       description: res.data.description || "",
//       quantity: res.data.quantity || "",
//       price: res.data.price || "",
//       status: res.data.status || "",
//       categoryId: res.data.category?.id || "",
//     });
//   };

//   const fetchCategories = async () => {
//     const res = await axios.get("http://localhost:1/api/category/all");
//     setCategories(res.data);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.entries(form).forEach(([key, value]) => data.append(key, value));
//     if (image) data.append("image", image);
//     for (const img of images) data.append("images", img);

//     await axios.put(`http://localhost:8080/api/furniture/update/${id}`, data, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//     alert("Furniture updated successfully!");
//     navigate("/furniture/list");
//   };

//   return (
//     <div>
//       <h2>Edit Furniture</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
//         <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
//         <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" />
//         <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" />
//         <input name="status" value={form.status} onChange={handleChange} placeholder="Status" />

//         <select name="categoryId" value={form.categoryId} onChange={handleChange}>
//           <option value="">Select Category</option>
//           {categories.map((c) => (
//             <option key={c.id} value={c.id}>{c.name}</option>
//           ))}
//         </select>

//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//         <input type="file" multiple onChange={(e) => setImages(Array.from(e.target.files))} />

//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default EditFurniture;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../api";
const EditFurniture = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
    status: "",
    categoryId: "",
  });
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFurniture();
    fetchCategories();
  }, []);

  const fetchFurniture = async () => {
    try {
     // const res = await axios.get(`http://localhost:8080/api/furniture/${id}`);
      const res = await api.get(`/api/furniture/${id}`);
      setForm({
        name: res.data.name,
        description: res.data.description || "",
        quantity: res.data.quantity || "",
        price: res.data.price || "",
        status: res.data.status || "",
        categoryId: res.data.category?.id || "",
      });
    } catch (err) {
      console.error("Error fetching furniture:", err);
      setMessage({ type: "error", text: "Failed to load furniture details" });
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      //const res = await axios.get("http://localhost:8080/api/category/all");
      const res = await api.get("/api/category/all");
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    if (image) data.append("image", image);
    for (const img of images) data.append("images", img);

    try {
      await axios.put(`http://localhost:/api/furniture/update/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage({ type: "success", text: "Furniture updated successfully!" });
      setTimeout(() => navigate("/furniture/list"), 1200);
    } catch (err) {
      console.error("Update failed:", err);
      setMessage({ type: "error", text: "Failed to update furniture!" });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
        Loading furniture details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">✏️ Edit Furniture</h2>
          <button
            onClick={() => navigate("/furniture/list")}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            ← Back to List
          </button>
        </div>

        {/* Alert Message */}
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name + Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Furniture Name *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:outline-none"
            />
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:outline-none"
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          {/* Description */}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:outline-none"
          ></textarea>

          {/* Quantity + Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:outline-none"
            />
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price (₹)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:outline-none"
            />
          </div>

          {/* Category */}
          <select
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:outline-none"
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Image Uploads */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-600">
              Update Main Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-800"
            />

            <label className="block text-sm font-medium text-gray-600">
              Update Additional Images
            </label>
            <input
              type="file"
              multiple
              onChange={(e) => setImages(Array.from(e.target.files))}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-amber-800 hover:bg-amber-900 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
          >
            ✅ Update Furniture
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditFurniture;

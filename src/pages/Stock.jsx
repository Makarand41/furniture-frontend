import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Stock = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const statusOptions = ["Ordered", "Delivered", "Pending"];

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    try {
      const res = await api.get("/api/furniture/all");
      setItems(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching stock:", err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const buildImageUrl = (path) => {
    if (!path) return null;
    const cleaned = path.replace(/^\/+/, "");
    return `https://furniture-backend-docker-production.up.railway.app/${cleaned}`;
  };

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600 text-lg">
        Loading stock...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-3 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">📦 Inventory Stock</h2>
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Stock Table */}
        <div className="overflow-x-auto">
          <table className="w-full border text-left text-sm">
            <thead>
              <tr className="bg-amber-700 text-white text-sm">
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {items.map((f) => {
                const img = buildImageUrl(f.image);
                return (
                  <tr key={f.id} className="border-b hover:bg-gray-100">
                    <td className="p-3">
                      {img ? (
                        <img
                          src={img}
                          className="w-14 h-14 object-cover rounded"
                          alt=""
                        />
                      ) : (
                        <div className="w-14 h-14 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
                          No Image
                        </div>
                      )}
                    </td>

                    <td className="p-3 font-medium">{f.name}</td>
                    <td className="p-3">{f.category?.name || "N/A"}</td>
                    <td className="p-3 font-semibold">{f.quantity}</td>

                    {/* ✅ Status Dropdown (Frontend Only) */}
                    <td className="p-3">
                      <select
                        className="border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-amber-700"
                        defaultValue="Pending"
                      >
                        {statusOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Stock;

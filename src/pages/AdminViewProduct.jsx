import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./AdminViewProduct.module.css";
import api from "../api";
const AdminViewProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [furniture, setFurniture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    fetchFurniture();
  }, [id]);

  const fetchFurniture = async () => {
    try {
     // const res = await axios.get(`http://localhost:8080/api/furniture/${id}`);
      const res = await api.get(`/api/furniture/${id}`);
      setFurniture(res.data);
    } catch (error) {
      console.error("Error fetching furniture:", error);
    } finally {
      setLoading(false);
    }
  };

  const buildImageUrl = (path) => {
    if (!path) return null;
    const cleaned = path.replace(/^\/+/, "");
   // return `http://localhost:8080/${cleaned}`;
    return `https://furniture-backend-docker-production.up.railway.app/${cleaned}`;

  };

  const getImageArray = () => {
    if (!furniture) return [];
    const images = [];
    if (furniture.image) images.push(buildImageUrl(furniture.image));
    if (furniture.images && furniture.images.length > 0)
      furniture.images.forEach((img) => images.push(buildImageUrl(img.image)));
    return images;
  };

  const images = getImageArray();

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600 text-base sm:text-lg">
        Loading product details...
      </div>
    );

  if (!furniture)
    return (
      <div className="min-h-screen flex justify-center items-center px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => navigate("/furniture/list")}
            className="mt-2 px-4 sm:px-5 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition text-sm sm:text-base"
          >
            Back to List
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">🪑 Product Details</h2>
          <button
            onClick={() => navigate("/furniture/list")}
            className="px-3 sm:px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition text-sm sm:text-base w-full sm:w-auto"
          >
            ← Back to List
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className={styles.mainImageContainer}>
              {images.length > 0 ? (
                <img
                  src={images[selectedImage]}
                  alt={furniture.name}
                  className={styles.mainImage}
                />
              ) : (
                <div className={styles.noImage}>No Image Available</div>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-lg overflow-hidden ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${furniture.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {furniture.name}
              </h1>
              <div className="space-y-1">
                <p className="text-gray-600 text-xs sm:text-sm">
                  <span className="font-semibold">ID:</span> {furniture.id}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  <span className="font-semibold">Category:</span>{" "}
                  {furniture.category?.name || "N/A"}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={`font-medium ${
                      furniture.status === "Available"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {furniture.status || "N/A"}
                  </span>
                </p>
              </div>
            </div>

            <div className="text-xl sm:text-2xl font-semibold text-gray-900">
              ₹{furniture.price?.toLocaleString()}
            </div>

            {furniture.description && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {furniture.description}
                </p>
              </div>
            )}

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                Inventory Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div>
                  <span className="font-medium text-gray-500">Quantity:</span>
                  <span className="ml-2 text-gray-900">
                    {furniture.quantity || "N/A"}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Created:</span>
                  <span className="ml-2 text-gray-900">
                    {new Date(furniture.createdAt).toLocaleDateString() ||
                      "N/A"}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                Admin Notes
              </h3>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 text-xs sm:text-sm text-gray-700"
                placeholder="Add internal notes about this product..."
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewProduct;
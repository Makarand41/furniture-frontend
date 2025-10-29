// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ViewFurniture = () => {
//   const { id } = useParams();
//   const [furniture, setFurniture] = useState(null);

//   useEffect(() => {
//     fetchFurniture();
//   }, [id]);

//   const fetchFurniture = async () => {
//     try {
//       const res = await axios.get(`http://localhost:8080/api/furniture/${id}`);
//       setFurniture(res.data);
//     } catch (error) {
//       console.error("Error fetching furniture:", error);
//     }
//   };

//   if (!furniture) return <div>Loading furniture details...</div>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Furniture Details</h2>
//       <h3>{furniture.name}</h3>
//       <p><strong>Description:</strong> {furniture.description || "No description"}</p>
//       <p><strong>Quantity:</strong> {furniture.quantity}</p>
//       <p><strong>Price:</strong> ₹{furniture.price}</p>
//       <p><strong>Status:</strong> {furniture.status || "N/A"}</p>
//       <p><strong>Category:</strong> {furniture.category?.name}</p>

//       {furniture.image && (
//         <div>
//           <h4>Main Image:</h4>
//           <img
//             src={`http://localhost:8080/${furniture.image.replace(/^\/+/, "")}`}
//             alt="Main"
//             width="300"
//           />
//         </div>
//       )}

//       {furniture.images && furniture.images.length > 0 && (
//         <div>
//           <h4>Additional Images:</h4>
//           {furniture.images.map((img) => (
//             <img
//               key={img.id}
//               src={`http://localhost:8080/${img.image.replace(/^\/+/, "")}`}
//               alt="Additional"
//               width="150"
//               style={{ marginRight: "10px" }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewFurniture;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./ViewFurniture.module.css";
import api from "../api";
const ViewFurniture = () => {
  const { id } = useParams();
  const [furniture, setFurniture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchFurniture();
  }, [id]);

  const fetchFurniture = async () => {
    try {
      //const res = await axios.get(`http://localhost:8080/api/furniture/${id}`);
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
    if (furniture.image) {
      images.push(buildImageUrl(furniture.image));
    }
    if (furniture.images && furniture.images.length > 0) {
      furniture.images.forEach(img => {
        images.push(buildImageUrl(img.image));
      });
    }
    return images;
  };

  const images = getImageArray();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-300 h-96 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                <div className="h-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!furniture) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600">The furniture item you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <a href="/furniture/Products" className="text-gray-500 hover:text-gray-700">Products</a>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-900 font-medium">{furniture.name}</span>
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
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

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden ${
                        selectedImage === index 
                          ? 'border-blue-500' 
                          : 'border-gray-200 hover:border-gray-300'
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
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {furniture.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{furniture.price?.toLocaleString()}
                  </span>
                  {furniture.originalPrice && furniture.originalPrice > furniture.price && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{furniture.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {furniture.originalPrice && furniture.originalPrice > furniture.price && (
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                      Save ₹{(furniture.originalPrice - furniture.price).toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.5 (128 reviews)</span>
                </div>
              </div>

              {/* Description */}
              {furniture.description && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {furniture.description}
                  </p>
                </div>
              )}

              {/* Product Details */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-500">Category:</span>
                    <span className="ml-2 text-gray-900 capitalize">
                      {furniture.category?.name || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Status:</span>
                    <span className={`ml-2 font-medium ${
                      furniture.status === 'In Stock' 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {furniture.status || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Quantity Available:</span>
                    <span className="ml-2 text-gray-900">
                      {furniture.quantity || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">SKU:</span>
                    <span className="ml-2 text-gray-900">
                      {furniture.id || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      +
                    </button>
                  </div>
                  
                  <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Add to Cart
                  </button>
                  
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Buy Now
                  </button>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Add to Wishlist</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free delivery on orders over ₹999</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFurniture;
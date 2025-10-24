// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const FurnitureList = () => {
//   const [furnitures, setFurnitures] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchFurnitures();
//   }, []);

//   const fetchFurnitures = async () => {
//     try {
//       const res = await axios.get("http://localhost:8081/api/furniture/all");
//       setFurnitures(res.data);
//     } catch (err) {
//       console.error("Error fetching furniture:", err);
//       setFurnitures([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id, name) => {
//     const confirm = window.confirm(`Are you sure you want to delete "${name}"?`);
//     if (!confirm) return;

//     try {
//       await axios.delete(`http://localhost:8081/api/furniture/delete/${id}`);
//       alert("Furniture deleted successfully!");
//       setFurnitures((prev) => prev.filter((f) => f.id !== id)); // update UI instantly
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete furniture!");
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Furniture List</h2>
//       {furnitures.length === 0 ? (
//         <p>No furniture found.</p>
//       ) : (
//         <div style={{ overflowX: "auto" }}>
//           <table
//             style={{
//               width: "100%",
//               borderCollapse: "collapse",
//               minWidth: "800px",
//             }}
//           >
//             <thead>
//               <tr style={{ backgroundColor: "#f5f5f5" }}>
//                 <th style={thStyle}>Sr.No</th>
//                 <th style={thStyle}>Image</th>
//                 <th style={thStyle}>Name</th>
//                 <th style={thStyle}>Category</th>
//                 <th style={thStyle}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {furnitures.map((item, index) => (
//                 <tr key={item.id}>
//                   <td style={tdStyle}>{index + 1}</td>
//                   <td style={tdStyle}>
//                     {item.image && (
//                       <img
//                         src={`http://localhost:8081/${item.image.replace(/^\/+/, "")}`}
//                         alt={item.name}
//                         style={{
//                           width: "80px",
//                           height: "80px",
//                           objectFit: "cover",
//                           borderRadius: "4px",
//                         }}
//                       />
//                     )}
//                   </td>
//                   <td style={tdStyle}>{item.name}</td>
//                   <td style={tdStyle}>{item.category?.name}</td>
//                   <td style={tdStyle}>
//                     <button style={viewBtn}>View</button>
//                     <button style={editBtn}>Edit</button>
//                     <button
//                       style={deleteBtn}
//                       onClick={() => handleDelete(item.id, item.name)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// const thStyle = {
//   border: "1px solid #ddd",
//   padding: "12px",
//   textAlign: "left",
// };

// const tdStyle = {
//   border: "1px solid #ddd",
//   padding: "12px",
// };

// const viewBtn = {
//   margin: "2px",
//   padding: "6px 12px",
//   backgroundColor: "#007bff",
//   color: "white",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// const editBtn = {
//   margin: "2px",
//   padding: "6px 12px",
//   backgroundColor: "#28a745",
//   color: "white",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// const deleteBtn = {
//   margin: "2px",
//   padding: "6px 12px",
//   backgroundColor: "#dc3545",
//   color: "white",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// export default FurnitureList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FurnitureList = () => {
  const [furnitures, setFurnitures] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFurnitures();
  }, []);

  const fetchFurnitures = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/furniture/all");
      setFurnitures(res.data);
    } catch (err) {
      console.error("Error fetching furniture:", err);
      setFurnitures([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${name}"?`);
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8081/api/furniture/delete/${id}`);
      alert("✅ Furniture deleted successfully!");
      setFurnitures((prev) => prev.filter((f) => f.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("❌ Failed to delete furniture!");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading furniture list...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            🪑 Furniture Inventory
          </h2>
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Furniture Table */}
        {furnitures.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No furniture records found.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-amber-800 text-white">
                <tr>
                  <th className="px-6 py-3">Sr. No</th>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {furnitures.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-3 font-medium text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-6 py-3">
                      {item.image ? (
                        <img
                          src={`http://localhost:8081/${item.image.replace(/^\/+/, "")}`}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md border"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md text-gray-500">
                          N/A
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-3 text-gray-800 font-medium">
                      {item.name}
                    </td>
                    <td className="px-6 py-3 text-gray-600">
                      {item.category?.name || "—"}
                    </td>
                    <td className="px-6 py-3 text-center flex justify-center gap-3">
                     <button
  onClick={() => navigate(`/admin/view/${item.id}`)}
  className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
>
  <FaEye /> View
</button>

                     <button
  onClick={() => navigate(`/furniture/edit/${item.id}`)}
  className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition"
>
  <FaEdit /> Edit
</button>

                      <button
                        className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
                        onClick={() => handleDelete(item.id, item.name)}
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default FurnitureList;

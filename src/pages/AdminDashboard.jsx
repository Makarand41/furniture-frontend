// // import React, { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// // const AdminDashboard = () => {
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const admin = localStorage.getItem("admin");
// //     if (!admin) {
// //       navigate("/admin/login");
// //     }
// //   }, [navigate]);

// //   const handleLogout = () => {
// //     localStorage.removeItem("admin");
// //     navigate("/admin/login");
// //   };

// //   return (
// //     <div>
// //       <h2>Admin Dashboard</h2>
// //       <p>Welcome, Admin!</p>
// //       <button onClick={handleLogout}>Logout</button>

// // <br/><br/><br/>
// //       <button onClick={() => navigate("/admin/add-furniture")}>Add Furniture</button>
// // <br/><br/><br/>
// //         <button onClick={() => navigate('/furniture/list')}>
// //       View Furniture List
// //     </button>

// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const admin = localStorage.getItem("admin");
//     if (!admin) {
//       navigate("/admin/login");
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("admin");
//     navigate("/admin/login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Top Navbar */}
//       <header className="w-full bg-amber-800 text-white py-4 px-6 flex justify-between items-center shadow-md sticky top-0 z-20">
//         <h1 className="text-2xl font-semibold tracking-wide">Admin Dashboard</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-white text-amber-800 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition"
//         >
//           Logout
//         </button>
//       </header>

//       {/* Main Content */}
//       <main className="flex flex-col items-center justify-center flex-grow px-6 py-12">
//         <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             Welcome, Admin 👋
//           </h2>
//           <p className="text-gray-600 mb-10">
//             Manage your furniture inventory, add new items, and review existing listings.
//           </p>

//           {/* Buttons */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
//             <button
//               onClick={() => navigate("/admin/add-furniture")}
//               className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-4 rounded-lg shadow-md font-semibold transition-transform transform hover:-translate-y-1"
//             >
//               ➕ Add New Furniture
//             </button>

//             <button
//               onClick={() => navigate("/furniture/list")}
//               className="bg-gray-900 hover:bg-black text-white px-6 py-4 rounded-lg shadow-md font-semibold transition-transform transform hover:-translate-y-1"
//             >
//               📋 View Furniture List
//             </button>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="text-center py-4 text-gray-500 text-sm">
//         © {new Date().getFullYear()} FurniStore Admin Panel
//       </footer>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (!admin) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <header className="w-full bg-amber-800 text-white py-4 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 shadow-md sticky top-0 z-20">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-wide text-center sm:text-left">
          Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-white text-amber-800 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition text-sm sm:text-base w-full sm:w-auto"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Welcome, Admin 👋
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-10 text-sm sm:text-base">
            Manage your furniture inventory, add new items, and review existing listings.
          </p>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 justify-center">
            <button
              onClick={() => navigate("/admin/add-furniture")}
              className="bg-amber-800 hover:bg-amber-900 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md font-semibold transition-transform transform hover:-translate-y-1 text-sm sm:text-base w-full"
            >
              ➕ Add New Furniture
            </button>

            <button
              onClick={() => navigate("/furniture/list")}
              className="bg-gray-900 hover:bg-black text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md font-semibold transition-transform transform hover:-translate-y-1 text-sm sm:text-base w-full"
            >
              📋 View Furniture List
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} FurniStore Admin Panel
      </footer>
    </div>
  );
};

export default AdminDashboard;

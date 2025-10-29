// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import styles from "./AdminLogin.module.css";

// const AdminLogin = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:8080/api/admin/login", form, {
//         headers: { "Content-Type": "application/json" },
//       });

//       localStorage.setItem("admin", JSON.stringify(res.data));

//       toast.success("✅ Login successful! Redirecting...", {
//         position: "top-center",
//         autoClose: 2000,
//         theme: "colored",
//         style: {
//           background: "linear-gradient(135deg, #8B7355, #A89276)",
//           color: "#fff",
//           fontWeight: "600",
//           borderRadius: "12px",
//         },
//       });

//       setTimeout(() => navigate("/admin/dashboard"), 2500);
//     } catch (err) {
//       const msg = err.response?.data || "Login failed. Check credentials.";
//       setError(typeof msg === "string" ? msg : JSON.stringify(msg));

//       toast.error(`❌ ${msg}`, {
//         position: "top-center",
//         autoClose: 3000,
//         theme: "colored",
//         style: {
//           background: "#b91c1c",
//           color: "#fff",
//           fontWeight: "600",
//           borderRadius: "12px",
//         },
//       });
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen font-inter overflow-hidden">
//       <ToastContainer />

//       {/* Background */}
//       <div className={`${styles.loginBackground}`}>
//         <div className={styles.backgroundOverlay}></div>
//       </div>

//       <div className="relative w-[95%] max-w-[1200px] h-[85vh] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl flex overflow-hidden">
//         {/* Left Section */}
//         <div className="flex-1 bg-gradient-to-br from-[#8B7355] to-[#A89276] p-14 flex items-center justify-center relative overflow-hidden">
//           <div className={styles.brandOverlay}></div>
//           <div className="text-center text-white relative z-10">
//             <div className="flex items-center justify-center gap-4 mb-10">
//               <div className="text-5xl bg-white/20 p-4 rounded-2xl backdrop-blur-md">🪑</div>
//               <h1 className="text-4xl font-bold drop-shadow-lg">LuxuryFurnish</h1>
//             </div>
//             <div className="mb-10">
//               <h2 className="text-2xl font-semibold mb-4">Transform Your Space</h2>
//               <p className="text-base opacity-90 leading-relaxed max-w-md mx-auto">
//                 Discover premium furniture that brings elegance and comfort to your home
//               </p>
//             </div>

//             <div className="flex flex-col gap-4 max-w-sm mx-auto">
//               {[
//                 { icon: "⭐", text: "Premium Quality" },
//                 { icon: "🚚", text: "Free Delivery" },
//                 { icon: "🔒", text: "Secure Shopping" },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md"
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span className="font-medium">{item.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Section – Login Form */}
//         <div className="flex-1 p-14 flex items-center justify-center">
//           <div className="w-full max-w-sm">
//             <div className="text-center mb-10">
//               <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h2>
//               <p className="text-gray-500 text-lg">Access your dashboard</p>
//             </div>

//             {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Email */}
//               <div>
//                 <label className="block mb-2 text-gray-700 font-medium">Email Address</label>
//                 <div className="relative">
//                   <span className="absolute left-4 top-3.5 text-lg">✉️</span>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block mb-2 text-gray-700 font-medium">Password</label>
//                 <div className="relative">
//                   <span className="absolute left-4 top-3.5 text-lg">🔒</span>
//                   <input
//                     type="password"
//                     name="password"
//                     value={form.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password"
//                     className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <a href="#" className="text-[#8B7355] text-sm font-medium hover:underline">
//                   Forgot password?
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex justify-between items-center bg-gradient-to-r from-[#8B7355] to-[#A89276] text-white py-4 px-6 rounded-xl text-lg font-semibold hover:-translate-y-0.5 transition-all shadow-md"
//               >
//                 <span>Sign In</span>
//                 <span className="text-xl">→</span>
//               </button>

//               <div className="text-center text-gray-500 text-sm">
//                 Don’t have an account?
//                 <Link to="/admin/register" className="text-[#8B7355] font-semibold ml-1 hover:underline">
//                   Sign up
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Floating Icons */}
//       <div className={`${styles.floatingElement} ${styles.element1}`}>🛋️</div>
//       <div className={`${styles.floatingElement} ${styles.element2}`}>💡</div>
//       <div className={`${styles.floatingElement} ${styles.element3}`}>🪴</div>
//     </div>
//   );
// };

// export default AdminLogin;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./AdminLogin.module.css";
import api from "../api";
const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // const res = await axios.post("http://localhost:8080/api/admin/login", form, {
      //   headers: { "Content-Type": "application/json" },
      // });
      const res = await api.post("/api/admin/login", form, {
  headers: { "Content-Type": "application/json" },
});

      localStorage.setItem("admin", JSON.stringify(res.data));

      toast.success("✅ Login successful! Redirecting...", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
        style: {
          background: "linear-gradient(135deg, #8B7355, #A89276)",
          color: "#fff",
          fontWeight: "600",
          borderRadius: "12px",
        },
      });

      setTimeout(() => navigate("/admin/dashboard"), 2500);
    } catch (err) {
      const msg = err.response?.data || "Login failed. Check credentials.";
      setError(typeof msg === "string" ? msg : JSON.stringify(msg));

      toast.error(`❌ ${msg}`, {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
        style: {
          background: "#b91c1c",
          color: "#fff",
          fontWeight: "600",
          borderRadius: "12px",
        },
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen font-inter overflow-hidden px-4 sm:px-6 lg:px-8 py-8">
      <ToastContainer />

      {/* Background */}
      <div className={`${styles.loginBackground}`}>
        <div className={styles.backgroundOverlay}></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-7xl h-auto min-h-[85vh] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#8B7355] to-[#A89276] p-6 sm:p-8 lg:p-14 flex items-center justify-center relative overflow-hidden order-2 lg:order-1">
          <div className={styles.brandOverlay}></div>
          <div className="text-center text-white relative z-10 w-full max-w-md">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-10">
              <div className="text-4xl sm:text-5xl bg-white/20 p-3 sm:p-4 rounded-2xl backdrop-blur-md">🪑</div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold drop-shadow-lg mt-4 sm:mt-0">LuxuryFurnish</h1>
            </div>
            <div className="mb-6 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Transform Your Space</h2>
              <p className="text-sm sm:text-base opacity-90 leading-relaxed max-w-md mx-auto">
                Discover premium furniture that brings elegance and comfort to your home
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 max-w-sm mx-auto">
              {[
                { icon: "⭐", text: "Premium Quality" },
                { icon: "🚚", text: "Free Delivery" },
                { icon: "🔒", text: "Secure Shopping" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md"
                >
                  <span className="text-base sm:text-lg">{item.icon}</span>
                  <span className="font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section – Login Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-14 flex items-center justify-center order-1 lg:order-2">
          <div className="w-full max-w-sm">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Admin Login</h2>
              <p className="text-gray-500 text-base sm:text-lg">Access your dashboard</p>
            </div>

            {error && <p className="text-red-500 text-center mb-4 text-sm sm:text-base">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Email */}
              <div>
                <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">Email Address</label>
                <div className="relative">
                  <span className="absolute left-3 sm:left-4 top-3 sm:top-3.5 text-base sm:text-lg">✉️</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full pl-10 sm:pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm sm:text-base focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">Password</label>
                <div className="relative">
                  <span className="absolute left-3 sm:left-4 top-3 sm:top-3.5 text-base sm:text-lg">🔒</span>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full pl-10 sm:pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm sm:text-base focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-[#8B7355] text-xs sm:text-sm font-medium hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full flex justify-between items-center bg-gradient-to-r from-[#8B7355] to-[#A89276] text-white py-3 sm:py-4 px-6 rounded-xl text-base sm:text-lg font-semibold hover:-translate-y-0.5 transition-all shadow-md"
              >
                <span>Sign In</span>
                <span className="text-lg sm:text-xl">→</span>
              </button>

              <div className="text-center text-gray-500 text-xs sm:text-sm">
                Don't have an account?
                <Link to="/admin/register" className="text-[#8B7355] font-semibold ml-1 hover:underline">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Icons - Hidden on mobile, visible on larger screens */}
      <div className={`${styles.floatingElement} ${styles.element1} hidden sm:block`}>🛋️</div>
      <div className={`${styles.floatingElement} ${styles.element2} hidden sm:block`}>💡</div>
      <div className={`${styles.floatingElement} ${styles.element3} hidden sm:block`}>🪴</div>
    </div>
  );
};

export default AdminLogin;
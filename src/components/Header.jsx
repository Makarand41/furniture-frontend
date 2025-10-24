// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // optional icons (from lucide-react)

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="w-full h-[96px] bg-[#FAF5F2] fixed top-0 left-0 z-50 shadow-md flex items-center justify-between px-6">
//       {/* Logo */}
//       <div className="flex items-center">
//         <img src="/Logo.jpg" alt="Logo" className="h-16 w-auto object-contain" />
//       </div>

//       {/* Hamburger (mobile) */}
//       <div className="md:hidden">
//         <button onClick={toggleMenu} className="focus:outline-none">
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Nav Links */}
//       <nav
//         className={`absolute md:static top-[96px] left-0 w-full md:w-auto bg-[#FAF5F2] md:bg-transparent transition-all duration-300 ease-in-out 
//         ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:opacity-100 md:visible`}
//       >
//         <ul className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-0 text-lg font-medium">
//           {[
//             { path: "/", label: "Home" },
//             { path: "/furniture/Products", label: "Products" },
//             { path: "/furniture/About", label: "About" },
//             { path: "/furniture/Contact", label: "Contact" },
//           ].map(({ path, label }) => (
//             <li key={path}>
//               <NavLink
//                 to={path}
//                 end={path === "/"}
//                 className={({ isActive }) =>
//                   `block transition-colors ${
//                     isActive
//                       ? "text-[#df7c0b] underline font-semibold"
//                       : "hover:text-[#df7c0b] hover:underline"
//                   }`
//                 }
//                 onClick={() => setIsOpen(false)} // auto-close on click
//               >
//                 {label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-[96px] bg-[#FAF5F2] fixed top-0 left-0 z-50 shadow-md flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/Logo.jpg"
          alt="Logo"
          className="h-8 w-auto object-contain md:h-8 lg:h-8" // ✅ fixed size scaling
        />
      </div>

      {/* Hamburger (mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`absolute md:static top-[96px] left-0 w-full md:w-auto bg-[#FAF5F2] md:bg-transparent transition-all duration-300 ease-in-out 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:opacity-100 md:visible`}
      >
        <ul className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-0 text-lg font-medium">
          {[
            { path: "/", label: "Home" },
            { path: "/furniture/Products", label: "Products" },
            { path: "/furniture/About", label: "About" },
            { path: "/furniture/Contact", label: "Contact" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `block transition-colors ${
                    isActive
                      ? "text-[#df7c0b] underline font-semibold"
                      : "hover:text-[#df7c0b] hover:underline"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

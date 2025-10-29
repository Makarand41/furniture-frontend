import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2E1D09] text-gray-300 py-4 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* Left side */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          {/* Language selector */}
          <div className="relative">
            {/* Language selector content if needed */}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025, <span className="font-semibold text-white">Qx Plank</span> Powered by{" "}
            <span className="font-semibold text-white">Nano Tech Softwares</span>
          </p>
        </div>

        {/* Right side — Payment icons */}
        <div className="flex items-center gap-3">
          {/* Payment icons content if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#fff8f6] border-2 border-red-400 hover:border-red-500 rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-black w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTopButton;

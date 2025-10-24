import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// ✅ Only needed modules (no Navigation)
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import BoxA2 from "../assets/boxA2.jpg";
import BoxA3 from "../assets/boxA3.jpg";

const SlideContent = ({ image, eyebrow, heading, subheading }) => {
  return (
    <div
      className="relative w-full h-[calc(100vh-106px)] bg-center bg-cover flex items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Subtle dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <motion.div
        className="relative z-10 pl-8 sm:pl-16 lg:pl-20 max-w-3xl text-left text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="uppercase tracking-[4px] text-[12px] text-amber-400 mb-4 font-semibold"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl leading-relaxed text-gray-100 mb-8 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {subheading}
        </motion.p>

        <motion.button
          className="bg-black text-white px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-gray-800 transition"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          SHOP NOW →
        </motion.button>
      </motion.div>
    </div>
  );
};

const HomeCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        <SwiperSlide>
          <SlideContent
            image={BoxA2}
            eyebrow="Minimal Meets Functional"
            heading="Redefine Comfort & Luxury"
            subheading="Experience the latest trends in sustainable furniture. Stylish designs that bring warmth to your living space."
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideContent
            image={BoxA3}
            eyebrow="Timeless Elegance"
            heading="Modern Furniture For Every Space"
            subheading="Discover handcrafted pieces that blend comfort and style. Perfectly designed to elevate your home’s personality."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;

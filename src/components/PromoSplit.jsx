import React from "react";
import { motion } from "framer-motion";
import promoLeft from "../assets/promo-left.webp"; // replace with your left image
import promoRight from "../assets/promo-right.webp"; // replace with your right image

const PromoCard = ({ image, eyebrow, title, text, inverted = false }) => {
  // inverted=true will use dark background style (left card)
  return (
    <motion.div
      className={`relative w-full rounded-lg overflow-hidden shadow-sm ${
        inverted ? "bg-black" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* background image for non-inverted; for inverted we keep image as background too */}
      <div
        className={`absolute inset-0 ${inverted ? "bg-black/70 mix-blend-normal" : ""}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          ...(inverted ? { backgroundBlendMode: "multiply" } : {}),
        }}
        aria-hidden="true"
      />

      {/* overlay to create left dark band on left card and mild overlay on right */}
      <div className={`absolute inset-0 pointer-events-none ${inverted ? "" : "bg-black/25"}`} />

      {/* content */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center">
        <p className="uppercase tracking-widest text-amber-400 text-sm mb-4">{eyebrow}</p>

        <h3
          className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-white max-w-md leading-tight ${
            inverted ? "" : "drop-shadow-md"
          }`}
        >
          {title}
        </h3>

        <p className="mt-4 text-base md:text-lg text-gray-100 max-w-lg">{text}</p>

        <div className="mt-8">
          {/* outlined button with animated orange slide-up background */}
          <button
            className={`relative inline-flex items-center justify-center rounded-md px-6 py-3 border overflow-hidden font-semibold tracking-wide transition-transform duration-300 transform hover:scale-105 group ${
              inverted ? "border-gray-300 text-white" : "border-white text-white"
            }`}
            aria-label={`View products for ${title}`}
          >
            {/* orange background slide (starts below, slides up on hover) */}
            <span
              className="absolute inset-0 bg-gradient-to-t from-amber-600 to-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
              aria-hidden="true"
            />

            {/* button text */}
            <span className="relative z-10">VIEW PRODUCTS</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PromoSplit = () => {
  return (
    <section className="py-12 bg-rose-50/60">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PromoCard
            image={promoLeft}
            eyebrow="Premium Quality Materials"
            title="Crafted For Comfort"
            text="Elevate your routine with our curated beauty essentials. Limited-time offers on radiant skincare."
            inverted={true}
          />

          <PromoCard
            image={promoRight}
            eyebrow="On Orders Over $500"
            title="Fast & Free Shipping"
            text="Transform your beauty routine with our premium skincare and cosmetic essentials."
            inverted={false}
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSplit;

import React from "react";
import styles from "./NoticeBar.module.css";

const NoticeBar = () => {
  return (
    <div className="w-full h-20 flex items-center overflow-hidden bg-gradient-to-r from-amber-700 to-black text-white font-semibold text-[17px] tracking-wide">
      <div className={`flex whitespace-nowrap ${styles.marquee}`}>
        <div className="flex items-center gap-12">
          <span>🛋️ Upgrade Your Home – Save 20%</span>
          <span>🪑 Free Shipping on Orders Over Rs 5000</span>
          <span>🛋️ Buy More, Save More</span>
          <span>🌟 New Arrivals Weekly</span>
          <span>🪞 Redefine Your Space with Modern Comfort</span>
          <span>🛒 Shop Now and Save Big!</span>
          {/* duplicate set for seamless loop */}
          <span>🛋️ Upgrade Your Home – Save 20%</span>
          <span>🪑 Free Shipping on Orders Over Rs 5000</span>
          <span>🛋️ Buy More, Save More</span>
          <span>🌟 New Arrivals Weekly</span>
          <span>🪞 Redefine Your Space with Modern Comfort</span>
          <span>🛒 Shop Now and Save Big!</span>
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;

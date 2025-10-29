import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Priya Patil",
    role: "Interior Designer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    title: "Truly Impressed With The Quality",
    content:
      "Every piece feels custom-made. The craftsmanship is exceptional and the comfort is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohit Kulkarni",
    role: "Homeowner",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
    title: "Seamless Shopping Experience",
    content:
      "From browsing to delivery, everything was smooth and professional. The sofa looks amazing in our living room.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Deshmukh",
    role: "Architect",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
    title: "Stylish & Sustainable Space Beautifully",
    content:
      "Love that I can decorate my space beautifully without compromising on sustainability. Their furniture brings warmth to every corner.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mahesh Pawar",
    role: "Restaurant Owner",
    img: "https://randomuser.me/api/portraits/men/63.jpg",
    title: "Premium Furniture For Business",
    content:
      "Our restaurant seating looks luxurious and guests always compliment the wooden finishing and comfort.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      {/* <div className="max-w-7xl mx-auto px-6"> */}
      <div className="w-full max-w-[1600px] mx-auto px-2 lg:px-10">


        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-amber-600 font-semibold mb-2 text-sm">
            Real Stories With Our Furniture
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            What Our Customers Are Saying
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            className="pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white rounded-xl border border-gray-200 p-10 h-full min-h-[330px] flex flex-col justify-between shadow-sm hover:shadow-lg transition">
                  
                  {/* Stars */}
                  <div className="flex gap-1 text-amber-500 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#fbbf24" stroke="#fbbf24" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {t.title}
                  </h3>

                  {/* Text */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t.content}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          <div className="testimonial-pagination flex justify-center mt-8"></div>
        </div>
      </div>

      {/* Pagination styling */}
      <style jsx>{`
        .testimonial-pagination :global(.swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
        }
        .testimonial-pagination :global(.swiper-pagination-bullet-active) {
          background: #f59e0b;
        }
        .swiper-slide {
          display: flex !important;
          justify-content: center !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

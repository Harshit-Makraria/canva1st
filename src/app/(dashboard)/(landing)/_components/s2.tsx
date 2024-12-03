"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const categories = [
    { image: "/Visitingcard.webp", name: "Visiting Cards" },
    { image: "/Polotshirt.webp", name: "Custom Polo T-shirts" },
    { image: "/WinterWear.webp", name: "Custom Winter Wear" },
    { image: "/Tshirt.webp", name: "Custom T-shirts" },
    { image: "/Stamp.webp", name: "Custom Stamps & Ink" },
    { image: "/picmug.webp", name: "Photo Gifts" },
    { image: "/label.webp", name: "Labels, Stickers & Packaging" },
    { image: "/label.webp", name: "Custom Stationery" },
    { image: "/label.webp", name: "Signs, Posters & Marketing Materials" },
    { image: "/label.webp", name: "More Categories" },
  ];

const SwiperSlider: React.FC = () => {
  return (
    <div className="w-full bg-white py-8">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold mb-8">Explore all categories</h2>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={9} // Number of visible items
        navigation={true} // Enable navigation arrows
        modules={[Navigation]} // Swiper module
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 4, spaceBetween: 15 },
          1024: { slidesPerView: 7, spaceBetween: 20 },
          1280: { slidesPerView: 9, spaceBetween: 20 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            {/* Circular Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="object-contain w-full h-full"
              />
            </div>
            {/* Name */}
            <p className="mt-4 text-sm md:text-base text-gray-700 font-medium text-center">
              {category.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

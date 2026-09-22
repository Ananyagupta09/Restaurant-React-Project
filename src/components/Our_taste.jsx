import React from "react";
// Ensure you've run: npm install lucide-react
import { ChefHat, Utensils, Truck, Play } from "lucide-react";
import TasteBG from "../assets/Taste.png"; 

const Our_taste = () => {
  return (
    /* pt-[137px] ensures the section starts below your fixed Header + Topbar */
    <section className="w-full bg-white pt-[137px] pb-20 flex flex-col items-center">
      
      {/* --- HERO / VIDEO SECTION --- */}
      <div
        className="
          relative
          w-full
          max-w-[1600px]
          h-[500px]
          sm:h-[700px]
          lg:h-[955px] /* Exact height from your Figma screenshot */
          flex
          items-center
          justify-center
          text-center
          overflow-hidden
          rounded-sm
        "
      >
        {/* Background Image Setup */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ 
            backgroundImage: `url(${TasteBG})` 
          }}
        >
          {/* Dark Overlay for text legibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 flex flex-col items-center px-6">
          
          {/* Play Button - Centered */}
          <button className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center bg-white rounded-full shadow-2xl hover:bg-gray-100 hover:scale-110 transition-all duration-300 mb-10 group">
            <Play className="w-8 h-8 sm:w-12 sm:h-12 text-[#AD343E] fill-[#AD343E] group-hover:text-red-700" />
          </button>

          {/* Heading with Playfair Display Font */}
          <h1 className="text-white font-playfair font-bold text-4xl sm:text-6xl lg:text-[72px] leading-[1.1] max-w-[950px] drop-shadow-lg">
            Feel the authentic & <br /> original taste from us
          </h1>
        </div>
      </div>

      {/* --- ICON GRID SECTION --- */}
      <div
        className="
          w-full
          max-w-[1296px]
          grid
          grid-cols-1
          md:grid-cols-3
          gap-16
          mt-24
          px-8
        "
      >
        {/* Multi Cuisine Column */}
        <div className="flex items-start gap-6 group">
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#F9F9F7] rounded-full border border-gray-100 group-hover:border-[#AD343E] transition-colors">
            <ChefHat strokeWidth={1.2} className="w-9 h-9 text-[#2C2F24]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2C2F24] mb-3">Multi Cuisine</h3>
            <p className="text-[#414536] text-[16px] leading-relaxed opacity-90">
              In the new era of technology we look in the future with certainty life.
            </p>
          </div>
        </div>

        {/* Easy To Order Column */}
        <div className="flex items-start gap-6 group">
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#F9F9F7] rounded-full border border-gray-100 group-hover:border-[#AD343E] transition-colors">
            <Utensils strokeWidth={1.2} className="w-9 h-9 text-[#2C2F24]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2C2F24] mb-3">Easy To Order</h3>
            <p className="text-[#414536] text-[16px] leading-relaxed opacity-90">
              In the new era of technology we look in the future with certainty life.
            </p>
          </div>
        </div>

        {/* Fast Delivery Column */}
        <div className="flex items-start gap-6 group">
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#F9F9F7] rounded-full border border-gray-100 group-hover:border-[#AD343E] transition-colors">
            <Truck strokeWidth={1.2} className="w-9 h-9 text-[#2C2F24]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2C2F24] mb-3">Fast Delivery</h3>
            <p className="text-[#414536] text-[16px] leading-relaxed opacity-90">
              In the new era of technology we look in the future with certainty life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_taste;
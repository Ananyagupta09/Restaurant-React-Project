import React from "react";
import { Clock, Tag, ShoppingCart } from "lucide-react";

import content from "../assets/content.png";
import content_2 from "../assets/content_2.png";
import content_3 from "../assets/content_3.png";

const Content = () => {
  return (
    <section className="w-full bg-[#F9F9F7] py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* LEFT SIDE IMAGES - Flex layout fix for mobile */}
          <div className="flex flex-row w-full lg:w-1/2 gap-4 sm:gap-6 justify-center lg:justify-start">
            
            {/* BIG IMAGE - Responsive width */}
            <div className="w-1/2 max-w-[300px] aspect-[3/4.2]">
              <img
                src={content}
                alt="Chef"
                className="w-full h-full object-cover rounded-xl shadow-sm"
              />
            </div>

            {/* SMALL IMAGES COLUMN - Responsive width */}
            <div className="flex flex-col w-1/2 max-w-[290px] gap-4 sm:gap-6">
              <div className="h-1/2 aspect-[29/24]">
                <img
                  src={content_2}
                  alt="Food"
                  className="w-full h-full object-cover rounded-xl shadow-sm"
                />
              </div>

              <div className="h-1/2 aspect-[29/24]">
                <img
                  src={content_3}
                  alt="Food"
                  className="w-full h-full object-cover rounded-xl shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="w-full lg:w-1/2 max-w-[550px] text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C2F24] mb-6 leading-tight">
              Fastest Food Delivery in City
            </h2>

            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              Our visual designer lets you quickly and drag a down
              your way to custom apps for both keep desktop and mobile devices
              to ensure your food arrives fresh and hot.
            </p>

            {/* FEATURES LIST */}
            <div className="space-y-5 flex flex-col items-center lg:items-start">
              
              <div className="flex items-center gap-4 w-full max-w-[350px] lg:max-w-none">
                <div className="bg-red-50 p-3 rounded-full shrink-0">
                  <Clock className="text-red-700" size={22} />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Delivery within 30 minutes
                </span>
              </div>

              <div className="flex items-center gap-4 w-full max-w-[350px] lg:max-w-none">
                <div className="bg-red-50 p-3 rounded-full shrink-0">
                  <Tag className="text-red-700" size={22} />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Best Offer & Prices
                </span>
              </div>

              <div className="flex items-center gap-4 w-full max-w-[350px] lg:max-w-none">
                <div className="bg-red-50 p-3 rounded-full shrink-0">
                  <ShoppingCart className="text-red-700" size={22} />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Online Services Available
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Content;
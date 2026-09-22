import React from "react";
import { Link } from "react-router-dom"; // 1. Import Link
import bg from "../assets/bg.png";

const Homepage = () => {
  return (
    <div className="w-full mt-[137px] flex justify-center">
      {/* HERO SECTION */}
      <div className="relative w-full max-w-[1599px] h-[500px] sm:h-[650px] lg:h-[802px] overflow-hidden">

        {/* Background Image */}
        <img
          src={bg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        {/* CONTENT CENTER */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

          <h1 className="text-black font-playfair font-semibold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight max-w-[667px]">
            Best food for <br />
            your taste
          </h1>

          <p className="mt-4 text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 max-w-[537px]">
            Discover delectable cuisine and unforgettable moments
            in our welcoming, culinary haven.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6 flex-wrap justify-center">

            {/* 2. Changed button to Link and added 'to' prop */}
            <Link 
              to="/book" 
              className="bg-[#AD343E] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium hover:bg-red-700 transition inline-block"
            >
              Book A Table
            </Link>

            <Link 
              to="/menu" 
              className="border border-gray-400 text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
            >
              Explore Menu
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
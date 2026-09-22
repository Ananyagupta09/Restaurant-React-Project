import React from 'react';
/* Ensure these files exist in your src/assets folder */
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.png";
import Logo8 from "../assets/Logo8.png";
import Logo9 from "../assets/Logo9.png";
import Logo10 from "../assets/Logo10.png";

const Brand = () => {
  const brandLogos = [
    { name: "Uber Eats", url: Logo2 },
    { name: "Grubhub", url: Logo3 },
    { name: "Postmates", url: Logo4 },
    { name: "DoorDash", url: Logo5 },
    { name: "Foodpanda", url: Logo6 },
    { name: "Deliveroo", url: Logo7 },
    { name: "Instacart", url: Logo8 },
    { name: "Just Eat", url: Logo9 },
    { name: "DiDi Food", url: Logo10},
  ];

  return (
    <section className="w-full bg-[#F9F9F7] py-12 md:py-20 flex justify-center items-center overflow-hidden">
      {/* Responsive Container: 
          - lg:h-[590px] (Fixed height only on large screens)
          - h-auto (Flexible height on mobile)
      */}
      <div className="max-w-[1600px] w-full lg:h-[590px] flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-24 gap-10 lg:gap-0">
        
        {/* Left Content: Responsive alignment */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2F24] leading-tight mb-4 md:mb-6">
            You can order <br className="hidden md:block" /> through apps
          </h2>
          <p className="text-[#414536] text-base md:text-lg max-w-sm mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed 
            et aliquet aliquet risus tempor semper.
          </p>
        </div>

        {/* Right Grid: Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 justify-items-center">
          {brandLogos.map((brand, index) => (
            <div 
              key={index} 
              /* Responsive Card:
                 - Fixed style for Desktop
                 - Responsive width for Mobile to prevent overflow
              */
              style={{ maxWidth: '220.91px', height: '90px' }}
              className="w-full bg-white rounded-xl shadow-sm border border-[#F3F3F7] 
                         flex items-center justify-center overflow-hidden
                         transition-transform hover:scale-105"
            >
              <img 
                src={brand.url} 
                alt={brand.name} 
                /* Logo matches card size scale */
                style={{ width: '100%', height: '100%', maxWidth: '220.91px', maxHeight: '90px' }}
                className="object-contain p-4 md:p-2" 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brand;
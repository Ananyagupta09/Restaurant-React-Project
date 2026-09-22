import React from "react";
import About_image from "../assets/About_image.png";
import { Phone, Mail, MapPin } from "lucide-react";

const About = () => {
  return (
    /* 1. Added more top padding to create space from the header */
    <section className="w-full flex justify-center bg-white pt-[100px] lg:pt-[150px] pb-[80px] overflow-hidden">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 px-6 lg:px-8">
        
        {/* LEFT SIDE: Image + Overlapping Card */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          
          {/* Image Wrapper: Uses aspect ratio to stay consistent */}
          <div className="relative w-full max-w-[550px] aspect-[4/5] sm:aspect-square lg:aspect-[5/6]">
            <img
              src={About_image}
              alt="Healthy food"
              className="w-full h-full object-cover rounded-[24px] shadow-sm"
            />

            {/* OVERLAPPING CONTACT CARD */}
            <div
              className="
                absolute 
                /* Positions card to overlap bottom-right */
                bottom-[-30px] 
                right-[-10px] 
                sm:right-[-20px] 
                lg:right-[-40px] 
                
                bg-[#474747] 
                text-white 
                p-6 
                sm:p-8 
                lg:p-10 
                rounded-[24px] 
                
                /* Responsive Widths */
                w-[280px] 
                sm:w-[320px] 
                lg:w-[411px] 
                shadow-2xl
                z-10
              "
            >
              <h3 className="font-semibold text-xl lg:text-2xl mb-6 font-playfair">
                Come and visit us
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="mt-1 flex-shrink-0 text-gray-400" />
                  <span className="leading-tight">(414) 857 - 0107</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-1 flex-shrink-0 text-gray-400" />
                  <span className="break-all">happytummy@restaurant.com</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1 flex-shrink-0 text-gray-400" />
                  <span className="leading-relaxed">
                    837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="w-full lg:w-1/2 max-w-[540px] mt-20 lg:mt-0 text-center lg:text-left">
          <h2 className="font-playfair font-bold text-[32px] sm:text-[40px] lg:text-[52px] leading-[1.1] mb-8 text-[#2C2F24]">
            We provide healthy <br className="hidden md:block" /> food for your family.
          </h2>
          
          <p className="text-base sm:text-lg text-[#2C2F24] font-semibold mb-4 leading-snug">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance.
          </p>
          
          <p className="text-base text-[#414536] leading-relaxed mb-10">
            Rooted in the city's rich culinary culture, we aim to honor our local roots while infusing a global palate with exceptional service and a vibrant ambiance.
          </p>
          
          <div className="flex justify-center lg:justify-start">
            <button className="border-2 border-[#2C2F24] text-[#2C2F24] px-10 py-3.5 rounded-full font-bold hover:bg-[#2C2F24] hover:text-white transition-all duration-300">
              More About Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
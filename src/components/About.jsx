import React from "react";
import About_image from "../assets/About_image.png";
import { Phone, Mail, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="w-full flex justify-center bg-white py-[60px] md:py-[100px] overflow-hidden">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center justify-between gap-16 px-6 lg:px-8">
        
        {/* LEFT IMAGE CONTAINER */}
        <div className="relative w-full lg:w-1/2">
          {/* Image Wrapper: Aspect ratio keeps it consistent */}
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[5/6] w-full max-w-[560px] mx-auto lg:mx-0">
            <img
              src={About_image}
              alt="About our restaurant"
              className="w-full h-full object-cover rounded-[12px] shadow-sm"
            />

            {/* CONTACT CARD: Positioned relative to the image container */}
            <div
              className="
                absolute 
                bottom-[-30px] 
                right-[-10px] 
                sm:right-[-30px] 
                bg-[#474747] 
                text-white 
                p-6 
                md:p-10 
                rounded-[12px] 
                w-[280px] 
                sm:w-[350px] 
                lg:w-[400px] 
                shadow-2xl
              "
            >
              <h3 className="font-semibold text-xl mb-6">Come and visit us</h3>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="mt-1 flex-shrink-0" />
                  <span className="leading-tight">(414) 857 - 0107</span>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-1 flex-shrink-0" />
                  <span className="break-all">happytummy@restaurant.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">
                    837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 max-w-[540px] mt-12 lg:mt-0 text-center lg:text-left">
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
            We provide healthy food for your family.
          </h2>
          <p className="text-base sm:text-lg text-[#2C2F24] font-semibold mb-4">
            Our story began with a vision to create a unique dining experience.
          </p>
          <p className="text-base text-[#414536] leading-relaxed mb-10">
            Rooted in the city's rich culinary culture, we aim to honor our local roots 
            while infusing a global palate with exceptional service and a vibrant ambiance.
          </p>
          <button className="border-2 border-black px-10 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300">
            More About Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
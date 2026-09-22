import React from "react";
import GuestImage from "../assets/Guest_image.png"; 

const Guest = () => {
  return (
    /* Background set to white to match your homepage section transitions */
    <section className="w-full flex justify-center bg-white py-20">
      <div className="max-w-[1600px] w-full px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* LEFT CONTENT AREA */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Apply font-playfair for that elegant serif look from your logo/homepage */}
          <h2 className="text-[40px] lg:text-[55px] font-playfair font-bold text-[#2C2F24] mb-6 leading-tight">
            A little information <br /> for our valuable guest
          </h2>
          
          {/* Primary body text color and standard font */}
          <p className="text-[#414536] font-sans mb-12 text-[18px] leading-relaxed max-w-[550px]">
            At Bistro Bliss, we believe that dining is not just about food, but also about the
            overall experience. Our staff, renowned for their warmth and dedication,
            strives to make every visit an unforgettable event.
          </p>

          {/* STATISTICS GRID */}
          <div className="grid grid-cols-2 gap-5 max-w-[550px]">
            {/* Box 1 */}
            <div className="bg-white p-10 rounded-xl border border-[#DBDFD0] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              {/* Playfair for numbers makes them look premium and consistent with home */}
              <h3 className="text-5xl font-playfair font-bold text-[#2C2F24] mb-2">3</h3>
              <p className="text-[#2C2F24] font-sans font-medium uppercase tracking-wider text-xs">Locations</p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-10 rounded-xl border border-[#DBDFD0] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-5xl font-playfair font-bold text-[#2C2F24] mb-2">1995</h3>
              <p className="text-[#2C2F24] font-sans font-medium uppercase tracking-wider text-xs">Founded</p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-10 rounded-xl border border-[#DBDFD0] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-5xl font-playfair font-bold text-[#2C2F24] mb-2">65+</h3>
              <p className="text-[#2C2F24] font-sans font-medium uppercase tracking-wider text-xs">Staff Members</p>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-10 rounded-xl border border-[#DBDFD0] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-5xl font-playfair font-bold text-[#2C2F24] mb-2">100%</h3>
              <p className="text-[#2C2F24] font-sans font-medium uppercase tracking-wider text-xs">Satisfied Customers</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[500px] lg:h-[690px] overflow-hidden rounded-2xl">
             <img
               src={GuestImage}
               alt="Cooking for guests"
               className="w-full h-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
             />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Guest;
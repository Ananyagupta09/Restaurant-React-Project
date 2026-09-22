import React from 'react';

const BookTable = () => {
  return (
    /* pt-32 ensures content starts below the navigation bar */
    <div className="bg-[#F9F9F7] min-h-screen pt-32 md:pt-44 pb-20">
      
      {/* 1. HEADER SECTION */}
      <section className="text-center px-6 mb-12 md:mb-16">
        <h1 className="font-serif text-5xl md:text-7xl font-normal text-[#2C2F24] mb-6">
          Book A Table
        </h1>
        <p className="font-sans text-[#414536] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We consider all the drivers of change giving you the components you need to change to create a truly happen.
        </p>
      </section>

      {/* 2. FORM SECTION */}
      <section className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[30px] shadow-sm border border-[#DBDFD0] mb-20 mx-4 md:mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col relative">
            <label className="text-[#2C2F24] font-sans font-bold text-base mb-3">Date</label>
            <input 
              type="date" 
              defaultValue="2021-04-01"
              className="border border-[#DBDFD0] p-4 rounded-full font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#AD343E] transition-all"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-[#2C2F24] font-sans font-bold text-base mb-3">Time</label>
            <select className="appearance-none border border-[#DBDFD0] p-4 rounded-full font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#AD343E] transition-all bg-white">
              <option>06:30 PM</option>
              <option>07:00 PM</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-[#2C2F24] font-sans font-bold text-base mb-3">Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="border border-[#DBDFD0] p-4 rounded-full font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#AD343E] transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#2C2F24] font-sans font-bold text-base mb-3">Phone</label>
            <input 
              type="tel" 
              placeholder="x-xxx-xxx-xxxx" 
              className="border border-[#DBDFD0] p-4 rounded-full font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#AD343E] transition-all"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-[#2C2F24] font-sans font-bold text-base mb-3">Total Person</label>
            <select className="appearance-none border border-[#DBDFD0] p-4 rounded-full font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#AD343E] transition-all bg-white">
              <option>1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-4">
            <button 
              type="submit" 
              className="w-full bg-[#AD343E] text-white font-sans font-bold py-5 rounded-full hover:bg-[#8e2a32] transition-colors shadow-md text-lg"
            >
              Book A Table
            </button>
          </div>
        </form>
      </section>

      {/* 3. RESPONSIVE MAP SECTION (1600x767 equivalent) */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="rounded-[30px] overflow-hidden border border-[#DBDFD0] shadow-sm">
          {/* aspect-[16/7] maintains the Figma layout height ratio */}
          <div className="relative w-full aspect-[16/7]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x51f955152a265696!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BookTable;
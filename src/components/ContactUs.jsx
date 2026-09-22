import React from 'react';

// Simple Icons to match the minimalist look
const SendIcon = () => (
  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
  </svg>
);

const ContactUs = () => {
  return (
    /* Background sampled from Figma (#F9F9F7) 
       pt-32 md:pt-48 ensures content doesn't hide behind the Header/Topbar
    */
    <div className="bg-[#F9F9F7] min-h-screen pt-32 md:pt-48 pb-20">
      
      {/* 1. HEADER SECTION */}
      <section className="text-center px-6 mb-12 md:mb-16">
        <h1 className="font-serif text-5xl md:text-7xl font-medium text-[#2C2F24] mb-6">
          Contact Us
        </h1>
        <p className="font-sans text-[#414536] text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          We consider all the drivers of change giving you the components you need to change to create a truly happen.
        </p>
      </section>

      {/* 2. MAIN CONTACT FORM SECTION */}
      <section className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[30px] shadow-sm border border-[#DBDFD0] mb-16 mx-4 md:mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col">
            <label className="text-[#2C2F24] font-sans font-bold text-base mb-3">Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="border border-[#DBDFD0] p-4 rounded-full font-sans focus:outline-none focus:ring-2 focus:ring-[#AD343E] transition-all placeholder:text-[#737865]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#2C2F24] font-sans font-bold text-base mb-3">Email</label>
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="border border-[#DBDFD0] p-4 rounded-full font-sans focus:outline-none focus:ring-2 focus:ring-[#AD343E] transition-all placeholder:text-[#737865]"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-[#2C2F24] font-sans font-bold text-base mb-3">Subject</label>
            <input 
              type="text" 
              placeholder="Write a subject" 
              className="border border-[#DBDFD0] p-4 rounded-full font-sans focus:outline-none focus:ring-2 focus:ring-[#AD343E] transition-all placeholder:text-[#737865]"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-[#2C2F24] font-sans font-bold text-base mb-3">Message</label>
            <textarea 
              rows="5" 
              placeholder="Write your message" 
              className="border border-[#DBDFD0] p-5 rounded-[25px] font-sans focus:outline-none focus:ring-2 focus:ring-[#AD343E] transition-all resize-none placeholder:text-[#737865]"
            ></textarea>
          </div>

          <div className="md:col-span-2 mt-4">
            <button 
              type="submit" 
              className="w-full bg-[#AD343E] text-white font-sans font-bold py-5 rounded-full hover:bg-[#8e2a32] transition-colors flex items-center justify-center text-lg shadow-md"
            >
              Send <SendIcon />
            </button>
          </div>
        </form>
      </section>

      {/* 3. CONTACT INFO SECTION */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Call Card */}
        <div className="bg-transparent flex flex-col items-start">
          <h3 className="font-sans text-[#2C2F24] font-bold text-xl mb-4">Call Us:</h3>
          <p className="font-sans text-[#AD343E] text-2xl md:text-3xl font-bold transition-transform hover:scale-105 cursor-pointer">
            +1-234-567-8900
          </p>
        </div>

        {/* Hours Card */}
        <div className="bg-transparent flex flex-col items-start">
          <h3 className="font-sans text-[#2C2F24] font-bold text-xl mb-4">Hours:</h3>
          <div className="font-sans text-[#414536] text-base md:text-lg space-y-1">
            <p>Mon-Fri: 11am – 8pm</p>
            <p>Sat-Sun: 9am – 10pm</p>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-transparent flex flex-col items-start">
          <h3 className="font-sans text-[#2C2F24] font-bold text-xl mb-4">Our Location:</h3>
          <p className="font-sans text-[#414536] text-base md:text-lg leading-relaxed">
            123 Bridge Street, Southern Land, <br /> LA 12345, United States
          </p>
        </div>

      </section>
    </div>
  );
};

export default ContactUs;
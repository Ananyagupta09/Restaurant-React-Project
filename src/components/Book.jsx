import React from 'react';

const BookTablePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7] text-[#2C2F24] font-sans">
      
      {/* 1. Header (Placeholder) */}
      <Header />

      {/* 2. Main Hero Section (Title + Map + Form) */}
      <Hero />

      {/* 3. Logos Section */}
      <Logos />

      {/* 4. Footer Section */}
      <Footer />

    </div>
  );
};

// --- Sub-Components ---

// Placeholder Header (since it's cut off in the design)
const Header = () => (
  <header className="bg-white border-b border-[#F3F3F7] p-4 flex justify-between items-center px-10">
    <div className="font-bold text-lg">Menu</div>
    <div className="flex gap-4">About, Home, Posts, Contact</div>
    <div className="font-bold text-lg">Book A Table</div>
  </header>
);

// The Hero section contains the text, form, and map graphic
const Hero = () => (
  <section className="relative w-full overflow-hidden flex flex-col items-center">
    
    {/* Text Content (Centred horizontally) */}
    <div className="container mx-auto px-6 text-center pt-24 pb-12 z-10">
      <h1 className="text-6xl md:text-7xl font-serif leading-tight text-[#2C2F24] mb-4">
        Book A Table
      </h1>
      <p className="text-[#414536] text-xl max-w-2xl mx-auto">
        We consider all the drivers of change we have noticed. These are the components you need to create a truly happening.
      </p>
    </div>

    {/* The Map Graphic */}
    <div className="w-full h-[600px] bg-[#E3E7ED] border-t-2 border-[#DBDFD0]">
      {/* Replace this <img> with your actual map image (from Figma asset export).
         The current placeholder uses 'object-cover' to fill the h-[600px] height.
      */}
      <img 
        src="https://via.placeholder.com/1600x600?text=Map+Graphic" 
        alt="Bistro Bliss Map" 
        className="w-full h-full object-cover" 
      />
    </div>

    {/* Absolute Form Container (Offsets half of itself over the text and half over the map) */}
    {/* 'absolute top-[40%]': Starts the container 40% down from the top of the section.
       '-translate-y-1/2': Pulls it back up by half its height, centering it vertically over the line where text meets the map.
    */}
    <div className="absolute top-[40%] lg:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[600px] lg:w-[344px] z-20">
      <div className="bg-white rounded-3xl shadow-xl border border-[#F3F3F7] p-6 lg:p-8 flex flex-col gap-5">
        
        {/* Row 1: Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <InputGroup label="Date" type="date" value="04/01/2026" />
          <InputGroup label="Time" type="time" value="03:00 PM" />
        </div>
        
        {/* Row 2: Name and Phone */}
        <InputGroup label="Name" placeholder="Enter your name" />
        <InputGroup label="Phone" placeholder="x-xxxxx-xxxxx" />
        
        {/* Row 3: Total Person */}
        <InputGroup label="Total Person" placeholder="Total person" />
        
        {/* Submit Button */}
        <button className="w-full bg-[#AD343E] text-white py-4 rounded-xl font-bold text-xl transition-all hover:bg-[#8e2b34] hover:shadow-lg">
          Book A Table
        </button>
      </div>
    </div>

  </section>
);

// Small Logos Grid (Same code you used previously)
const Logos = () => (
  <section className="bg-white py-16 flex justify-center items-center">
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="grid grid-cols-3 gap-6 justify-items-center">
        {['GRUBHUB', 'Postmates', 'foodpanda', 'deliveroo', 'JUST EAT', 'DiDi Food'].map((name) => (
          <div key={name} className="flex items-center justify-center border border-[#F3F3F7] rounded-xl w-[220.91px] h-[90px] p-2 bg-white">
            {/* Placeholder logos - replace with your actual SVG assets */}
            <img 
              src={`https://via.placeholder.com/151x24?text=${name}`} 
              alt={name} 
              className="w-auto h-auto max-h-8 object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Placeholder Footer
const Footer = () => (
  <footer className="bg-[#414536] text-white py-20 flex justify-center items-center px-10 mt-auto">
    <div className="w-full max-w-[1600px] grid grid-cols-4 gap-12">
      <div className="flex flex-col gap-4">
        <div className="font-bold text-2xl font-serif">Bistro Bliss</div>
        <div>In the new era of technology...</div>
        <div>Social Icons...</div>
      </div>
      <div>Pages</div>
      <div>Utility Pages</div>
      <div>Follow Us On Instagram...</div>
    </div>
  </footer>
);

// Form Input Utility Component
const InputGroup = ({ label, value, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-2">
    <label className="font-medium text-lg text-[#2C2F24]">{label}</label>
    <input 
      type={type} 
      value={value}
      placeholder={placeholder}
      className="border border-[#F3F3F7] rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-[#AD343E]/20 focus:outline-none transition-all placeholder:text-gray-400"
    />
  </div>
);

export default BookTablePage;
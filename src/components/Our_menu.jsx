import React, { useState } from 'react';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

const Our_menu = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Breakfast', 'Main Dishes', 'Drinks', 'Desserts'];

  const menuItems = [
    { name: "Fried Eggs", price: "9.99", img: image1 },
    { name: "Hawaiian Pizza", price: "15.99", img: image2 },
    { name: "Martinez Cocktail", price: "7.25", img: image3 },
    { name: "Butterscotch Cake", price: "20.99", img: image4 },
    { name: "Mint Lemonade", price: "5.89", img: image5 },
    { name: "Chocolate Icecream", price: "18.05", img: image6 },
    { name: "Cheese Burger", price: "12.55", img: image7 },
    { name: "Classic Waffles", price: "12.99", img: image8 },
  ];

  return (
    /* 1. Added mt-24 (top margin) so it starts below your fixed header */
    /* 2. Added pt-10 and pb-20 for spacing */
    <div className="mt-24 pt-10 pb-20 bg-white min-h-screen">
      
      {/* 3. Changed fixed width to max-w-[1296px] and w-[90%] for responsiveness */}
      <div className="max-w-[1296px] w-[90%] mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-serif text-[#2C2F24] mb-4">Our Menu</h1>
          <p className="text-[#414536] max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            We consider all the drivers of change gives you the components 
            you need to change to create a truly happens.
          </p>
        </div>

        {/* Filter Buttons - Added flex-wrap for mobile */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 md:px-8 py-2 rounded-full border border-[#DBDFD0] transition-all font-medium text-sm md:text-base ${
                activeFilter === cat 
                ? 'bg-[#AD343E] text-white border-[#AD343E]' 
                : 'bg-white text-[#2C2F24] hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid - Responsive Column Counts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#DBDFD0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex-grow">
                <p className="text-[#AD343E] font-bold text-xl mb-2">${item.price}</p>
                <h3 className="text-[#2C2F24] font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-[#414536] text-sm leading-relaxed">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our_menu;
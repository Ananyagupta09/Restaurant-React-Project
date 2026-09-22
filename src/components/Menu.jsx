import React from "react";
import { Coffee, Utensils, GlassWater, Cake } from "lucide-react";

const Menu = () => {
  const menuItems = [
    {
      icon: <Coffee size={40} />,
      title: "Breakfast",
      desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
      icon: <Utensils size={40} />,
      title: "Main Dishes",
      desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
      icon: <GlassWater size={40} />,
      title: "Drinks",
      desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
      icon: <Cake size={40} />,
      title: "Desserts",
      desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    },
  ];

  return (
    <section className="w-full flex justify-center py-[60px] md:py-[80px] bg-white">

      {/* Main Container */}
      <div className="w-full max-w-[1296px] px-4 sm:px-6 lg:px-8 text-center">

        {/* Title */}
        <h2
          className="
            font-playfair
            font-medium
            text-[28px]
            sm:text-[36px]
            md:text-[42px]
            lg:text-[48px]
            mb-10
            md:mb-12
          "
        >
          Browse Our Menu
        </h2>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            md:gap-8
            lg:gap-10
          "
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="
                border
                border-gray-200
                rounded-xl
                p-6
                md:p-8
                flex
                flex-col
                items-center
                text-center
                hover:shadow-lg
                hover:-translate-y-1
                transition
                duration-300
                bg-white
              "
            >
              {/* Icon Circle */}
              <div
                className="
                  w-[70px]
                  h-[70px]
                  md:w-[80px]
                  md:h-[80px]
                  bg-gray-100
                  rounded-full
                  flex
                  items-center
                  justify-center
                  mb-5
                  md:mb-6
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-[18px]
                  md:text-[20px]
                  font-semibold
                  mb-3
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-gray-600
                  text-[14px]
                  md:text-[16px]
                  mb-4
                "
              >
                {item.desc}
              </p>

              {/* Link */}
              <button
                className="
                  text-red-600
                  font-medium
                  hover:underline
                  mt-auto
                "
              >
                Explore Menu
              </button>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Menu;
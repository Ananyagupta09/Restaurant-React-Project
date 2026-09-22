import React from "react";

import catering from "../assets/catering.png";
import birthday from "../assets/birthday.png";
import wedding from "../assets/wedding.png";
import events from "../assets/events.png";

const services = [
  {
    img: catering,
    title: "Caterings",
    desc: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    img: birthday,
    title: "Birthdays",
    desc: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    img: wedding,
    title: "Weddings",
    desc: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    img: events,
    title: "Events",
    desc: "In the new era of technology we look in the future with certainty for life.",
  },
];

const Service = () => {
  return (
    <section className="w-full flex justify-center bg-[#F9F9F7] py-[60px] md:py-[80px]">

      {/* CONTAINER */}
      <div className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <h2
          className="
            font-playfair
            text-[28px]
            sm:text-[36px]
            md:text-[44px]
            lg:text-[55px]
            leading-tight
            font-medium
            text-[#2C2F24]
            mb-[32px]
            md:mb-[48px]
            text-center
            lg:text-left
          "
        >
          We also offer unique
          <br className="hidden sm:block" />
          services for your events
        </h2>

        {/* CARDS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-[20px]
            md:gap-[24px]
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                w-full
                transition
                duration-300
                hover:translate-y-[-6px]
              "
            >
              {/* IMAGE */}
              <img
                src={service.img}
                alt={service.title}
                className="
                  w-full
                  h-[220px]
                  sm:h-[240px]
                  md:h-[260px]
                  lg:h-[280px]
                  object-cover
                  rounded-[12px]
                  mb-4
                "
              />

              {/* TITLE */}
              <h3
                className="
                  text-[18px]
                  sm:text-[19px]
                  md:text-[20px]
                  font-semibold
                  text-[#2C2F24]
                  mb-2
                "
              >
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-[16px]
                  text-[#414536]
                  leading-[22px]
                  md:leading-[24px]
                "
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Service;


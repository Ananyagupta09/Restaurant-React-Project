import React from 'react';
import SophireRobson from '../assets/Sophire Robson.png'; // Make sure you have these images
import MattCannon from '../assets/Matt Cannon.png';
import AndySmith from '../assets/Andy Smith.png';

const Testimonials = () => {
  const testimonialsData = [
    {
      title: "“The best restaurant”",
      text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      image: SophireRobson,
      name: "Sophie Robson",
      location: "Los Angeles, CA",
    },
    {
      title: "“Simply delicious”",
      text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      image: MattCannon,
      name: "Matt Cannon",
      location: "San Diego, CA",
    },
    {
      title: "“One of a kind restaurant”",
      text: "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      image: AndySmith,
      name: "Andy Smith",
      location: "San Francisco, CA",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1600px] mx-auto min-h-[766px] flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-center text-[#1C1F21] mb-20">
          What Our Customers Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1400px]">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F9F9F7] p-10 rounded-2xl border border-[#FEEAEA] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#A62626] mb-6 leading-tight">
                  {testimonial.title}
                </h3>
                <p className="text-[#3A3E41] text-lg leading-relaxed mb-10">
                  {testimonial.text}
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 mt-auto border-t border-[#FEEAEA] pt-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#1C1F21] font-semibold text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-[#686E72] text-md">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
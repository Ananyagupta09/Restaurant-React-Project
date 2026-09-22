import React from "react";
// Import your images from assets
import blog1 from "../assets/Blog1.png";
import blog2 from "../assets/Blog2.png";
import blog3 from "../assets/Blog3.png";
import blog4 from "../assets/Blog4.png";
import blog5 from "../assets/Blog5.png";

const Blog = () => {
  const articles = [
    {
      id: 1,
      date: "January 3, 2023",
      title: "The secret tips to make a wild lime chicken steak",
      image: blog1,
    },
    {
      id: 2,
      date: "January 3, 2023",
      title: "How to maintain your kitchen cleaner and order",
      image: blog2,
    },
    {
      id: 3,
      date: "January 3, 2023",
      title: "7 ways to improve your cooking skills effectively",
      image: blog3,
    },
    {
      id: 4,
      date: "January 3, 2023",
      title: "The best ways to prepare your food for the week",
      image: blog4,
    },
    {
      id: 5,
      date: "January 3, 2023",
      title: "How to cook the perfect burger at home in 10 mins",
      image: blog5,
    },
  ];

  return (
    <section className="w-full bg-[#F9F9F7] py-20 px-6">
      {/* Container matching Figma width (1600px) and height (approx 766px) */}
      <div className="max-w-[1600px] mx-auto min-h-[766px]">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#2C2F24]">
            Our Blog & Articles
          </h2>
          <button className="bg-[#AD343E] hover:bg-[#8e2a32] text-white px-8 py-3 rounded-full font-bold transition-all">
            Read All Articles
          </button>
        </div>

        {/* Blog Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Large Article (Left) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#DBDFD0] overflow-hidden group cursor-pointer shadow-sm">
            <div className="h-[400px] overflow-hidden">
              <img 
                src={articles[0].image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Main Article" 
              />
            </div>
            <div className="p-8">
              <span className="text-gray-500 text-sm font-medium uppercase">{articles[0].date}</span>
              <h3 className="text-2xl font-bold text-[#2C2F24] mt-3 leading-snug">
                {articles[0].title}
              </h3>
            </div>
          </div>

          {/* Smaller Articles Grid (Right) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(1).map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-[#DBDFD0] overflow-hidden group cursor-pointer shadow-sm"
              >
                <div className="h-[200px] overflow-hidden">
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Article" 
                  />
                </div>
                <div className="p-6">
                  <span className="text-gray-500 text-xs font-medium uppercase">{item.date}</span>
                  <h4 className="text-lg font-bold text-[#2C2F24] mt-2 leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
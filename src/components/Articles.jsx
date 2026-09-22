import React from 'react';

// --- IMAGE IMPORTS (6 to 17) ---
import blog6 from "../assets/blog6.png";
import blog7 from "../assets/blog7.png";
import blog8 from "../assets/blog8.png";
import blog9 from "../assets/blog9.png";
import blog10 from "../assets/blog10.png";
import blog11 from "../assets/blog11.png";
import blog12 from "../assets/blog12.png";
import blog13 from "../assets/blog13.png";
import blog14 from "../assets/blog14.png";
import blog15 from "../assets/blog15.png";
import blog16 from "../assets/blog16.png";
import blog17 from "../assets/blog17.png";

const Articles = () => {
  // --- 12 ARTICLES ARRAY ---
  const articleData = [
    { id: 1, date: "January 3, 2023", title: "How to prepare a delicious gluten free sushi", image: blog6 },
    { id: 2, date: "January 3, 2023", title: "Exclusive baking lessons from the pastry chef", image: blog7 },
    { id: 3, date: "January 3, 2023", title: "How to prepare the perfect fries in an air fryer", image: blog8 },
    { id: 4, date: "January 3, 2023", title: "How to prepare delicious chicken tenders", image: blog9 },
    { id: 5, date: "January 3, 2023", title: "5 great cooking gadgets you can buy to save time", image: blog10 },
    { id: 6, date: "January 3, 2023", title: "The secret tips & tricks to prepare a perfect burger", image: blog11 },
    { id: 7, date: "January 3, 2023", title: "7 delicious cheesecake recipes you can prepare", image: blog12 },
    { id: 8, date: "January 3, 2023", title: "5 great pizza restaurants you should visit this city", image: blog13 },
    { id: 9, date: "January 3, 2023", title: "5 great cooking gadgets you can buy to save time", image: blog14 },
    { id: 10, date: "January 3, 2023", title: "How to prepare a delicious gluten free sushi", image: blog15 },
    { id: 11, date: "January 3, 2023", title: "Top 20 simple and quick desserts for kids", image: blog16 },
    { id: 12, date: "January 3, 2023", title: "Top 20 simple and quick desserts for kids", image: blog17 },
  ];

  return (
    <div className="bg-[#F9F9F7] min-h-screen pt-32 md:pt-48 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        
        {/* Header matching Figma Typography */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-[#2C2F24] mb-6">
            Our Blog & Articles
          </h1>
          <p className="font-sans text-[#414536] max-w-2xl mx-auto text-lg leading-relaxed">
            We consider all the drivers of change giving you the components you need to change to create a truly happen.
          </p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {articleData.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-[20px] overflow-hidden border border-[#DBDFD0] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="font-sans text-xs font-bold text-[#737865] uppercase tracking-widest mb-3">
                  {article.date}
                </p>
                <h3 className="font-sans text-xl font-bold text-[#2C2F24] leading-tight mb-4">
                  {article.title}
                </h3>
                <p className="font-sans text-[#414536] text-sm leading-relaxed">
                  We consider all the drivers of change giving you the components you need to change.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Articles;
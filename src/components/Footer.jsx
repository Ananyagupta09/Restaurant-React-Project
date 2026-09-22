import React from "react";
import Logo1 from "../assets/Logo1.png";
// We use 'Share2', 'MessageCircle', 'Camera', and 'Code' 
// because every version of Lucide has these.
import { 
  Soup, 
  Share2, 
  MessageCircle, 
  Camera, 
  Code 
} from "lucide-react";

import insta1 from "../assets/insta1.png";
import insta2 from "../assets/insta2.png";
import insta3 from "../assets/insta3.png";
import insta4 from "../assets/insta4.png";

const Footer = () => {
  const pagesLinks = ["Home", "About", "Menu", "Pricing", "Blog", "Contact", "Delivery"];
  const utilityLinks = ["Start Here", "Styleguide", "Password Protected", "404 Not Found", "Licenses", "Changelog", "View More"];
  const instagramImages = [insta1, insta2, insta3, insta4];

  // Map brand identities to the safe icons we imported above
  const socials = [
    { Icon: MessageCircle, name: "Twitter" }, 
    { Icon: Share2, name: "Facebook" },        
    { Icon: Camera, name: "Instagram" },        
    { Icon: Code, name: "Github" }     
  ];

  return (
    <footer className="w-full bg-[#474747] text-[#F9F9F7] pt-24 pb-12 px-6">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="flex items-center">
  <img
    src={Logo1}
    alt="Bistro Bliss Logo"
    className="
      w-[160px]
      sm:w-[180px]
      md:w-[200px]
      h-auto
      object-contain
    "
  />
</div>
            <p className="text-[#ADB29E] max-w-[350px] leading-relaxed">
              In the new era of technology we look in the future with certainty and pride for our company.
            </p>
            <div className="flex gap-4 pt-4">
              {socials.map((social, index) => (
                <a key={index} href="#" className="bg-[#AD343E] p-3 rounded-full hover:bg-white transition-all group">
                  <social.Icon className="w-5 h-5 text-white group-hover:text-[#AD343E]" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Pages</h3>
            <ul className="space-y-4 text-[#ADB29E]">
              {pagesLinks.map(link => <li key={link} className="hover:text-white cursor-pointer">{link}</li>)}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold">Utility Pages</h3>
            <ul className="space-y-4 text-[#ADB29E]">
              {utilityLinks.map(link => <li key={link} className="hover:text-white cursor-pointer">{link}</li>)}
            </ul>
          </div>

          {/* Instagram Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Follow Us On Instagram</h3>
            <div className="grid grid-cols-2 gap-4">
              {instagramImages.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-2xl aspect-square bg-[#333]">
                  <img src={img} alt="Instagram" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-[#6B6B6B] pt-10 text-center text-[#ADB29E] text-sm">
          Copyright © 2023 Hashtag Developer. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
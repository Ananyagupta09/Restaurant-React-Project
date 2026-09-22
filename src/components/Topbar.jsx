import React from "react";

export default function Topbar() {
  return (
    // Added 'fixed top-0 left-0 w-full z-50' to keep it at the top
    <div className="fixed top-0 left-0 w-full h-[45px] bg-black text-white z-50">
      <div className="max-w-[1580px] mx-auto flex items-center justify-between h-full px-4 sm:px-6">
        
        {/* Left */}
        <div className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-sm">
          <span className="whitespace-nowrap">📞 (414) 857 - 0107</span>
          <span className="hidden md:block">
            📧 yummy@restaurant.com
          </span>
        </div>

        {/* Right */}
        {/* Changed 'hidden md:flex' to 'flex' with smaller text on mobile to ensure it's always 'fixed for all' */}
        <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-sm">
          <span className="cursor-pointer hover:text-gray-400 transition-colors">Facebook</span>
          <span className="cursor-pointer hover:text-gray-400 transition-colors">Instagram</span>
          <span className="hidden xs:block cursor-pointer hover:text-gray-400 transition-colors">Twitter</span>
          <span className="hidden lg:block cursor-pointer hover:text-gray-400 transition-colors">Whatsapp</span>
        </div>

      </div>
    </div>
  );
}
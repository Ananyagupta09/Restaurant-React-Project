import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Logo from "../assets/Logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-[45px] left-0 w-full bg-white shadow-md z-40">
      <div className="max-w-[1580px] mx-auto px-6">
        <div className="flex items-center justify-between h-[92px]">
          
          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="h-[70px] w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-10 text-[16px] font-medium text-[#2C2F24]">
              <Link to="/" className="hover:text-[#AD343E] transition">Home</Link>
              <Link to="/about" className="hover:text-[#AD343E] transition">About</Link>
              <Link to="/menu" className="hover:text-[#AD343E] transition">Menu</Link>
              <Link to="/pages" className="hover:text-[#AD343E] transition">Pages</Link>
              <Link to="/contact" className="hover:text-[#AD343E] transition">Contact</Link>
            </nav>

            {/* Book A Table Button - Linked to /book */}
            <Link
              to="/book"
              className="border border-[#2C2F24] bg-white text-[#2C2F24] px-6 py-3 rounded-full font-bold hover:bg-[#2C2F24] hover:text-white transition duration-300"
            >
              Book A Table
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col gap-4 p-6 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
            <Link to="/pages" onClick={() => setIsOpen(false)}>Pages</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="border border-[#2C2F24] bg-white text-[#2C2F24] px-6 py-3 rounded-full font-bold text-center hover:bg-[#2C2F24] hover:text-white transition"
            >
              Book A Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
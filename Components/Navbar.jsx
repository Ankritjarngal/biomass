import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {CircleChevronRight} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`w-full flex items-center justify-between
        px-4 py-4 md:px-[60px]
        ${isHomePage ? "absolute top-0 left-0 right-0" : "relative"}
        z-50 ${isHomePage ? "bg-transparent" : "bg-white shadow-sm"}`}
    >
      {/* Logo */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <img
            src="/WhatsApp Image 2025-04-29 at 9.01.35 AM 2.png"
            alt="logo"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>

      {/* Right Side (Links + Download Button) */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-[14px] font-medium">
          <li className="text-gray-700 hover:text-green-600">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-600 hover:text-green-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-gray-700 hover:text-green-600">
            <Link to="/products">Products</Link>
          </li>
          <li className="text-gray-700 hover:text-green-600">
            <Link to="/sustainability">Sustainability</Link>
          </li>
          <li className="text-gray-700 hover:text-green-600">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Download Brochure Button - Desktop - FIXED VERSION */}
        <a
          href="/brochure.pdf"
          download
          className="hidden md:flex items-stretch overflow-hidden rounded-md text-[13px] font-medium border-2 border-[#7DC242] group transition-all duration-300 hover:shadow-lg hover:scale-105 relative bg-white"
        >
          {/* White Icon Section with slant */}
          <div 
            className="bg-white px-3 py-2 flex items-center justify-center relative z-10 group-hover:bg-gray-50 transition-colors duration-300"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 0 100%)'
            }}
          >
            <img
              src="/dba7d5e804d195288f45884a96ade046fd933842.png"
              alt="Download"
              className="w-[16px] h-[16px] z-10 relative group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Green Text Section with slanted left edge - FIXED */}
          <div 
            className="bg-[#7DC242] group-hover:bg-[#5cae2d] text-white px-4 py-2 transition-all duration-300 relative z-20 -ml-px"
            style={{
              clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 0 100%)'
            }}
          >
            <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
              Download Brochure
            </span>
          </div>
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <ul
          id="mobile-menu"
          className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col gap-4 py-4 px-6 text-sm font-medium z-50"
        >
          <li className="text-gray-700 hover:text-green-600">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="text-gray-600 hover:text-green-600">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="text-gray-700 hover:text-green-600">
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li className="text-gray-700 hover:text-green-600">
            <Link to="/sustainability" onClick={() => setIsMenuOpen(false)}>
              Sustainability
            </Link>
          </li>
          <li className="text-gray-700 hover:text-green-600">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li>
            <a
              href="/brochure.pdf"
              download
              className="inline-flex items-center gap-2 text-[#7DC242] font-medium border-2 border-[#7DC242] px-4 py-2 rounded-md hover:bg-[#7DC242] hover:text-white transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src="/dba7d5e804d195288f45884a96ade046fd933842.png"
                alt="Download"
                className="w-[14px] h-[14px]"
              />
              Download Brochure
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
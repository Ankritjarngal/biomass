import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`w-full flex items-center justify-between
        px-4 py-4 md:px-[60px]  /* 4 for mobile, 60px for desktop */
        ${isHomePage ? "absolute top-0 left-0 right-0" : "relative"}
        z-50 bg-${isHomePage ? "transparent" : "white"} ${
        !isHomePage ? "shadow-sm" : ""
      }`}
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

      {/* Right Side (Links + Icon) */}
      <div className="flex items-center gap-8">
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 text-base font-medium">
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

        {/* Right Icon */}
        <div className="w-10 h-10 rounded-full hidden md:flex items-center justify-center">
          <img
            src="/Component 16.png"
            alt="icon"
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        {/* Hamburger Menu */}
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
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li className="text-gray-700 hover:text-green-600">
            <Link to="/sustainability" onClick={() => setIsMenuOpen(false)}>
              Sustainability
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

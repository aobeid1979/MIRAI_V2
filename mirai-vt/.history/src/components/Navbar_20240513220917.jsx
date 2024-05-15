'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Logo
            </Link>
          </div>
          <div className="md:flex md:items-center md:space-x-4">
            <ul
              className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <li>
                <Link to="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

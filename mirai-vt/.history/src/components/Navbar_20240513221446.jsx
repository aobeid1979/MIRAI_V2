'use client';
import React, { useState } from 'react';
import Link from 'next/link';

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
            <Link href="/" passHref>
              <a className="text-white text-xl font-bold">Logo</a>
            </Link>
          </div>
          <div className="md:flex md:items-center md:space-x-4">
            <ul
              className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <li>
                <Link href="/" passHref>
                  <a className="text-white hover:text-gray-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <a className="text-white hover:text-gray-300">About</a>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <a className="text-white hover:text-gray-300">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a className="text-white hover:text-gray-300">Contact</a>
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

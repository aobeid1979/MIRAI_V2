'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a>
              <img
                src="/images/miraiLogo.png"
                alt="Mirai Logo"
                className="h-12"
              />
            </a>
            <Link href="/" passHref>
              <p className="text-white text-xl font-bold">Mirai</p>
            </Link>
          </div>
          <div className="md:flex md:items-center md:space-x-4">
            <ul
              className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <li>
                <Link href="/" passHref>
                <p className={`hover:text-gray-300 ${asPath === '/' ? 'text-white' : 'text-purple-500'}`}>Home</p>
    </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <p className="text-white hover:text-gray-300">About</p>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <p className="text-white hover:text-gray-300">Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <p className="text-white hover:text-gray-300">Contact</p>
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

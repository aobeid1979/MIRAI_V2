'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block text-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link href="/">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <img
                  className="h-10 w-auto"
                  src="/images/miraiLogo.png"
                  alt="Mirai app logo"
                />
                <span className="text-white font-bold ml-2 text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                  Mirai React app
                </span>
              </div>
            </Link>
            <div className="flex space-x-2 ml-4">
              <Link href="/">
                <div className="text-white  hover:text-black rounded-md px-3 py-2 cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href="/">
                <div className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 cursor-pointer">
                  About
                </div>
              </Link>
              <Link href="/search">
                <div className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 cursor-pointer">
                  Search
                </div>
              </Link>
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="md:hidden lg:w-64 md:w-48 sm:w-36 w-24 bg-black absolute top-0 right-0 h-full 
          bg-gradient-to-r from-blue-500 to-purple-500 border-b border-indigo-500"
          >
            <div className="flex flex-col">
              <Link href="/">
                <div className="text-white px-2 py-4 hover:bg-gray-900 cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href="/search">
                <div className="text-white px-2 py-4 hover:bg-gray-900 cursor-pointer">
                  About
                </div>
              </Link>
              <Link href="/search">
                <div className="text-white px-2 py-4 hover:bg-gray-900 cursor-pointer">
                  Search
                </div>
              </Link>
              <Link href="/login">
                <div className="text-white px-2 py-4 hover:bg-gray-900 cursor-pointer">
                  Login
                </div>
              </Link>
              <Link href="/signup">
                <div className="text-white px-2 py-4 hover:bg-gray-900 cursor-pointer">
                  Sign Up
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden block text-white"
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
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
          {isOpen && (
            <div className="md:hidden">
              <div className="flex flex-col">
                <Link href="/">
                  <div className="block text-white px-2 py-4 hover:bg-gray-900">
                    Home
                  </div>
                </Link>
                <Link href="/search">
                  <div className="block text-white px-2 py-4 hover:bg-gray-900">
                    Search
                  </div>
                </Link>
                <Link href="/login">
                  <div className="block text-white px-2 py-4 hover:bg-gray-900">
                    Login
                  </div>
                </Link>
                <Link href="/signup">
                  <div className="block text-white px-2 py-4 hover:bg-gray-900">
                    Sign Up
                  </div>
                </Link>
              </div>
            </div>
          )}
          <div className="hidden md:flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link href="/">
              <div className="flex-shrink-0 flex items-center">
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
                <div className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                  Home
                </div>
              </Link>
              <Link href="/search">
                <div className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                  Search
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

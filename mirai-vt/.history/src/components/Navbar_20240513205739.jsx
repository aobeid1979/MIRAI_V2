'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-indigo-500">
      {/* ... */}
      <div className="hidden md:flex flex-1 items-center justify-center md:items-stretch md:justify-start">
        {/* ... */}
        <div className="flex space-x-2 ml-4">
          <Link href="/">
            <div className="text-white hover:text-purple-500  rounded-md px-3 py-2 cursor-pointer">
              Home
            </div>
          </Link>
          <Link href="/add-image">
            <div className="text-white hover:text-purple-500  rounded-md px-3 py-2 cursor-pointer">
              Add Image
            </div>
          </Link>
          <Link href="/about">
            <div className="text-white hover:text-purple-500  rounded-md px-3 py-2 cursor-pointer">
              About
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-white hover:text-purple-500  rounded-md px-3 py-2 cursor-pointer">
              Contact
            </div>
          </Link>
          {/* ... */}
        </div>
      </div>
      {/* ... */}
      {isOpen && (
        <div className="md:hidden lg:w-64 md:w-48 sm:w-36 w-24 absolute top-0 right-0 h-full bg-opacity-1">
          <div className="flex flex-col">
            {/* ... */}
            <Link href="/add-image">
              <div className="text-white px-2 py-4 hover:text-purple-500 cursor-pointer">
                Add Image
              </div>
            </Link>
            <Link href="/about">
              <div className="text-white px-2 py-4 hover:text-purple-500 cursor-pointer">
                About
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-white px-2 py-4 hover:text-purple-500 cursor-pointer">
                Contact
              </div>
            </Link>
            {/* ... */}
          </div>
        </div>
      )}
      {/* ... */}
    </nav>
  );
};

export default Navbar;

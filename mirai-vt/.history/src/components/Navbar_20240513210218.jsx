'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white block md:hidden"
            >
              {/* ... */}
            </button>
            <div className="flex items-center">
              {/* ... */}
              <div className="hidden md:flex space-x-2 ml-4">{/* ... */}</div>
            </div>
          </div>
          {isOpen && (
            <div className="w-full mt-2 space-y-1 md:hidden">{/* ... */}</div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

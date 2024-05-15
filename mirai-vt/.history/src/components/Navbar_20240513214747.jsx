'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img
                className="h-8"
                src="/images/miraiLogo.png"
                alt="Mirai app logo"
              />
              <span className="font-semibold text-lg ml-2">
                Mirai React App
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/search">Search</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

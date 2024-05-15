'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="hidden md:flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
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
                <div className="text-white hover:text-purple-500 rounded-md px-3 py-2 cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href="/">
                <div className="text-white hover:text-purple-500 rounded-md px-3 py-2 cursor-pointer">
                  About
                </div>
              </Link>
              <Link href="/search">
                <div className="text-white hover:text-purple-500 rounded-md px-3 py-2 cursor-pointer">
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

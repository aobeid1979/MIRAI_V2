'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    <div className="flex h-screen">
    {/* Sidebar */}
    <div className="bg-gray-800 text-white w-64 flex-shrink-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </div>
      <nav className="p-2">
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700">
            <a href="#" className="block">Home</a>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <a href="#" className="block">Search</a>
          </li>
        </ul>
      </nav>
    </div>

    {/* Main Content */}
    <div className="flex-grow bg-gray-200">
      {/* Your main content goes here */}
    </div>

    {/* Footer */}
    <div className="bg-gray-800 text-white w-64 flex-shrink-0">
      <nav className="p-2">
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700">
            <a href="#" className="block">Login</a>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <a href="#" className="block">Sign Up</a>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <a href="#" className="block">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
};

export default Navbar;

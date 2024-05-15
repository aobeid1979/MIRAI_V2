'use client';

import React , {useState }  from 'react';
import Link from 'next/link';


const Navbar = () => {
    const [isOpen, setIsOpen ] = useState(false);
  return (
    <nav className="bg-black border-b border-indigo-500">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Logo</h1>
        <div className="md:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-8-8a1 1 0 011.414-1.414l8 8z" />
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 010-2zm0 6h16a1 1 0 110 2H4a1 1 0 010-2z" />
              )}
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex`}>
          <Link href="/">
            <a className="block mt-4 md:inline-block md:mt-0 mr-6">Home</a>
          </Link>
          <Link href="/about">
            <a className="block mt-4 md:inline-block md:mt-0 mr-6">About</a>
          </Link>
          <Link href="/login">
            <a className="block mt-4 md:inline-block md:mt-0 mr-6">Login</a>
          </Link>
          <Link href="/signup">
            <a className="block mt-4 md:inline-block md:mt-0">Sign Up</a>
          </Link>
        </div>
      </div>
            <div className="flex justify-between w-full">
              <div className="flex space-x-2">
                <a
                  href="/index.html"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Home
                </a>
                
                <a
                  href="/Search.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Search
                </a>
              </div>
              <div className="flex space-x-2">
                <a
                  href="/Login.html"
                  className="text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Login
                </a>
                <a
                  href="/Sign Up.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

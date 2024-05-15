
import React , {useState }  {useClient } from 'react';
import Link from 'next/link';


const Navbar = () => {
    const [isOpen, setIsOpen ] = useState(false);
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          {isOpen && (
            <div className="md:hidden">
              {/* Add your mobile menu items here */}
              <a href="/index.html" className="block text-white px-2 py-4 hover:bg-gray-900">Home</a>
              <a href="/Search.html" className="block text-white px-2 py-4 hover:bg-gray-900">Search</a>
              <a href="/Login.html" className="block text-white px-2 py-4 hover:bg-gray-900">Login</a>
              <a href="/Sign Up.html" className="block text-white px-2 py-4 hover:bg-gray-900">Sign Up</a>
            </div>
          )}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/*<!-- Logo -->*/}
            <Link href="/">
              <div className="flex flex-shrink-0 items-center mr-4">
                <img
                  className="h-10 w-auto"
                  src="/images/miraiLogo.png"
                  alt="Mirai app logo"
                />
                <span className="hidden md:block text-white font-bold ml-2 text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                  Mirai React app
                </span>
              </div>
            </Link>
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

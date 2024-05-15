import React from 'react'
import image from '../../images/miraiLogo.png'


const Navbar = () => {
  return (
    <nav c="bg-indigo-700 border-b border-indigo-500">
      <div c="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div c="flex h-20 items-center justify-between">
          <div
            c="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/*<!-- Logo -->*/}
            <a c="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                c="h-10 w-auto"
                src="/images/miraiLogo.png"
                alt="Mirai app logo"
              />
              <span c="hidden md:block text-white text-2xl font-bold ml-2"
                >Mirai React app</span
              >
            </a>
            <div c="flex justify-between">
  <div c="flex space-x-2">
    <a href="/index.html" c="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
    <a href="/Images.html" c="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Images</a>
    <a href="/Search.html" c="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Search</a>
  </div>
  <div c="flex space-x-2">
    <a href="/Login.html" c="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Login</a>
    <a href="/Sign Up.html" c="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Sign Up</a>
  </div>
</div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import image from '../images/miraiLogo.png'


const Navbar = () => {
  return (
    <nav cklassName="bg-indigo-700 border-b border-indigo-500">
      <div cklassName="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div cklassName="flex h-20 items-center justify-between">
          <div
            cklassName="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/*<!-- Logo -->*/}
            <a cklassName="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                cklassName="h-10 w-auto"
                src="/images/miraiLogo.png"
                alt="Mirai app logo"
              />
              <span cklassName="hidden md:block text-white text-2xl font-bold ml-2"
                >Mirai React app</span
              >
            </a>
            <div cklassName="flex justify-between">
  <div cklassName="flex space-x-2">
    <a href="/index.html" cklassName="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
    <a href="/Images.html" cklassName="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Images</a>
    <a href="/Search.html" cklassName="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Search</a>
  </div>
  <div cklassName="flex space-x-2">
    <a href="/Login.html" cklassName="text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Login</a>
    <a href="/Sign Up.html" cklassName="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Sign Up</a>
  </div>
</div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
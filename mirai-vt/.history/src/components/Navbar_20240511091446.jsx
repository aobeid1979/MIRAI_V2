import React from 'react'
import image from '../images/miraiLogo.png'


const Navbar = () => {
  return (
    <nav cklasName="bg-indigo-700 border-b border-indigo-500">
      <div ="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div ="flex h-20 items-center justify-between">
          <div
            ="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/*<!-- Logo -->*/}
            <a ="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                ="h-10 w-auto"
                src="/images/miraiLogo.png"
                alt="Mirai app logo"
              />
              <span ="hidden md:block text-white text-2xl font-bold ml-2"
                >Mirai React app</span
              >
            </a>
            <div ="flex justify-between">
  <div ="flex space-x-2">
    <a href="/index.html" ="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
    <a href="/Images.html" ="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Images</a>
    <a href="/Search.html" ="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Search</a>
  </div>
  <div ="flex space-x-2">
    <a href="/Login.html" ="text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Login</a>
    <a href="/Sign Up.html" ="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Sign Up</a>
  </div>
</div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
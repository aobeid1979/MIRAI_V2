import React from 'react'

const Member = () => {
  return (
    <section className="bg-black border-b border-indigo-500 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Become a N
          </h1>
          <p className="my-4 text-xl text-white">
            Find the React job that fits your skills and needs
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Join Now
        </button>
        </div>
    </section>
  )
}

export default Member
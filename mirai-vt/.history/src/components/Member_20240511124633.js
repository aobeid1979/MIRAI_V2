import React from 'react'

const Member = ({ isNewMember }, {title , subtitle }) => {
  return (
    <section className="bg-black border-b border-indigo-500 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {props.title}
          </h1>
          <p className="my-4 text-xl text-white">
            {props.subtitle}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          {isNewMember ? 'Join Now' : 'Log In'}
        </button>
      </div>
    </section>
  )
}

export default Member
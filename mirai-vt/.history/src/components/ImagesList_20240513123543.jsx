import image from '../images.json';
import React from 'react';

const ImagesList = () => {
  
  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {image.map((image) => (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="p-4">
                    <h3 className="text-xl font-bold text-indigo-500">
                        {image.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{image.description}</p>
                    <a
                        href="/jobs.html"
                        className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-indigo-600"
                    >
                        View Image
                    </a>
                    </div>
                </div>
            ))}
                </div>
                </div>
        </section>
    </div>
  );


export default ImagesList;

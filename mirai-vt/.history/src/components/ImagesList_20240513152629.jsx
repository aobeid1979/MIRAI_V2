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
            {image.map((img) => (
              <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                  <div className="mb-6">
                    <div className="text-gray-600 my-2">{img.type}</div>
                    <h3 className="text-xl font-bold">{img.title}</h3>
                  </div>

                  <div className="mb-5">{img.Description}</div>

                  <h3 className="text-indigo-500 mb-2">{img.location}</h3>

                  <div className="border border-gray-100 mb-5"></div>

                  <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                      <i className="fa-solid fa-location-dot text-lg"></i>
                      {img.location}
                    </div>
                    <a
                      href="job.html"
                      className="block rounded-xl overflow-hidden shadow-md"
                    >
                      <img
                        src={img.imageUrl}
                        alt={img.title}
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImagesList;

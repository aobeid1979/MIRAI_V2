import React from 'react';
import Image from './Image';

const ImageHome = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Image bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">For Artist</h2>
            <p className="mt-2 mb-4">
              Add a new Image to the gallery and share it with the world
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Add Image
            </a>
          </Image>
          <Image>
            <h2 className="text-2xl font-bold">For User</h2>
            <p className="mt-2 mb-4">
              List your Images to find the perfect Image for you
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Browse Images
            </a>
          </Image>
        </div>
      </div>
    </section>
  );
};

export default ImageHome;

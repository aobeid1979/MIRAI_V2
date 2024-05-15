import ImageList from './ImageList';
import image from '../images.json';
import React from 'react';

const ImagesList = () => {
  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Images
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {image.map((img) => (
              <ImageList key={img.id} img={img} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImagesList;

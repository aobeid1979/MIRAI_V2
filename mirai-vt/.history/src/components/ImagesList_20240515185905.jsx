// ImagesList.jsx
'use client';
import React, { useState, useEffect } from 'react';
import ImageList from './ImageList';
import imagesData from '../images.json';

const ImagesList = () => {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Images
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {error ? (
              <div>Error: {error}</div>
            ) : (
              imageData.map((img, index) => <ImageList key={index} img={img} />)
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImagesList;

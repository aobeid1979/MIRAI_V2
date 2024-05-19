// ImagesList.jsx
'use client';
import React, { useState, useEffect } from 'react';
import ImageList from './ImageList';
import imagesData from '../images.json';

const ImagesList = () => {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming imagesData is an array of images fetched from images.json
        setImageData(imagesData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Images
          </h2>
        </div>
      </section>
    </div>
  );
};

export default ImagesList;

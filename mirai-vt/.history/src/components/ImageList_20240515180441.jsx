'use client';
import React, { useState, useEffect } from 'react';

const ImageList = () => {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../images.json');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {imageData.map((img, index) => (
        <div key={index}>
          <h3>{img.title}</h3>
          <p>{img.Description}</p>
          {/* Render other properties */}
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg"></i>
              {img.location}
            </div>
            <p className="block rounded-xl overflow-hidden shadow-md">
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-auto"
              />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;

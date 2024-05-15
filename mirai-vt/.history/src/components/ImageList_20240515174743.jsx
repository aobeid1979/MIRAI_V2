'use client';
import React, { useState, useEffect } from 'react';

const ImageList = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your_json_file.json');
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {imageData.map((img, index) => (
        <div key={index}>
          <h3>{img.title}</h3>
          <p>{img.Description}</p>
          {/* Render other properties */}
        </div>
      ))}
    </div>
  );
};

export default ImageList;

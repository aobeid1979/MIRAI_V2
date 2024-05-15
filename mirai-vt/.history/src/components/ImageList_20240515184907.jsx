// ImageList.jsx
import React from 'react';

const ImageList = ({ img }) => {
  return (
    <div>
      <div key={img.id}>
        <h3>{img.title}</h3>
        <p>{img.Description}</p>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <i className="fa-solid fa-location-dot text-lg"></i>
            {img.location}
          </div>
          <p className="block rounded-xl overflow-hidden shadow-md">
            <img src={img.imageUrl} alt={img.title} className="w-full h-auto" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageList;

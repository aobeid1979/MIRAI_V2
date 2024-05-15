import React from 'react';
import { FaMapMaker } from 'react-icons/fa';

const ImageList = ({ img }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-center">{img.title}</h3>
        </div>

        <div className="mb-5">{img.Description}</div>

        <h3 className="text-indigo-500 mb-2">This image Type is {img.type}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMaker className="inline-block mr-2" />
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

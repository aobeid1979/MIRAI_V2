import React, { useState } from 'react';

const ImageList = ({ img }) => {
  const [chosen, setChosen] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleChosenClick = async () => {
    setChosen(!chosen);

    if (!chosen) {
      try {
        const response = await fetch('/api/chooseImage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(img),
        });

        if (!response.ok) {
          throw new Error(`Response is not OK, status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Server response:', data);
      } catch (error) {
        console.error('Error choosing image', error);
      }
    }
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };
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
          <div className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                src={img.imageUrl}
                alt={img.title}
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {img.title}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-gray-500 text-sm">{img.description}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageList;

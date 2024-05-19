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
          body: JSON.stringify(image),
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
          <p className="block rounded-xl overflow-hidden shadow-md">
            <img src={img.imageUrl} alt={img.title} className="w-full h-auto" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageList;

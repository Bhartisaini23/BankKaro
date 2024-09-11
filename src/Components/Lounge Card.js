import React from 'react';

const LoungeCard = ({ image, title, location }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg w-64">
      <img src='Loungecards.png' alt="Lounge Cards" className="w-full mb-4 rounded-md"/>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400">{location}</p>
    </div>
  );
};

export default LoungeCard;

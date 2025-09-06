import React from 'react';
import GroupPic from '../src/assets/Group.png'
const Player = ({ player, onChoose }) => {
  const { playerId, name, country, image, role, battingType, bowlingType, price } = player;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-68 flex flex-col  ">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      {/* profile pick */}
      <div className='flex gap-2 items-center'>
        <img src= {image} alt="profile-pick" className='w-7 h-7 rounded-full' />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      {/* country */}
      </div>
      <div className='flex justify-between border-b border-gray-200 p-2'>
      <div className='flex gap-2'>
        <img src={GroupPic} alt="" />
      <p className="text-gray-600">{country}</p>
      </div>
      <button>All-Rounder </button>
      </div>
        {/* role */}
      <p className="text-gray-700 mt-1">{role}</p>
      <p className="text-gray-700">Batting: {battingType}</p>
      <p className="text-gray-700">Bowling: {bowlingType}</p>
      <p className="text-green-600 font-semibold mt-2">Price: ${price}k</p>
      <button
        className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => onChoose(player)}
      >
        Choose Player
      </button>
    </div>
  );
};

export default Player;

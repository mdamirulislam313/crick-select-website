import React, { useEffect, useState } from "react";
import Player from "./Player";

const PlayerCard = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("/Cric.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChoose = (player) => {
    // যদি আগে select করা না থাকে
    if (!selectedPlayers.find((p) => p.playerId === player.playerId)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  return (
    <div className="mx-14">
      <div className="flex justify-between my-6 items-center">
      <h1 className="text-2xl font-bold text-center my-4">Available Players </h1>
      <div className="">
        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Available</button>
        <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">Selected (0)</button>
      </div>
      </div>

      {/* Player cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {players.map((player) => (
          <Player
            key={player.playerId}
            player={player}
            onChoose={handleChoose}
          />
        ))}
      </div>

      {/* Selected Players */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Selected Players:</h2>
        <ul className="list-disc list-inside">
          {selectedPlayers.map((player) => (
            <li key={player.playerId}>
              {player.name} (${player.price}k)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerCard;

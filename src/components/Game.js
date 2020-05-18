import React from "react";

import "./styles/GameClass.css";
import { Link } from "react-router-dom";

function Game({ game }) {
  return (
    <div className="gameClass" key={game.id}>
      <div>
        <h2>{game.name}</h2>
        <p>Note: {game.rating}</p>
      </div>
      <div className="moreabout">
        <Link to={`/game/${game.id}`}>
          <button>Plus d'infos</button>
        </Link>
      </div>
    </div>
  );
}

export default Game;

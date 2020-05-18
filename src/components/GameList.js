import React from "react";
import Game from "./Game";
import Header from "./Header";
import "./styles/GameClass.css";

function GameList({ games, sortRatingWorst, sortRatingBest }) {
  return (
    <div id="gamelist">
      <Header />
      <div className="sortbyratings">
        <button
          onClick={() => {
            sortRatingBest();
          }}
        >
          Trier par note : de la meilleure à la moins bonne
        </button>
      </div>
      <div className="sortbyratings">
        <button
          onClick={() => {
            sortRatingWorst();
          }}
        >
          Trier par note : de la moins bonne à la meilleure
        </button>
      </div>
      <div className="allGames">
        {games.map((game) => {
          return (
            <div>
              <Game game={game} gameName={game.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GameList;

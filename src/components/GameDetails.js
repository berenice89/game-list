import React, { useContext } from "react";
import Header from "./Header";
import "./styles/GameClass.css";
import { Link, useParams } from "react-router-dom";
import GameContext from "./GameContext";

function GameDetails() {
  // Get the id of the chosen game
  const gameId = useParams();

  // Calls all the games with the context API
  const { games } = useContext(GameContext);

  // Find the game within the array of all games
  const oneGame = games.find((game) => game.id === Number(gameId.id));

  // Message when game is undefined
  if (!oneGame) {
    return <div>Chargement en cours...</div>;
  }

  // Get a dynamic background
  const bgStyle = {
    backgroundImage: `url(${oneGame.background_image})`,
  };

  // Get the genres
  const allGenres = [];
  oneGame.genres.map((genre) => {
    return allGenres.push(genre.name);
  });

  // Get all the screenshots
  const allScreens = [];
  oneGame.short_screenshots.map((screen) => {
    return allScreens.push(screen.image);
  });

  // and loop to display all of them
  const showAllScreens = [];
  for (let i = 0; i < allScreens.length; i++) {
    showAllScreens.push(<img src={allScreens[i]} alt={oneGame.name + i} />);
  }

  return (
    <div className="gameDetails" style={bgStyle}>
      <Header />
      <div className="content">
        <div className="returnButton">
          <Link to="/">
            <button>Retour</button>
          </Link>
        </div>
        <h1>{oneGame.name} </h1>
        <p>Note: {oneGame.rating} / 5</p>
        <p>
          Genres: {allGenres[0]}, {allGenres[1]}
        </p>
        <p>Sorti le: {oneGame.released}</p>
        <p>Screenshots:</p>
        <div className="gallery">{showAllScreens}</div>
      </div>
    </div>
  );
}

export default GameDetails;

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import axios from "axios";
import GameContext from "./components/GameContext";

function App() {
  const [games, setGames] = useState([]);

  // I wanted to practice context API so here is the constance where I stock the "game" value
  const contextValue = {
    games,
  };

  useEffect(() => {
    getGames();
  }, []);

  // I get the API information with axios
  const getGames = () => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then((response) => response.data)
      .then((data) => {
        setGames(data);
      });
  };

  // Sort the results dependinr on the rating (from best to worst)
  const sortRatingBest = () => {
    const newBest = [...games].sort(function (a, b) {
      return b.rating - a.rating;
    });
    setGames(newBest);
  };

  // Sort the results dependinr on the rating (from worst to best)
  const sortRatingWorst = () => {
    const newWorst = [...games].sort(function (a, b) {
      return a.rating - b.rating;
    });
    setGames(newWorst);
  };

  return (
    <div>
      <GameContext.Provider value={contextValue}>
        <Switch>
          <Route path="/" exact>
            <GameList
              games={games}
              sortRatingBest={sortRatingBest}
              sortRatingWorst={sortRatingWorst}
            />
          </Route>
          <Route path="/game/:id">
            <GameDetails />
          </Route>
        </Switch>
      </GameContext.Provider>
    </div>
  );
}

export default App;

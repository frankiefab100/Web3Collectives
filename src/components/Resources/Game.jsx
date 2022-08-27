import React from "react";
import Card from "../Card/Card";
// import { games } from "../../data/games";
import categories from "../../data/categories.json";

const Game = ({ resources, filterGames }) => {
  return (
    <>
      {!filterGames?.length && (
        <div id="game" className="category">
          <h2 className="category-title">
            {categories.map((category) => category.games)}
          </h2>

          <div className="card-section">
            {resources.map((resource, index) => {
              const { coverImage, title, description, url } = resource;

              return (
                <Card
                  key={index}
                  coverImage={coverImage}
                  title={title}
                  description={description}
                  url={url}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Game;

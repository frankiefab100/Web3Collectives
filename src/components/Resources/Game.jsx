import React from "react";
import Card from "../Card/Card";
import { games } from "../../data/games";
import categories from "../../data/categories.json";

const Game = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.games)}
      </h2>

      <div className="card-section">
        {games.map((resource, index) => {
          return (
            <Card
              key={index}
              coverImage={resource.coverImage}
              title={resource.title}
              description={resource.description}
              url={resource.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Game;

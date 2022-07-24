import React from "react";
import Card from "../Card/Card";
import { youtubeChannels } from "../../data/youtubeChannels";
import categories from "../../data/categories.json";
import { Link } from "react-router-dom";

const YoutubeChannel = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        <Link to="/youtube">
          {categories.map((category) => category.youtube)}
        </Link>
      </h2>

      <div className="card-section">
        {youtubeChannels.map((resource, index) => {
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

export default YoutubeChannel;

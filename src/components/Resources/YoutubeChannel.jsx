import React from "react";
import Card from "../Card/Card";
import { youtubeChannels } from "../../data/youtubeChannel";
import { categories } from "../../data/categories";

const YoutubeChannel = () => {
  return (
    <div className="category">
      <h1 className="category-title">
        {categories.map((category) => category.youtube)}
      </h1>

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
          // {youtubeChannels.map((resource, index) => {
          //   return (
          //     // <Card />

          //     <div key={index}>
          //       <img src={resource.coverImage} alt="resource cover photo" />
          //       <h2>{resource.title} </h2>
          //       <p className="description">{resource.description} </p>
          //       <a href={resource.url}></a>
          //     </div>
          //   );
        })}
      </div>
    </div>
  );
};

export default YoutubeChannel;

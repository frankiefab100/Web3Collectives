import React from "react";
import Card from "../Card/Card";
import { communities } from "../../data/communities";
import categories from "../../data/categories.json";

const Community = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.communities)}
      </h2>

      <div className="card-section">
        {communities.map((resource, index) => {
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
  );
};

export default Community;

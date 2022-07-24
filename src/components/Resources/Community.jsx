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

export default Community;

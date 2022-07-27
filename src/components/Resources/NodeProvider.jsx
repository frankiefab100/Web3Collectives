import React from "react";
import Card from "../Card/Card";
import { rpcNodes } from "../../data/rpcNodes";
import categories from "../../data/categories.json";

const NodeProvider = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.rpcs)}
      </h2>

      <div className="card-section">
        {rpcNodes.map((resource, index) => {
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

export default NodeProvider;

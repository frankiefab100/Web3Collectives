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

export default NodeProvider;

import React from "react";
import Card from "../Card/Card";
import { devTools } from "../../data/devTools";
import categories from "../../data/categories.json";

const DevTool = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.devtools)}
      </h2>

      <div className="card-section">
        {devTools.map((resource, index) => {
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

export default DevTool;

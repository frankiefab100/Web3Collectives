import React from "react";
import Card from "../Card/Card";
import { devTools } from "../../data/devTools";
import categories from "../../data/categories.json";

const DevTool = () => {
  return (
    <div id="devtool" className="category">
      <h2 className="category-title">
        {categories.map((category) => category.devtools)}
      </h2>

      <div className="card-section">
        {devTools.map((resource, index) => {
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

export default DevTool;

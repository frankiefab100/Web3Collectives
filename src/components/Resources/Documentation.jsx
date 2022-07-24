import React from "react";
import Card from "../Card/Card";
import { documentations } from "../../data/documentations";
import categories from "../../data/categories.json";

const Documentation = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.documentations)}
      </h2>

      <div className="card-section">
        {documentations.map((resource, index) => {
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

export default Documentation;

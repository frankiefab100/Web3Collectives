import React from "react";
import Card from "../Card/Card";
import { documentations } from "../../data/documentations";
import categories from "../../data/categories.json";

const Documentation = () => {
  return (
    <div id="doc" className="category">
      <h2 className="category-title">
        {categories.map((category) => category.docs)}
      </h2>

      <div className="card-section">
        {documentations.map((resource, index) => {
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

export default Documentation;

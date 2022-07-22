import React from "react";
import Card from "../Card/Card";
import { websites } from "../../data/websites";
import { categories } from "../../data/categories";

const Website = () => {
  return (
    <div className="category">
      <h1 className="category-title">
        {categories.map((category) => category.website)}
      </h1>

      <div className="card-section">
        {websites.map((resource, index) => {
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

export default Website;

import React from "react";
import Card from "../Card/Card";
import { websites } from "../../data/websites";
import categories from "../../data/categories.json";

const Website = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.websites)}
      </h2>

      <div className="card-section">
        {websites.map((resource, index) => {
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

export default Website;

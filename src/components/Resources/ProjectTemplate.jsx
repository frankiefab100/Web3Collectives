import React from "react";
import Card from "../Card/Card";
import { projectTemplates } from "../../data/projectTemplates";
import categories from "../../data/categories.json";

const ProjectTemplate = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.templates)}
      </h2>

      <div className="card-section">
        {projectTemplates.map((resource, index) => {
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

export default ProjectTemplate;

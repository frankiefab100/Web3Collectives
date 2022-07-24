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

export default ProjectTemplate;

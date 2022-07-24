import React from "react";
import Card from "../Card/Card";
import { courses } from "../../data/courses";
import categories from "../../data/categories.json";

const Course = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.courses)}
      </h2>

      <div className="card-section">
        {courses.map((resource, index) => {
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

export default Course;

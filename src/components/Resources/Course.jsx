import React from "react";
import Card from "../Card/Card";
// import { courses } from "../../data/courses";
import categories from "../../data/categories.json";

const Course = ({ resources, filterCourses }) => {
  return (
    <>
      {!filterCourses?.length && (
        <div id="course" className="category">
          <h2 className="category-title">
            {categories.map((category) => category.courses)}
          </h2>

          <div className="card-section">
            {resources.map((resource, index) => {
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
      )}
    </>
  );
};

export default Course;

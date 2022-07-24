import React from "react";
import Card from "../Card/Card";
import { blogs } from "../../data/blogs";
import categories from "../../data/categories.json";

const Blog = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.blogs)}
      </h2>

      <div className="card-section">
        {blogs.map((resource, index) => {
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

export default Blog;

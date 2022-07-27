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

export default Blog;

import React from "react";
import Card from "../Card/Card";
import { books } from "../../data/books";
import categories from "../../data/categories.json";

const Book = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.books)}
      </h2>

      <div className="card-section">
        {books.map((resource, index) => {
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

export default Book;

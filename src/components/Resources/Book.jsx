import React from "react";
import Card from "../Card/Card";
// import { books } from "../../data/books";
import categories from "../../data/categories.json";

const Book = ({ resources, filterBooks }) => {
  return (
    <>
      {!filterBooks?.length && (
        <div id="book" className="category">
          <h2 className="category-title">
            {categories.map((category) => category.books)}
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

export default Book;

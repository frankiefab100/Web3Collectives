import React from "react";
import Card from "../Card/Card";
import { githubRepos } from "../../data/githubRepos";
import categories from "../../data/categories.json";

const GithubRepo = () => {
  return (
    <div id="repo" className="category">
      <h2 className="category-title">
        {categories.map((category) => category.repos)}
      </h2>

      <div className="card-section">
        {githubRepos.map((resource, index) => {
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

export default GithubRepo;

import React from "react";
import Card from "../Card/Card";
import { githubRepos } from "../../data/githubRepos";
import categories from "../../data/categories.json";

const GithubRepo = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.githubRepos)}
      </h2>

      <div className="card-section">
        {githubRepos.map((resource, index) => {
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

export default GithubRepo;

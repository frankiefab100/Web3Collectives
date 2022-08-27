import React from "react";
import Card from "../Card/Card";
// import { rpcNodes } from "../../data/rpcNodes";
import categories from "../../data/categories.json";

const NodeProvider = ({ resources, filterNodes }) => {
  return (
    <>
      {!filterNodes?.length && (
        <div id="rpc" className="category">
          <h2 className="category-title">
            {categories.map((category) => category.rpcs)}
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

export default NodeProvider;

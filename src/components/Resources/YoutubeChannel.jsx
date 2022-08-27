import React from "react";
import Card from "../Card/Card";
import { youtubeChannels } from "../../data/youtubeChannels";
import categories from "../../data/categories.json";

const YoutubeChannel = ({ resources, filterYoutubes }) => {
  return (
    <>
      {filterYoutubes?.length && (
        <div id="youtube" className="category">
          <h2 className="category-title">
            {categories.map((category) => category.youtube)}
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

export default YoutubeChannel;

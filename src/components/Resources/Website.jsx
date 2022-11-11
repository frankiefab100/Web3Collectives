import React from "react";
import Card from "../Card/Card";
import categories from "../../data/categories.json";
import Skeleton from "../Skeleton/Skeleton";

const Website = ({ resources }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const getResources = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(getResources);
    };
  }, []);

  return (
    <>
      {!!resources?.length && (
        <div id="website" className="category">
          {categories.map((category, index) => (
            <h2 key={index} className="category-title">
              {category.websites}
            </h2>
          ))}

          <div className="card-section">
            {resources.map((resource, index) => {
              const { coverImage, title, description, url } = resource;

              return (
                <>
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <Card
                      key={index}
                      coverImage={coverImage}
                      title={title}
                      description={description}
                      url={url}
                    />
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Website;

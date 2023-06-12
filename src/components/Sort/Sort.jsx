import React from "react";
import { BsSortDownAlt } from "react-icons/bs";

const Sort = ({ sortOption, setSortOption }) => {
  const handleSort = (option) => {
    setSortOption(option);

    switch (option) {
      case "ascending":
        sortByAscending();
        break;
      case "descending":
        sortByDescending();
        break;
      case "newest":
        sortByNewest();
        break;
      case "oldest":
        sortByOldest();
        break;
      default:
        break;
    }
  };

  const sortByAscending = () => {
    const sorted = [...sortOption].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setSortOption(sorted);
  };

  const sortByDescending = () => {
    const sorted = [...sortOption].sort((a, b) =>
      b.title.localeCompare(a.title),
    );
    setSortOption(sorted);
  };

  const sortByNewest = () => {
    const sorted = [...sortOption].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    setSortOption(sorted);
  };

  const sortByOldest = () => {
    const sorted = [...sortOption].sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    );
    setSortOption(sorted);
  };

  return (
    <div className="sort-resources">
      <select
        value={sortOption}
        onChange={(e) => handleSort(e.target.value)}
        className="custom-select"
        aria-label="Sort Resources"
      >
        <option value="">Sort </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
      <span>
        <BsSortDownAlt />
      </span>
    </div>
  );
};

export default Sort;

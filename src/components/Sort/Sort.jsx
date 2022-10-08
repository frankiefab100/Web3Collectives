import React from "react";
import { BsSortDownAlt } from "react-icons/bs";
import "./Sort.css";

const Sort = ({ resources, setResources }) => {
  const handleSort = (item) => {
    const sortOption = target.trim().toLowerCase();

    if (sortOption === "Ascending") {
      const sortWebsites = resources.websites
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((resourceItem) => resourceItem.title);

      const sortYoutubes = resources.youtubeChannels.sort(
        (a, b) => a.id > b.id,
      );

      const sortBooks = resources.books.sort((a, b) => a.id > b.id);

      const sortRepos = resources.githubRepos.sort((a, b) => a.id > b.id);

      const sortGames = resources.games.sort((a, b) => a.id > b.id);

      const sortDevTools = resources.devTools.sort((a, b) => a.id > b.id);

      const sortCourses = resources.courses.sort((a, b) => a.id > b.id);

      const sortTemplates = resources.projectTemplates.sort(
        (a, b) => a.id > b.id,
      );

      const sortDocs = resources.documentations.sort((a, b) => a.id > b.id);

      const sortNodes = resources.rpcNodes.sort((a, b) => a.id > b.id);

      setResources(
        { ...resources, websites: sortWebsites },
        { ...resources, youtube: sortYoutubes },
        { ...resources, repos: sortRepos },
        { ...resources, games: sortGames },
        { ...resources, devtools: sortDevTools },
        { ...resources, courses: sortCourses },
        { ...resources, templates: sortTemplates },
        { ...resources, docs: sortDocs },
        { ...resources, books: sortBooks },
        { ...resources, rpcs: sortNodes },
      );
    }
  };

  return (
    <div className="sort-resources">
      <select
        onChange={(e) => handleSort(e.target.value)}
        className="custom-select"
        aria-label="Sort Resources"
      >
        <option>Sort {BsSortDownAlt}</option>
        <option value="oldest">Oldest</option>
        <option value="newest">Newest</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default Sort;

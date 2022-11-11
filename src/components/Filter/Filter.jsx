import React from "react";
import { BsFilter } from "react-icons/bs";
import "./Filter.css";

const Filter = ({ resources, setResources }) => {
  const allResources = resources;

  const handleFilter = (target) => {
    const searchKey = target.trim().toLowerCase();

    if (searchKey === "All") {
      return setResources(allResources);
    }

    const filterWebsitesTag = resources.websites.filter((resourceItem) =>
      resourceItem.tag
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey),
    );

    const filterYoutubesTag = resources.youtubeChannels.filter((resourceItem) =>
      resourceItem.tag
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey),
    );

    const filterBooksTag = resources.books.filter((resourceItem) =>
      resourceItem.tag
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey),
    );

    const filterReposTag = resources.githubRepos.filter((resourceItem) =>
      resourceItem.tag
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey),
    );

    const filterGamesTag = resources.games.filter((resourceItem) =>
      resourceItem.tag
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey),
    );

    const filterDevToolsTag = resources.devTools.filter((resourceItem) =>
      resourceItem.tag
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey),
    );

    const filterCoursesTag = resources.courses.filter((resourceItem) =>
      resourceItem.tag
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey),
    );

    const filterTemplatesTag = resources.projectTemplates.filter(
      (resourceItem) =>
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey),
    );

    const filterDocsTag = resources.documentations.filter((resourceItem) =>
      resourceItem.tag
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey),
    );

    const filterNodesTag = resources.rpcNodes.filter((resourceItem) =>
      resourceItem.tag
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey),
    );

    setResources(
      { ...resources, websites: filterWebsitesTag },
      { ...resources, youtube: filterYoutubesTag },
      { ...resources, repos: filterReposTag },
      { ...resources, games: filterGamesTag },
      { ...resources, devtools: filterDevToolsTag },
      { ...resources, courses: filterCoursesTag },
      { ...resources, templates: filterTemplatesTag },
      { ...resources, docs: filterDocsTag },
      { ...resources, books: filterBooksTag },
      { ...resources, rpcs: filterNodesTag },
    );
  };

  return (
    <div className="filter-resources">
      <select
        onChange={(e) => {
          handleFilter(e.target.value);
        }}
        className="custom-select"
        aria-label="Filter Resources"
      >
        <option selected disabled>
          <BsFilter /> Filter
        </option>
        <option value="All">All</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
  );
};

export default Filter;

import React from "react";
import { BsFilter } from "react-icons/bs";
import "./Filter.css";

const Filter = ({ resources, setResources }) => {
  const allResources = resources;

  const handleFilter = (target) => {
    const searchKey = target.trim().toLowerCase();

    if (searchKey === "all") {
      return setResources(allResources);
    }

    const filterWebsites = resources.websites.filter(
      (resourceItem) =>
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) || filterParam === "",
    );

    const filterYoutubes = resources.youtubeChannels.filter(
      (resourceItem) =>
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) || filterParam === "",
    );

    const filterBooks = resources.books.filter(
      (resourceItem) =>
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) || filterParam === "",
    );

    const filterRepos = resources.githubRepos.filter(
      (resourceItem) =>
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) || filterParam === "",
    );

    const filterGames = resources.games.filter(
      (resourceItem) =>
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) || filterParam === "",
    );

    const filterDevTools = resources.devTools.filter(
      (resourceItem) =>
        resourceItem.title
          .toLowerCase()
          .includes(searchKey.toLocaleLowerCase()) ||
        resourceItem.description
          .toLowerCase()
          .includes(searchKey.toLocaleLowerCase()) ||
        resourceItem.keywords
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) ||
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) ||
        searchTerm === "",
    );

    const filterCourses = resources.courses.filter(
      (resourceItem) =>
        resourceItem.title
          .toLowerCase()
          .includes(searchKey.toLocaleLowerCase()) ||
        resourceItem.description
          .toLowerCase()
          .includes(searchKey.toLocaleLowerCase()) ||
        resourceItem.keywords
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) ||
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) ||
        searchTerm === "",
    );

    const filterTemplates = resources.projectTemplates.filter(
      (resourceItem) =>
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) || filterParam === "",
    );

    const filterDocs = resources.documentations.filter(
      (resourceItem) =>
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) || filterParam === "",
    );

    const filterNodes = resources.rpcNodes.filter(
      (resourceItem) =>
        resourceItem.tag
          .map((elem) => elem.toLowerCase().trim())
          .includes(searchKey) || filterParam === "",
    );

    setResources(
      { ...resources, websites: filterWebsites },
      { ...resources, websites: filterYoutubes },
      { ...resources, websites: filterRepos },
      { ...resources, websites: filterGames },
      { ...resources, websites: filterDevTools },
      { ...resources, websites: filterCourses },
      { ...resources, websites: filterTemplates },
      { ...resources, websites: filterDocs },
      { ...resources, websites: filterBooks },
      { ...resources, websites: filterNodes },
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
        <option>{BsFilter} Filter</option>
        <option value="All">All</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
  );
};

export default Filter;

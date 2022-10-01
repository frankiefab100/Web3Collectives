import React, { useState } from "react";
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

    setResources({ ...resources, websites: filterWebsites });
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
        <option value="All">{BsFilter} Filter</option>
        <option value="All">All</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
  );
};

export default Filter;

import React, { useState, useEffect } from "react";
import { BsFilter } from "react-icons/bs";
import "./Filter.css";

const Filter = () => {
  const [filterParam, setFilterParam] = useState("All");
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);

  useEffect(() => {
    setResources();
    setFilteredResources();
  }, [filterParam]);

  return (
    <div className="filter-resources">
      <select
        /*
    // here we create a basic select input
    // we set the value to the selected value
    // and update the setFilterParam() state every time onChange is called
    */
        onChange={(e) => {
          setFilterParam(e.target.value);
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

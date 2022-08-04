import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Categories from "../../data/categories.json";
import "./SearchFilter.css";

const SearchFilter = () => {
  const [resources, setResources] = useState({
    allResource: Categories,
    selectedResources: [],
  });

  const filterButtons = ["All", "Solidity", "Rust", "Vyper", "Javascript"];

  const handleFilter = (e) => {
    let selectedResources;

    if (e.target.value === "All") {
      selectedResources = resources.selectedResources;
    } else {
      selectedResources = resources.allResource.filter(
        (item) => item.keywords === e.target.value
      );
    }
  };

  return (
    <div className="filter-section">
      <div className="search-section">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a keyword"
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="tag-buttons">
        {filterButtons.map((btn, index) => {
          return (
            <button
              key={index}
              onClick={handleFilter}
              value={btn}
              className="tag"
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SearchFilter;

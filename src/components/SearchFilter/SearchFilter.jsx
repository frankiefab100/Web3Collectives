import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchFilter.css";

const SearchFilter = () => {
  return (
    <div className="filter-section">
      <div className="search-section">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a keyword"
        />
        <button className="search-btn">
          Search
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;

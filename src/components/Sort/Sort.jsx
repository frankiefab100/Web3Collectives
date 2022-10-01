import React from "react";
import { BsSortDownAlt } from "react-icons/bs";
import "./Sort.css";

const Sort = () => {
  return (
    <div className="sort-resources">
      <select>
        {BsSortDownAlt}
        <option>Sort {BsSortDownAlt}</option>
        <option value="oldest">Oldest</option>
        <option value="newest">Newest</option>
        <option value="date">Date</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default Sort;

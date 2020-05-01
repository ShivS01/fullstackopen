import React from "react";

const Filter = ({ filterby, handleFilter, updateView }) => {
  return (
    <div>
      filter shown with <input value={filterby} onChange={handleFilter} />
    </div>
  );
};

export default Filter;

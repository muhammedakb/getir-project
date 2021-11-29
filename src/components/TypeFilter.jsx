import { useState } from "react";

const TypeFilter = ({ type, getFilter }) => {
  const [select, setSelect] = useState(false);

  return (
    <div
      onClick={() => {
        setSelect(!select);
        getFilter(type);
      }}
      className={`type-filter ${select ? "selected" : ""}`}
    >
      <span className="type-filter-text">{type}</span>
    </div>
  );
};

export default TypeFilter;

import { useState } from "react";

const TypeFilter = ({ type }) => {
  const [select, setSelect] = useState(false);

  return (
    <div
      onClick={() => setSelect(!select)}
      className={`type-filter ${select ? "selected" : ""}`}
    >
      <span className="type-filter-text">{type}</span>
    </div>
  );
};

export default TypeFilter;

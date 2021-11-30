const TypeFilter = ({ type, getFilter, selected, setSelected }) => {
  return (
    <div
      onClick={() => {
        getFilter(type);
        setSelected(type);
      }}
      className={`type-filter ${selected === type ? "selected" : ""}`}
    >
      <span className="type-filter-text">{type}</span>
    </div>
  );
};

export default TypeFilter;

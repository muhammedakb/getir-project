// {type, getFilter, selected, setSelected}
// type = filtrelenecek olan ürünün tipi (ayakkabı, gömlek, bardak...)
// getFilter = redux tarafında type'a göre atılacak istek
// selected, setSelected = seçilecek olan filtrenin state'i
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

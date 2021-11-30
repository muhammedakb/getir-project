import TypeFilter from "../components/TypeFilter";
import Pagination from "../components/Pagination";
import { useDispatch } from "react-redux";
import { filterItemsType } from "../stores/items";
import { useState } from "react";

const Products = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);

  const getFilteredItems = (type) => {
    dispatch(filterItemsType(type));
  };

  return (
    <div className="products-page">
      <h1 className="products-page-title">Products</h1>
      <div className="products-page-filter">
        <TypeFilter
          type="mug"
          getFilter={getFilteredItems}
          selected={selected}
          setSelected={setSelected}
        />
        <TypeFilter
          type="shirt"
          getFilter={getFilteredItems}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      {/* pagination and products is here */}
      <Pagination itemsPerPage={16} />
      <footer className="products-page-footer">
        <div className="products-page-footer-brand">
          <span>&copy;2019 Market</span>
        </div>
        <div className="products-page-footer-circle"></div>
        <div className="products-page-footer-policy">Privacy Policy</div>
      </footer>
    </div>
  );
};
export default Products;

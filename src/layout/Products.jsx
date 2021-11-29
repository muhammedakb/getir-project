import Product from "../components/Product";
import TypeFilter from "../components/TypeFilter";
import { useSelector, useDispatch } from "react-redux";
import { getItemsAsync, filterItemsType } from "../stores/items";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();

  const itemsData = useSelector((state) => state.items.items);
  const isLoading = useSelector((state) => state.items.isLoading);
  const errorData = useSelector((state) => state.items.error);

  const getFilteredItems = (type) => {
    dispatch(filterItemsType(type));
  };

  useEffect(() => {
    dispatch(getItemsAsync());
  }, [dispatch]);

  return (
    <div className="products-page">
      <h1 className="products-page-title">Products</h1>
      <div className="products-page-filter">
        <TypeFilter type="mug" getFilter={getFilteredItems} />
        <TypeFilter type="shirt" getFilter={getFilteredItems} />
      </div>
      <section className="products-page-products">
        {isLoading && <div>LOADING...</div>}
        {itemsData.slice(0, 16).map((item, index) => (
          <Product name={item.name} price={item.price} key={index} image={""} />
        ))}
        {errorData && <div style={{ color: "red" }}>VERİLER YÜKLENEMEDİ!</div>}
      </section>
    </div>
  );
};

export default Products;

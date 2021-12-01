import Arrow from "../icons/arrow-right.svg";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { getItemsAsync } from "../stores/items";

// props.itemsPerPage = sayfa başına listelenen item sayısını belirtir
const Pagination = ({ itemsPerPage }) => {
  const dispatch = useDispatch();
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const itemsData = useSelector((state) => state.items.items);
  const isLoading = useSelector((state) => state.items.isLoading);
  const errorData = useSelector((state) => state.items.error);

  useEffect(() => {
    dispatch(getItemsAsync());
  }, [dispatch]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(itemsData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(itemsData.length / itemsPerPage));
  }, [itemOffset, itemsData, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemsData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="products-page-products">
        {isLoading && <div>LOADING...</div>}
        {currentItems &&
          currentItems.map((item, index) => (
            <Product
              name={item.name}
              price={item.price}
              key={index}
              image={""}
            />
          ))}
        {errorData && (
          <div style={{ color: "red" }}>
            VERİLER YÜKLENEMEDİ! <br />
            <br />
            <p>
              <b>yarn companies</b> || <b>yarn items</b> komutları ile fake api
              bağlantısını kurabilirsiniz
            </p>
            <p>
              <b>npm companies</b> || <b>npm items</b> komutları ile fake api
              bağlantısını kurabilirsiniz
            </p>
          </div>
        )}
      </section>
      <section className="pagination">
        <img src={Arrow} alt="<-" className="pagination-prev" />
        <div className="pagination-numbers">
          <ReactPaginate
            nextLabel={`Next`}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="Prev"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
        <img src={Arrow} alt="->" className="pagination-next" />
      </section>
    </>
  );
};

export default Pagination;

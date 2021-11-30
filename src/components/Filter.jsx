import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCompaniesAsync } from "../stores/companies";
import { getItemsAsync } from "../stores/items";

const Filter = ({ type }) => {
  const [tag, setTag] = useState([]);
  const dispatch = useDispatch();

  const companiesData = useSelector((state) => state.companies.items);

  const itemsData = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(getCompaniesAsync());
    dispatch(getItemsAsync());
  }, [dispatch]);

  // console.log("companies", companiesData);
  // console.log("items", itemsData);
  const findDuplicates = (arr) => {
    return Array.from(new Set(arr));
  };

  const x = itemsData
    .map((item) => item.tags.length)
    .filter((item) => item < 2);
  const y = itemsData
    .filter((item) => item.tags.length < 2)
    .map((item) => item.tags);
  const z = itemsData
    .filter((item) => item.tags.length > 1)
    .map((item) => item.tags);

  // max uzunluk 7

  // TODO : reduxta yap bunu
  useEffect(() => {
    const getTags = () => {
      for (let i = 0; i < z.length; i++) {
        z[i].map((item) => setTag(item));
      }
      for (let j = 0; j < y.length; j++) {
        y[j].map((item) => setTag(item));
      }
    };
    getTags();
  }, [z, y]);

  // console.log(tag);
  return (
    <div className="filters-side">
      {type === "brands" ? (
        <>
          <p className="filters-side-title">Brands</p>
          <div className="filters-side-box">
            <input
              type="search"
              name="brand"
              id="brand"
              placeholder="Search brand"
            />
            <div className="filters-side-box-checkboxes">
              {companiesData.map((company) => (
                <React.Fragment key={company.account}>
                  <div className="filters-side-box-checkboxes-item">
                    <input type="checkbox" name="checkbrand" id="checkbrand" />
                    <p className="filters-side-box-checkboxes-item-name">
                      {company.name} <span>(18)</span>
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="filters-side-title">Tags</p>
          <div className="filters-side-box">
            <input
              type="search"
              name="tags"
              id="tags"
              placeholder="Search tag"
            />
            <div className="filters-side-box-checkboxes">
              {itemsData.map((items, index) => (
                <React.Fragment key={index}>
                  {/* {console.log(items.tags.lenght)} */}
                  <div className="filters-side-box-checkboxes-item">
                    <input type="checkbox" name="checktag" id="checktag" />
                    <p className="filters-side-box-checkboxes-item-name">
                      {findDuplicates(items.tags)} <span>(18)</span>
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Filter;

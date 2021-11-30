import { useDispatch } from "react-redux";
import {
  priceLowToHigh,
  priceHighToLow,
  newToOld,
  oldToNew,
} from "../stores/items";

const sortingData = [
  {
    // selected: false,
    text: "Price low to high",
  },
  {
    // selected: false,
    text: "Price high to low",
  },
  {
    // selected: false,
    text: "New to old",
  },
  {
    // selected: false,
    text: "Old to new",
  },
];

const Sorting = ({ select, setSelect }) => {
  const dispatch = useDispatch();

  const sortItems = (text) => {
    switch (text) {
      case "Price low to high":
        dispatch(priceLowToHigh());
        break;
      case "Price high to low":
        dispatch(priceHighToLow());
        break;
      case "New to old":
        dispatch(newToOld());
        break;
      case "Old to new":
        dispatch(oldToNew());
        break;
      default:
        console.log("zortt");
        break;
    }
  };

  return (
    <div className="sorting-side">
      <p className="sorting-side-title">Sorting</p>
      <div className="sorting-side-box">
        {sortingData.map((item, index) => (
          <div className="sorting-side-box-item" key={index}>
            <button
              className="sorting-side-box-item-btn"
              onClick={() => {
                setSelect(item.text);
                sortItems(item.text);
              }}
            >
              <div
                className={`sorting-side-box-item-radio ${
                  select === item.text ? "selected" : ""
                }`}
              ></div>

              <p className="sorting-side-box-item-text">{item.text}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sorting;

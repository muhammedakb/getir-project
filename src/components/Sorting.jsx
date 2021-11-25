import { useState } from "react";

const sortingData = [
  {
    selected: false,
    text: "Price low to high",
  },
  {
    selected: false,
    text: "Price high to low",
  },
  {
    selected: false,
    text: "New to old",
  },
  {
    selected: false,
    text: "Old to new",
  },
];

const Sorting = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="sorting-side">
      <p className="sorting-side-title">Sorting</p>
      <div className="sorting-side-box">
        {sortingData.map((item, index) => (
          <div className="sorting-side-box-item" key={index}>
            <button
              className="sorting-side-box-item-btn"
              onClick={() => {
                setSelected(!selected);
                console.log(selected);
                console.log(item.selected);
              }}
            >
              <div
                className={`sorting-side-box-item-radio ${
                  selected ? "selected" : ""
                }`}
              ></div>
              {/* <input
                type="radio"
                name="selected"
                id="selected"
                className={`sorting-side-box-item-radio ${
                  selected ? "selected" : ""
                }`}
                checked={selected ? true : false}
              /> */}
              <p className="sorting-side-box-item-text">{item.text}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sorting;

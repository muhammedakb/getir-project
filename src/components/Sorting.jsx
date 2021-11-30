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

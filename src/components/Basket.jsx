import BasketIcon from "../icons/basket.svg";

const Basket = ({ price }) => {
  return (
    <div className="header-basket">
      <img src={BasketIcon} alt="ico" />
      <div className="header-basket-price">
        <span className="header-basket-price-lira">₺</span>
        <span className="header-basket-price-value">{price}</span>
      </div>
    </div>
  );
};

export default Basket;

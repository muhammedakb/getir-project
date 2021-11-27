import BasketIcon from "../icons/basket.svg";

const Basket = ({ price }) => {
  return (
    <div className="header-basket">
      <img src={BasketIcon} alt="ico" />
      <div className="header-basket-price">
        {price ? (
          <>
            <span className="header-basket-price-lira">₺</span>
            <span className="header-basket-price-value">{price}</span>
          </>
        ) : (
          <>
            <span className="header-basket-price-lira">Sepet boş</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;

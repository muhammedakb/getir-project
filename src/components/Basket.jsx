import { useSelector } from "react-redux";
import BasketIcon from "../icons/basket.svg";
import { formatMoney } from "../helpers/moneyFormatter";

const Basket = () => {
  const totalBasketAmount = useSelector(
    (state) => state.items.totalBasketAmount
  );
  return (
    <div className="header-basket">
      <img src={BasketIcon} alt="ico" />
      <div className="header-basket-price">
        {totalBasketAmount ? (
          <>
            <span className="header-basket-price-lira">₺</span>
            <span className="header-basket-price-value">
              {formatMoney(totalBasketAmount)}
            </span>
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

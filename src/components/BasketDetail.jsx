import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeToBasket,
  // decrementQuantity,
  incrementQuantity,
  getTotalAmount,
} from "../stores/items";
import { formatMoney } from "../helpers/moneyFormatter";

const BasketDetail = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [item, setİtem] = useState(false);
  const [quantity, setQuantity] = useState();

  const decrement = (itemName) => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
      // if(quantity === 1) {}
    }
    dispatch(removeToBasket(itemName));
  };

  const basketData = useSelector((state) => state.items.basket);
  const totalBasketAmount = useSelector(
    (state) => state.items.totalBasketAmount
  );
  const isEmpty = basketData.length;

  useEffect(() => {
    const getProducts = () => {
      isEmpty > 0 ? setİtem(true) : setİtem(false);
    };
    getProducts();
    dispatch(getTotalAmount());
  }, [isEmpty, dispatch]);

  return (
    <div className="basket-detail">
      {item ? (
        <div className="basket-detail-border">
          {/* here */}
          {basketData.map((items, index) => (
            <React.Fragment key={index}>
              <div className="basket-detail-product">
                <div className="basket-detail-product-infos">
                  <p className="basket-detail-product-infos-name">
                    {items.name}
                  </p>
                  <p className="basket-detail-product-infos-value">
                    ₺{formatMoney(items.price)}
                  </p>
                </div>
                <div className="basket-detail-product-quantity">
                  <button
                    className="basket-detail-product-quantity-decrement"
                    onClick={() => decrement(items.name)}
                  >
                    <span></span>
                  </button>
                  <p className="basket-detail-product-quantity-value">
                    {items.quantity}
                  </p>
                  <button
                    className="basket-detail-product-quantity-increment"
                    onClick={() => dispatch(incrementQuantity(items.name))}
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </React.Fragment>
          ))}
          {/* here end */}
          <div className="basket-detail-footer">
            <div className="basket-detail-result">
              ₺<span>{formatMoney(totalBasketAmount)}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="basket-detail-border no-data">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
            alt=""
          />
          <h3>Sepetiniz şu an boş</h3>
          <p>Sipariş vermek için sepetinize ürün ekleyin</p>
        </div>
      )}
    </div>
  );
};

export default BasketDetail;

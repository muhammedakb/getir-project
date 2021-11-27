import { useState } from "react";

const BasketDetail = () => {
  // eslint-disable-next-line no-unused-vars
  const [item, setİtem] = useState(true);
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="basket-detail">
      {item ? (
        <div className="basket-detail-border">
          <div className="basket-detail-product">
            <div className="basket-detail-product-infos">
              <p className="basket-detail-product-infos-name">
                example product
              </p>
              <p className="basket-detail-product-infos-value">₺14,99</p>
            </div>
            <div className="basket-detail-product-quantity">
              <button
                className="basket-detail-product-quantity-decrement"
                onClick={decrement}
              >
                <span></span>
              </button>
              <p className="basket-detail-product-quantity-value">{quantity}</p>
              <button
                className="basket-detail-product-quantity-increment"
                onClick={() => setQuantity(quantity + 1)}
              >
                <span></span>
              </button>
            </div>
          </div>
          <div className="basket-detail-footer">
            <div className="basket-detail-result">
              ₺<span>39,97</span>
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

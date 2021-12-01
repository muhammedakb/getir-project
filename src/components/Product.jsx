import { useDispatch } from "react-redux";
import { addToBasket } from "../stores/items";
import { formatMoney } from "../helpers/moneyFormatter";

// {image, price, name}  => props 
// listelenecek olan itemlerin UI'da gösterilecek bilgileri
// varsa ? fotoğraf, fiyatı ve ürün adı
const Product = ({ image, price, name }) => {
  const dispatch = useDispatch();

  return (
    <article className="product">
      <div className="product-figure">
        <img src={image} alt="" />
      </div>
      <div className="product-info">
        <div className="product-info-price">
          <span className="product-info-price-lira">₺</span>
          <span className="product-info-price-value">{formatMoney(price)}</span>
        </div>
        <div className="product-info-name">{name}</div>
        <button
          type="button"
          className="product-info-button"
          onClick={() =>
            dispatch(addToBasket({ price: price, name: name, quantity: 1 }))
          }
        >
          Add
        </button>
      </div>
    </article>
  );
};

export default Product;

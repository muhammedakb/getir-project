const Product = ({ image, price, name }) => {
  return (
    <article className="product">
      <div className="product-figure">
        <img src={image} alt="" />
      </div>
      <div className="product-info">
        <div className="product-info-price">
          <span className="product-info-price-lira">₺</span>
          <span className="product-info-price-value">{price}</span>
        </div>
        <div className="product-info-name">{name}</div>
        <button type="button" className="product-info-button">
          Add
        </button>
      </div>
    </article>
  );
};

export default Product;

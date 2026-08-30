function ProductInfo({ product, onAddToCart }) {
  return (
    <div className="details-content">
      <img src={product.image} alt={product.name} />
      <div className="details-text">
        <h1>{product.name}</h1>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductInfo;

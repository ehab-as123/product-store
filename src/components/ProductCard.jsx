import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
      </Link>

      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

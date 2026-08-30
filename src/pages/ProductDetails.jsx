import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductInfo from "../components/ProductInfo";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <Link to="/products" className="back-link">
        &larr; Back to Products
      </Link>
      
      <ProductInfo product={product} onAddToCart={addToCart} />
    </div>
  );
}

export default ProductDetails;

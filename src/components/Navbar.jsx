import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar">
      <Link to="/products" className="logo">
        Product Store
      </Link>
      <div className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </nav>
  );
}

export default Navbar;

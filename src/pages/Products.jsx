import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const categories = ["All", "Electronics", "Clothing", "Food"];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  let filteredProducts = products;
  if (selectedCategory !== "All") {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
  }

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={category === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;

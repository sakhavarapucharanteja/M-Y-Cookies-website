import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

import ragiLaddu from "../images/ragi-laddu.png";
import oatsLaddu from "../images/oats-laddu.png";
import milletLaddu from "../images/millet-laddu.png";
import dryFruitLaddu from "../images/dry-fruit-laddu.png";

const products = [
  {
    id: "ragi-laddu",
    name: "Ragi Laddu",
    category: "Healthy Laddus",
    price: "199",
    image: ragiLaddu,
    description: "Wholesome homemade ragi laddus made with care.",
  },
  {
    id: "oats-laddu",
    name: "Oats Laddu",
    category: "Healthy Laddus",
    price: "199",
    image: oatsLaddu,
    description: "A delicious and healthy homemade treat.",
  },
  {
    id: "millet-laddu",
    name: "Millet Laddu",
    category: "Healthy Laddus",
    price: "219",
    image: milletLaddu,
    description: "Nutritious millet goodness in every bite.",
  },
  {
    id: "dry-fruit-laddu",
    name: "Dry Fruit Laddu",
    category: "Healthy Laddus",
    price: "299",
    image: dryFruitLaddu,
    description: "Rich dry fruits blended into a premium sweet.",
  },
  {
    id: "kunafa-chocolate",
    name: "Kunafa Chocolate",
    category: "Chocolates",
    price: "249",
    emoji: "🍫",
    description: "A delicious fusion of kunafa and chocolate.",
  },
  {
    id: "dry-fruit-chocolate",
    name: "Dry Fruit Chocolate",
    category: "Chocolates",
    price: "299",
    emoji: "🍫",
    description: "Premium chocolate loaded with dry fruits.",
  },
  {
    id: "snickers-chocolate",
    name: "Snickers Chocolate",
    category: "Chocolates",
    price: "249",
    emoji: "🥜",
    description: "A crunchy and chocolaty homemade delight.",
  },
  {
    id: "biscuit-crunch-chocolate",
    name: "Biscuit Crunch Chocolate",
    category: "Chocolates",
    price: "229",
    emoji: "🍪",
    description: "Chocolate with an irresistible crunchy bite.",
  }
];

function Products() {
  const navigate = useNavigate();

  return (
    <div className="products-page">
      {/* PAGE HEADER */}
      <section className="products-page-header">
        <span className="eyebrow">OUR HOMEMADE COLLECTION</span>

        <h1>
          Something Delicious For
          <span> Everyone</span>
        </h1>

        <p>
          Explore our freshly prepared homemade sweets, healthy treats and
          delicious chocolates.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="products-page-content">
        <div className="product-grid">
          {products.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="product-category">
                  {product.category}
                </div>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="product-bottom">
                  <div className="price">
                    <span>Starting from</span>
                    <strong>₹{product.price}</strong>
                  </div>

                  <button
                    className="product-order-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    <MessageCircle size={18} />
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BACK BUTTON */}
        <div className="products-back-button">
          <Link to="/" className="secondary-btn">
            <ArrowRight
              size={19}
              style={{ transform: "rotate(180deg)" }}
            />
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Products;
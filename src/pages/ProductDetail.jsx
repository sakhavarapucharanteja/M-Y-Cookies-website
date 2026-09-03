import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  MessageCircle,
} from "lucide-react";
import { Phone} from "lucide-react";

import ragiLaddu from "../images/ragi-laddu.png";
import oatsLaddu from "../images/oats-laddu.png";
import milletLaddu from "../images/millet-laddu.png";
import dryFruitLaddu from "../images/dry-fruit-laddu.png";

const whatsappNumber = "918341921521";

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
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>

        <button
          className="primary-btn"
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  const orderProduct = () => {
    const message = `Hi M & Y Home Made Foods! 👋

I would like to order:

🍪 Product: ${product.name}
💰 Price: ₹${product.price}

Please share more details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">

        <button
          className="back-home-btn"
          onClick={() => navigate("/products")}
        >
          ← Back to Products
        </button>

        <div className="product-detail-card">

          <div className="product-detail-image">
            <div className="detail-category">
              {product.category}
            </div>

            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-detail-info">

            <span className="detail-eyebrow">
              HOMEMADE WITH LOVE ❤️
            </span>

            <h1>{product.name}</h1>

            <p className="detail-description">
              {product.description}
            </p>

            <div className="detail-price">
              <span>Starting from</span>

              <strong>
                ₹{product.price}
              </strong>
            </div>

            <div className="detail-features">
              <div>✓ Freshly Prepared</div>
              <div>✓ 100% Homemade</div>
              <div>
                ✓ Made with Quality Ingredients
              </div>
            </div>

            <div className="detail-action-buttons">

                <button
                    className="detail-order-btn"
                    onClick={orderProduct}
                >
                    <MessageCircle size={22} />
                    <span>Order on WhatsApp</span>
                </button>

                <a
                    href="tel:+918341921521"
                    className="detail-call-btn"
                >
                    <Phone size={22} />
                    <span>Call Now</span>
                </a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
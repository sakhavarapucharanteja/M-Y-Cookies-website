
import { useEffect, useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  MessageCircle,
  Phone,
} from "lucide-react";
import "./ProductDetail.css";

const API_URL = "http://localhost:5000/api/products";
const IMAGE_BASE_URL = "http://localhost:5000";
const whatsappNumber = "918341921521";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the selected product from MongoDB
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");
        setProduct(null);

        const response = await fetch(
          `${API_URL}/${encodeURIComponent(id)}`
        );

        if (response.status === 404) {
          setError("Product not found");
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Unable to load this product. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Build image URL
  const getImageUrl = (image) => {
    if (!image) {
      return "/placeholder-product.png";
    }

    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
      return image;
    }

    return `${IMAGE_BASE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
  };

  // WhatsApp ordering
  const orderProduct = () => {
    if (!product) return;

    let priceDetails = "";

    // Products with multiple weight options
    if (
      Array.isArray(product.prices) &&
      product.prices.length > 0
    ) {
      priceDetails = product.prices
        .map(
          (item) =>
            `• ${item.weight} - ₹${item.price}`
        )
        .join("\n");
    }

    // Products with a single price
    else if (product.price !== undefined && product.price !== null) {
      priceDetails = `• ₹${product.price}`;
    } else {
      priceDetails = "Please confirm the price";
    }

    const message = `Hi M & Y Home Made Foods! 👋

I would like to order:

🍪 Product: ${product.name}

Price / Available Options:
${priceDetails}

Please share more details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="product-not-found">
        <h2>Loading product...</h2>
      </div>
    );
  }

  // Error or missing product
  if (error || !product) {
    return (
      <div className="product-not-found">
        <h2>{error || "Product not found"}</h2>

        <button
          className="primary-btn"
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-page">

      <div className="product-detail-container">

        {/* BACK BUTTON */}

        <button
          className="back-home-btn"
          onClick={() => navigate("/products")}
        >
          ← Back to Products
        </button>

        <div className="product-detail-card">

          {/* PRODUCT IMAGE */}

          <div className="product-detail-image">

            <div className="detail-category">
              {product.category}
            </div>

            {product.image ? (
              <img
                src={getImageUrl(product.image)}
                alt={product.name}
              />
            ) : (
              <div className="product-emoji-image">
                🍪
              </div>
            )}

          </div>

          {/* PRODUCT INFORMATION */}

          <div className="product-detail-info">

            <span className="detail-eyebrow">
              HOMEMADE WITH LOVE ❤️
            </span>

            <h1>{product.name}</h1>

            <p className="detail-description">
              {product.description}
            </p>

            {/* MULTIPLE PRICE OPTIONS */}

            {Array.isArray(product.prices) &&
            product.prices.length > 0 ? (

              <div className="detail-price">

                <span className="price-title">
                  Available Sizes
                </span>

                <div className="price-options">

                  {product.prices.map((item, index) => (

                    <div
                      className="price-option"
                      key={`${item.weight}-${index}`}
                    >

                      <span className="price-weight">
                        {item.weight}
                      </span>

                      <strong className="price-amount">
                        ₹{item.price}
                      </strong>

                    </div>

                  ))}

                </div>

              </div>

            ) : (

              /* SINGLE PRICE */

              <div className="detail-price">

                <span className="price-title">
                  Price
                </span>

                <strong className="single-price">
                  {product.price !== undefined &&
                  product.price !== null
                    ? `₹${product.price}`
                    : "Contact for price"}
                </strong>

              </div>

            )}

            {/* FEATURES */}

            <div className="detail-features">

              <div>✓ Freshly Prepared</div>

              <div>✓ 100% Homemade</div>

              <div>
                ✓ Made with Quality Ingredients
              </div>

            </div>

            {/* ACTION BUTTONS */}

            <div className="detail-action-buttons">

              <button
                className="detail-order-btn"
                onClick={orderProduct}
              >

                <MessageCircle size={22} />

                <span>
                  Order on WhatsApp
                </span>

              </button>

              <a
                href="tel:+918341921521"
                className="detail-call-btn"
              >

                <Phone size={22} />

                <span>
                  Call Now
                </span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;

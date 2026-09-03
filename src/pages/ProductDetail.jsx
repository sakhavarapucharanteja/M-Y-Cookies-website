import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  MessageCircle,
  Phone,
} from "lucide-react";

import ragiLaddu from "../images/ragi-laddu.png";
import oatsLaddu from "../images/oats-laddu.png";
import milletLaddu from "../images/millet-laddu.png";
import dryFruitLaddu from "../images/dry-fruit-laddu.png";

// DRY FRUITS CHOCOLATE IMAGES
import dryFruitchocolateMango from "../images/Dry-fruit-chocolate-mango.png";
import dryFruitchocolateStrawberry from "../images/Dry-fruit-chocolate-strawberry.png";
import dryFruitchocolatechocolate from "../images/Dry-fruit-chocolate-choco.png";

const whatsappNumber = "918341921521";

const products = [
  // HEALTHY LADDUS
  {
    id: "ragi-laddu",
    name: "Ragi Laddu",
    category: "Healthy Laddus",
    image: ragiLaddu,
    description: "Wholesome homemade ragi laddus made with care.",
    prices: [
      {
        weight: "250 g",
        price: "225",
      },
      {
        weight: "500 g",
        price: "400",
      },
      {
        weight: "1 kg",
        price: "800",
      },
    ],
  },

  {
    id: "oats-laddu",
    name: "Oats Laddu",
    category: "Healthy Laddus",
    image: oatsLaddu,
    description: "A delicious and healthy homemade treat.",
    prices: [
      {
        weight: "250 g",
        price: "225",
      },
      {
        weight: "500 g",
        price: "400",
      },
      {
        weight: "1 kg",
        price: "800",
      },
    ],
  },

  {
    id: "millet-laddu",
    name: "Millet Laddu",
    category: "Healthy Laddus",
    image: milletLaddu,
    description: "Nutritious millet goodness in every bite.",
    prices: [
      {
        weight: "250 g",
        price: "250",
      },
      {
        weight: "500 g",
        price: "450",
      },
      {
        weight: "1 kg",
        price: "900",
      },
    ],
  },

  {
    id: "dry-fruit-laddu",
    name: "Dry Fruits Laddu",
    category: "Healthy Laddus",
    image: dryFruitLaddu,
    description: "Rich dry fruits blended into a premium sweet.",
    prices: [
      {
        weight: "250 g",
        price: "250",
      },
      {
        weight: "500 g",
        price: "450",
      },
      {
        weight: "1 kg",
        price: "900",
      },
    ],
  },


  // CHOCOLATES
  {
    id: "kunafa-chocolate",
    name: "Kunafa Chocolate",
    category: "Chocolates",
    price: "₹249",
    emoji: "🍫",
    description: "A delicious fusion of kunafa and chocolate.",
  },


  // DRY FRUITS CHOCOLATES
  {
    id: "dry-fruits-chocolate-mango",
    name: "Dry Fruits Chocolate with Mango Flavor",
    category: "Dry Fruits Chocolates",
    price: "₹30 Piece",
    image: dryFruitchocolateMango,
    description:
      "Delicious dry fruits chocolate with a rich and fruity mango flavor.",
  },

  {
    id: "dry-fruits-chocolate-strawberry",
    name: "Dry Fruits Chocolate with Strawberry Flavor",
    category: "Dry Fruits Chocolates",
    price: "₹30 Piece",
    image: dryFruitchocolateStrawberry,
    description:
      "Delicious dry fruits chocolate with a sweet strawberry flavor.",
  },

  {
    id: "dry-fruits-chocolate-chocolate",
    name: "Dry Fruits Chocolate with Chocolate Flavor",
    category: "Dry Fruits Chocolates",
    price: "₹30 Piece",
    image: dryFruitchocolatechocolate,
    description:
      "Rich and delicious dry fruits chocolate with an extra chocolate flavor.",
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
    let priceDetails = "";

    // PRODUCTS WITH MULTIPLE WEIGHT OPTIONS
    if (product.prices) {
      priceDetails = product.prices
        .map(
          (item) =>
            `• ${item.weight} - ₹${item.price}`
        )
        .join("\n");
    }

    // PRODUCTS WITH SINGLE PRICE / QUANTITY
    else {
      priceDetails = `• ${product.price}`;
    }


    const message = `Hi M & Y Home Made Foods! 👋

I would like to order:

🍪 Product: ${product.name}

Price / Available Options:
${priceDetails}

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

          {/* PRODUCT IMAGE */}
          <div className="product-detail-image">

            <div className="detail-category">
              {product.category}
            </div>


            {/* SHOW IMAGE IF AVAILABLE */}
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
              />
            ) : (
              <div className="product-emoji-image">
                {product.emoji}
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
            {product.prices ? (

              <div className="detail-price">

                <span className="price-title">
                  Available Sizes
                </span>


                <div className="price-options">

                  {product.prices.map((item) => (

                    <div
                      className="price-option"
                      key={item.weight}
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
                  {product.price}
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
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

import ragiLaddu from "../images/ragi-laddu-140kb.png";
import oatsLaddu from "../images/oats-laddu-140kb.png";
import milletLaddu from "../images/millet-laddu-140kb.png";
import dryFruitLaddu from "../images/dry-fruit-laddu-140kb.jpg";
import kunafa from "../images/kunafa-140kb.png";

import dryFruitchocolateMango from "../images/Dry-fruit-chocolate-mango-140kb.jpg";
import dryFruitchocolateStrawberry from "../images/Dry-fruit-chocolate-strawberry-140kb.jpg";
import dryFruitchocolatechocolate from "../images/Dry-fruit-chocolate-choco-140kb.jpg";

/* NEW PRODUCT IMAGES */
import dryFruitsDonut from "../images/dry-fruits-donut-140kb.png";
import datesChocolate from "../images/dates-chocolate-140kb.png";
import paniPuri from "../images/pani-puri-140kb.png";


const products = [

  // HEALTHY LADDUS
  {
    id: "ragi-laddu",
    name: "Ragi Laddu",
    category: "Healthy Laddus",
    price: "225",
    image: ragiLaddu,
    description: "Wholesome homemade ragi laddus made with care.",
  },

  {
    id: "oats-laddu",
    name: "Oats Laddu",
    category: "Healthy Laddus",
    price: "225",
    image: oatsLaddu,
    description: "A delicious and healthy homemade treat.",
  },

  {
    id: "millet-laddu",
    name: "Millet Laddu",
    category: "Healthy Laddus",
    price: "250",
    image: milletLaddu,
    description: "Nutritious millet goodness in every bite.",
  },

  {
    id: "dry-fruit-laddu",
    name: "Dry Fruit Laddu",
    category: "Healthy Laddus",
    price: "250",
    image: dryFruitLaddu,
    description: "Rich dry fruits blended into a premium sweet.",
  },


  // CHOCOLATES
  {
    id: "kunafa-chocolate",
    name: "Kunafa Chocolate",
    category: "Chocolates",
    price: "100",
    image: kunafa,
    description: "A delicious fusion of kunafa and chocolate.",
  },


  // DRY FRUITS CHOCOLATES
  {
    id: "dry-fruits-chocolate-mango",
    name: "Dry Fruits Chocolate with Mango Flavor",
    category: "Dry Fruits Chocolates",
    price: "30",
    image: dryFruitchocolateMango,
    description:
      "Delicious dry fruits chocolate with a rich and fruity mango flavor.",
  },

  {
    id: "dry-fruits-chocolate-strawberry",
    name: "Dry Fruits Chocolate with Strawberry Flavor",
    category: "Dry Fruits Chocolates",
    price: "30",
    image: dryFruitchocolateStrawberry,
    description:
      "Delicious dry fruits chocolate with a sweet strawberry flavor.",
  },

  {
    id: "dry-fruits-chocolate-chocolate",
    name: "Dry Fruits Chocolate with Chocolate Flavor",
    category: "Dry Fruits Chocolates",
    price: "30",
    image: dryFruitchocolatechocolate,
    description:
      "Rich and delicious dry fruits chocolate with an extra chocolate flavor.",
  },


  // NEW PRODUCTS

  {
    id: "dry-fruits-donut",
    name: "Dry Fruits Donut",
    category: "Dry Fruits Chocolates",
    price: "80",
    image: dryFruitsDonut,
    description:
      "Delicious chocolate dry fruits donuts topped with colourful sprinkles.",
  },

  {
    id: "dates-chocolate",
    name: "Dates Chocolate",
    category: "Dry Fruits Chocolates",
    price: "100",
    image: datesChocolate,
    description:
      "Rich and delicious dates coated with premium chocolate and crunchy toppings.",
  },


  // SNACKS
  {
    id: "pani-puri",
    name: "Pani Puri",
    category: "Snacks",
    price: "50",
    image: paniPuri,
    description:
      "Fresh and delicious homemade pani puri prepared with tasty fillings and flavourful pani.",
  },

];


function Products() {
  const navigate = useNavigate();

  return (
    <div className="products-page">

      {/* PAGE HEADER */}
      <section className="products-page-header">

        <span className="eyebrow">
          OUR HOMEMADE COLLECTION
        </span>

        <h1>
          Something Delicious For
          <span> Everyone</span>
        </h1>

        <p>
          Explore our freshly prepared homemade sweets, healthy treats,
          delicious chocolates and snacks.
        </p>

      </section>


      {/* PRODUCTS */}
      <section className="products-page-content">

        <div className="product-grid">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
              onClick={() =>
                navigate(`/product/${product.id}`)
              }
              style={{ cursor: "pointer" }}
            >

              {/* PRODUCT IMAGE */}
              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="product-category">
                  {product.category}
                </div>

              </div>


              {/* PRODUCT INFORMATION */}
              <div className="product-info">

                <h3>{product.name}</h3>

                <p>{product.description}</p>


                <div className="product-bottom">

                  <div className="price">

                    <span>
                      {product.price === "Contact for price"
                        ? "Price"
                        : "Starting from"}
                    </span>

                    <strong>
                      {product.price === "Contact for price"
                        ? "Contact for price"
                        : `₹${product.price}`}
                    </strong>

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

          <Link
            to="/"
            className="secondary-btn"
          >

            <ArrowRight
              size={19}
              style={{
                transform: "rotate(180deg)",
              }}
            />

            Back to Home

          </Link>

        </div>

      </section>

    </div>
  );
}

export default Products;
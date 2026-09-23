import { useEffect, useState } from "react";
import {
  MessageCircle,
  MapPin,
  Heart,
  ArrowRight,
  Star,
  Gift,
  Phone,
  X,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import ragiLaddu from "../images/ragi-laddu-140kb.png";
import oatsLaddu from "../images/oats-laddu-140kb.png";
import milletLaddu from "../images/millet-laddu-140kb.png";
import dryFruitLaddu from "../images/dry-fruit-laddu-140kb.jpg";


const whatsappNumber = "918341921521";


const products = [
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
];


function Home() {
  const navigate = useNavigate();

  const [showEventPopup, setShowEventPopup] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem("eventPopupShown");

    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowEventPopup(true);
        sessionStorage.setItem("eventPopupShown", "true");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);


  /* =========================
     WHATSAPP
  ========================= */

  const openWhatsApp = () => {

    const message =
      "Hi M & Y Home Made Foods! 👋 I would like to know more about your homemade products.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };


  /* =========================
     EVENT / PARTY WHATSAPP
  ========================= */

  const openEventWhatsApp = () => {

    const message =
      "Hi M & Y Home Made Foods! 👋 I would like to enquire about party/event orders. I am interested in placing an order for my occasion.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };


  return (

    <div className="app">


      {/* =====================================================
      PARTY & EVENT POPUP
      ===================================================== */}

      {showEventPopup && (
        <div className="event-popup-overlay">

          <div className="event-popup">

            {/* CLOSE BUTTON */}

              <button
                className="event-popup-close"
                onClick={() => setShowEventPopup(false)}
                aria-label="Close"
              >
                <X size={22} />
              </button>


              {/* POPUP ICON */}

              <div className="event-popup-icon">
                🎉
              </div>


              {/* MAIN MESSAGE */}

              <span className="event-popup-eyebrow">
                PARTY & EVENT ORDERS
              </span>


              <h2>
                SMALL OR BIG — WE ACCEPT ALL ORDERS!
              </h2>


              <p className="event-popup-main-text">
                Food • Snacks • Tiffins • Meals • Beverages
              </p>


              <p className="event-popup-description">
                Perfect for parties, functions, gatherings,
                birthdays and special occasions.
              </p>


              {/* ORDER TYPES */}

              <div className="event-popup-items">

                <span>🍽️ Food & Meals</span>

                <span>🥪 Snacks & Tiffins</span>

                <span>☕ Beverages</span>

                <span>🍫 Sweets & Treats</span>

              </div>


              <p className="event-popup-note">
                ✨ Custom quantities available
              </p>


              {/* WHATSAPP */}

              <button
                className="event-popup-whatsapp"
                onClick={openEventWhatsApp}
              >
                <MessageCircle size={20} />
                Enquire on WhatsApp
              </button>


              <button
                className="event-popup-later"
                onClick={() => setShowEventPopup(false)}
              >
                Maybe Later
              </button>

          </div>

        </div>
      )}


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <div className="tag">

            <Heart
              size={16}
              fill="currentColor"
            />

            Healthy Tasty & Nutrition

          </div>


          <h1>

            Freshly Made.

            <span>
              Especially For You.
            </span>

          </h1>


          <p>
            Delicious homemade treats prepared with love,
            quality ingredients and care. Freshly made for
            every special moment.
          </p>


          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={openWhatsApp}
            >

              <MessageCircle size={20} />

              Order on WhatsApp

            </button>


            <Link
              to="/products"
              className="secondary-btn"
            >

              Explore Products

              <ArrowRight size={19} />

            </Link>

          </div>


          <div className="location">

            <MapPin size={20} />

            <span>
              Freshly prepared & delivered in Hyderabad
            </span>

          </div>

        </div>



        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="cookie-card card-one">
            🍪
          </div>

          <div className="cookie-card card-two">
            🍫
          </div>

          <div className="cookie-card card-three">
            🥜
          </div>


          <div className="hero-main-circle">

            <div className="hero-emoji">
              🍪
            </div>

          </div>


          <div className="floating-text top-text">

            <span>
              100%
            </span>

            <small>
              HOMEMADE
            </small>

          </div>


          <div className="floating-text bottom-text">

            <Heart
              size={18}
              fill="currentColor"
            />

            MADE WITH LOVE

          </div>

        </div>

      </section>



      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="features">


        <div className="feature">

          <span>
            🏠
          </span>

          <div>

            <h3>
              100% Homemade
            </h3>

            <p>
              Prepared with love and care
            </p>

          </div>

        </div>



        <div className="feature">

          <span>
            🌿
          </span>

          <div>

            <h3>
              Quality Ingredients
            </h3>

            <p>
              Fresh ingredients in every bite
            </p>

          </div>

        </div>



        <div className="feature">

          <span>
            ✨
          </span>

          <div>

            <h3>
              Freshly Prepared
            </h3>

            <p>
              Made fresh for your order
            </p>

          </div>

        </div>



        <div className="feature">

          <span>
            ❤️
          </span>

          <div>

            <h3>
              Made With Love
            </h3>

            <p>
              Homemade happiness for you
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          PRODUCTS PREVIEW
      ===================================================== */}

      <section className="products-section">


        <div className="section-heading">

          <div>

            <span className="eyebrow">
              OUR HOMEMADE COLLECTION
            </span>


            <h2>
              Something Delicious For Everyone
            </h2>

          </div>


          <p>
            Explore our freshly prepared homemade sweets,
            healthy treats and delicious chocolates.
          </p>

        </div>



        <div className="product-grid">


          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
              onClick={() =>
                navigate(`/product/${product.id}`)
              }
              style={{
                cursor: "pointer",
              }}
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



              {/* PRODUCT INFO */}

              <div className="product-info">


                <h3>
                  {product.name}
                </h3>


                <p>
                  {product.description}
                </p>



                <div className="product-bottom">


                  <div className="price">

                    <span>
                      Starting from
                    </span>

                    <strong>
                      ₹{product.price}
                    </strong>

                  </div>



                  <button
                    className="product-order-btn"
                    onClick={(e) => {

                      e.stopPropagation();

                      navigate(
                        `/product/${product.id}`
                      );

                    }}
                  >

                    <MessageCircle
                      size={18}
                    />

                    View

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>



        {/* VIEW ALL PRODUCTS */}

        <div
          style={{
            textAlign: "center",
            marginTop: "35px",
          }}
        >

          <Link
            to="/products"
            className="primary-btn"
          >

            View All Products

            <ArrowRight size={19} />

          </Link>

        </div>

      </section>



      {/* =====================================================
          PARTY & EVENT ORDERS
      ===================================================== */}

      <section className="special-section">


        <div className="special-icon">

          <Gift size={55} />

        </div>



        <div>

          <span className="eyebrow light">
            PARTY & EVENT ORDERS
          </span>


          <h2>
            Homemade Goodness For Every Occasion 🎉
          </h2>


          <p>
            Planning a small get-together, birthday party,
            family function, office gathering or a large event?
            We accept both small and large orders with freshly
            prepared homemade food made especially for your
            occasion.
          </p>


          <span className="special-note">
            ✨ Small or big — we accept all orders!
          </span>

        </div>



        <button
          className="white-btn"
          onClick={openEventWhatsApp}
        >

          Enquire About Your Event

          <ArrowRight size={19} />

        </button>

      </section>



      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="about-section">


        <div className="about-visual">

          <div className="about-circle">
            ❤️
          </div>


          <div className="about-small-card">

            <Star
              size={20}
              fill="currentColor"
            />

            <span>
              Freshly Made
            </span>

          </div>

        </div>



        <div className="about-content">

          <span className="eyebrow">
            ABOUT M & Y
          </span>


          <h2>
            Homemade Food That Feels Like Home
          </h2>


          <p>
            At M & Y Home Made Foods, we believe that
            the best food is made with care, quality
            ingredients and lots of love.
          </p>


          <Link
            to="/about"
            className="primary-btn"
          >

            Learn More

            <ArrowRight size={19} />

          </Link>

        </div>

      </section>



      {/* =====================================================
          CONTACT / ORDER
      ===================================================== */}

      <section className="contact-section">


        <div>

          <span className="eyebrow">
            ORDER WITH US
          </span>


          <h2>
            Ready For Something Delicious? 🍪
          </h2>


          <p>
            Message us on WhatsApp to place your order
            or enquire about party, event, custom and
            bulk orders.
          </p>

        </div>



        <div className="contact-actions">


          <button
            className="primary-btn"
            onClick={openWhatsApp}
          >

            <MessageCircle size={21} />

            WhatsApp Us

          </button>



          <a
            href="tel:+918341921521"
            className="phone-btn"
          >

            <Phone size={20} />

            +91 83419 21521

          </a>

        </div>

      </section>


    </div>

  );

}


export default Home;
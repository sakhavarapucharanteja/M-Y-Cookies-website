import "./App.css";
import {
  Menu,
  X,
  MessageCircle,
  MapPin,
  Heart,
  ArrowRight,
  Star,
  Gift,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const whatsappNumber = "918341921521";

const products = [
  {
    name: "Ragi Laddu",
    category: "Healthy Laddus",
    price: "199",
    emoji: "🟤",
    description: "Wholesome homemade ragi laddus made with care.",
  },
  {
    name: "Oats Laddu",
    category: "Healthy Laddus",
    price: "199",
    emoji: "🌾",
    description: "A delicious and healthy homemade treat.",
  },
  {
    name: "Millet Laddu",
    category: "Healthy Laddus",
    price: "219",
    emoji: "🥜",
    description: "Nutritious millet goodness in every bite.",
  },
  {
    name: "Dry Fruit Laddu",
    category: "Healthy Laddus",
    price: "299",
    emoji: "🍇",
    description: "Rich dry fruits blended into a premium sweet.",
  },
  {
    name: "Kunafa Chocolate",
    category: "Chocolates",
    price: "249",
    emoji: "🍫",
    description: "A delicious fusion of kunafa and chocolate.",
  },
  {
    name: "Dry Fruit Chocolate",
    category: "Chocolates",
    price: "299",
    emoji: "🍫",
    description: "Premium chocolate loaded with dry fruits.",
  },
  {
    name: "Snickers Chocolate",
    category: "Chocolates",
    price: "249",
    emoji: "🥜",
    description: "A crunchy and chocolaty homemade delight.",
  },
  {
    name: "Biscuit Crunch Chocolate",
    category: "Chocolates",
    price: "229",
    emoji: "🍪",
    description: "Chocolate with an irresistible crunchy bite.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const orderProduct = (product) => {
    const message = `Hi M & Y Home Made Cookies! 👋%0A%0AI would like to order:%0A🍪 ${product.name}%0A💰 ₹${product.price}%0A%0APlease share more details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  const openWhatsApp = () => {
    const message =
      "Hi M & Y Home Made Cookies! 👋 I would like to know more about your homemade products.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-circle">M&Y</div>

          <div>
            <h2>M & Y</h2>
            <span>HOME MADE FOODS</span>
          </div>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#products" onClick={() => setMenuOpen(false)}>
            Products
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <button className="nav-order-btn" onClick={openWhatsApp}>
            <MessageCircle size={18} />
            Order Now
          </button>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="tag">
            <Heart size={16} fill="currentColor" />
            MADE WITH LOVE
          </div>

          <h1>
            Freshly Made.
            <span> Especially For You.</span>
          </h1>

          <p>
            Delicious homemade treats prepared with love, quality ingredients
            and care. Freshly made for every special moment.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={openWhatsApp}>
              <MessageCircle size={20} />
              Order on WhatsApp
            </button>

            <a href="#products" className="secondary-btn">
              Explore Products
              <ArrowRight size={19} />
            </a>
          </div>

          <div className="location">
            <MapPin size={20} />
            <span>Freshly prepared & delivered in Hyderabad</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="cookie-card card-one">🍪</div>
          <div className="cookie-card card-two">🍫</div>
          <div className="cookie-card card-three">🥜</div>

          <div className="hero-main-circle">
            <div className="hero-emoji">🍪</div>
          </div>

          <div className="floating-text top-text">
            <span>100%</span>
            <small>HOMEMADE</small>
          </div>

          <div className="floating-text bottom-text">
            <Heart size={18} fill="currentColor" />
            MADE WITH LOVE
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <span>🏠</span>
          <div>
            <h3>100% Homemade</h3>
            <p>Prepared with love and care</p>
          </div>
        </div>

        <div className="feature">
          <span>🌿</span>
          <div>
            <h3>Quality Ingredients</h3>
            <p>Fresh ingredients in every bite</p>
          </div>
        </div>

        <div className="feature">
          <span>✨</span>
          <div>
            <h3>Freshly Prepared</h3>
            <p>Made fresh for your order</p>
          </div>
        </div>

        <div className="feature">
          <span>❤️</span>
          <div>
            <h3>Made With Love</h3>
            <p>Homemade happiness for you</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR HOMEMADE COLLECTION</span>
            <h2>Something Delicious For Everyone</h2>
          </div>

          <p>
            Explore our freshly prepared homemade sweets, healthy treats and
            delicious chocolates.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <div className="product-image">
                <span>{product.emoji}</span>
                <div className="product-category">{product.category}</div>
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
                    onClick={() => orderProduct(product)}
                  >
                    <MessageCircle size={18} />
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIAL ORDER */}
      <section className="special-section">
        <div className="special-icon">
          <Gift size={55} />
        </div>

        <div>
          <span className="eyebrow light">SPECIAL ORDERS</span>
          <h2>Make Every Occasion Sweeter 🎁</h2>
          <p>
            Festival gifts, party orders, return gifts and custom homemade
            treats prepared especially for your special occasion.
          </p>
        </div>

        <button className="white-btn" onClick={openWhatsApp}>
          Plan Your Order
          <ArrowRight size={19} />
        </button>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-visual">
          <div className="about-circle">❤️</div>
          <div className="about-small-card">
            <Star size={20} fill="currentColor" />
            <span>Freshly Made</span>
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow">ABOUT M & Y</span>
          <h2>Homemade Food That Feels Like Home</h2>

          <p>
            At M & Y Home Made Foods, we believe that the best food is made
            with care, quality ingredients and lots of love.
          </p>

          <p>
            From healthy laddus and delicious chocolates to special homemade
            treats, every order is freshly prepared especially for you.
          </p>

          <button className="primary-btn" onClick={openWhatsApp}>
            <MessageCircle size={20} />
            Chat With Us
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div>
          <span className="eyebrow">ORDER WITH US</span>
          <h2>Ready For Something Delicious? 🍪</h2>
          <p>
            Message us on WhatsApp to place your order or enquire about custom
            and bulk orders.
          </p>
        </div>

        <div className="contact-actions">
          <button className="primary-btn" onClick={openWhatsApp}>
            <MessageCircle size={21} />
            WhatsApp Us
          </button>

          <a href="tel:+918341921521" className="phone-btn">
            <Phone size={20} />
            +91 83419 21521
          </a>
        </div>
      </section>


      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <div className="logo-circle">M&Y</div>

          <div>
            <h3>M & Y Home Made Foods</h3>
            <p>Good Food ❤️ Good Mood ❤️ Homemade is the Best!</p>
          </div>
        </div>

        <div className="footer-location">
          <MapPin size={18} />
          Hyderabad, India
        </div>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/m_y_home_made_foods?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>

          <button onClick={openWhatsApp} aria-label="WhatsApp">
            <MessageCircle size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
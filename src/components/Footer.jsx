import { Link } from "react-router-dom";
import {
  MessageCircle,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const whatsappNumber = "918341921521";

function Footer() {
  const openWhatsApp = () => {
    const message =
      "Hi M & Y Home Made Foods! 👋 I would like to know more about your homemade products.";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand-section">
          <div className="footer-brand-header">
            <div className="footer-logo-circle">
              M&Y
            </div>

            <div>
              <h3>M & Y Home Made Foods</h3>

              <span className="footer-tagline">
                Made with love ❤️
              </span>
            </div>
          </div>

          <p className="footer-description">
            Freshly prepared homemade sweets and delicious treats made with
            quality ingredients, care, and lots of love.
          </p>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/m_y_home_made_foods"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow M & Y Home Made Foods on Instagram"
            >
              <FaInstagram size={20} />
            </a>

            <button
              type="button"
              onClick={openWhatsApp}
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle size={20} />
            </button>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="footer-column">
          <h4>Explore</h4>

          <div className="footer-links">
            <Link to="/">Home</Link>

            <Link to="/products">
              Products
            </Link>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>Get In Touch</h4>

          <div className="footer-contact">
            <button
              type="button"
              onClick={openWhatsApp}
              className="footer-contact-link"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </button>

            <a
              href="tel:+918341921521"
              className="footer-contact-link"
            >
              <Phone size={20} />
              <span>+91 83419 21521</span>
            </a>

            <div className="footer-contact-link">
              <MapPin size={20} />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-copyright">
          <div className="footer-line" />

          <div className="footer-bottom-content">
            <p>
                © {new Date().getFullYear()} M & Y Home Made Foods.
                <br />
                All rights reserved.
            </p>

            <p>
                Good Food
                <Heart size={15} fill="currentColor" />
                Good Mood
                ❤️
            </p>
            </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
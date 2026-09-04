import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

import logo from "../images/MY_Logo.png";

const whatsappNumber = "918341921521";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openWhatsApp = () => {
    const message =
      "Hi M & Y Home Made Foods! 👋 I would like to know more about your homemade products.";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        <div className="logo-circle">
          <img
            src={logo}
            alt="M & Y Home Made Foods Logo"
          />
        </div>

        <div className="logo-text">
          <h2>M & Y</h2>
          <span>HOME MADE FOODS</span>
        </div>
      </Link>

      {/* NAVIGATION */}
      <div
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >
        <Link
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/products"
          onClick={closeMenu}
        >
          Products
        </Link>

        <Link
          to="/about"
          onClick={closeMenu}
        >
          About Us
        </Link>

        <Link
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </Link>

        <button
          type="button"
          className="nav-order-btn"
          onClick={openWhatsApp}
        >
          <MessageCircle size={18} />
          Order Now
        </button>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className="menu-btn"
        onClick={() =>
          setMenuOpen((previous) => !previous)
        }
        aria-label={
          menuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

export default Navbar;
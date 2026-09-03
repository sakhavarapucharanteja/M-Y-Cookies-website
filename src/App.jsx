import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import {
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";

const whatsappNumber = "918341921521";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openWhatsApp = () => {
    const message =
      "Hi M & Y Home Made Foods! 👋 I would like to know more about your homemade products.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <Link
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <div className="logo-circle">M&Y</div>

          <div>
            <h2>M & Y</h2>
            <span>HOME MADE FOODS</span>
          </div>
        </Link>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <button
            className="nav-order-btn"
            onClick={openWhatsApp}
          >
            <MessageCircle size={18} />
            Order Now
          </button>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

function App() {
  return <Layout />;
}

export default App;
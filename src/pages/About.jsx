import { Link } from "react-router-dom";
import {
  Heart,
  Star,
  MessageCircle,
} from "lucide-react";

function About() {
  return (
    <div className="page-container">
      <section className="about-section">
        <div className="about-visual">
          <div className="about-circle">
            ❤️
          </div>

          <div className="about-small-card">
            <Star size={20} fill="currentColor" />
            <span>Freshly Made</span>
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
            At M & Y Home Made Foods, we believe
            that the best food is made with care,
            quality ingredients and lots of love.
          </p>

          <p>
            Every product is freshly prepared to
            give you the taste and comfort of
            authentic homemade food.
          </p>

          <p>
            From healthy laddus to delicious
            chocolates and special treats, every
            order is made especially for you.
          </p>

          <Link to="/contact" className="primary-btn">
            <MessageCircle size={20} />
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
import { Link } from "react-router-dom";
import {
  Heart,
  Star,
  MessageCircle,
  Leaf,
  Sparkles,
  Award,
  Gift,
  ArrowRight,
} from "lucide-react";

function About() {
  const values = [
    {
      icon: <Heart size={28} fill="currentColor" />,
      title: "Made With Love",
      description:
        "Every product is prepared with care, attention and the warmth of homemade food.",
    },
    {
      icon: <Leaf size={28} />,
      title: "Quality Ingredients",
      description:
        "We carefully select quality ingredients to bring you delicious homemade treats.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Freshly Prepared",
      description:
        "Our products are freshly prepared so every order feels special and delicious.",
    },
    {
      icon: <Award size={28} />,
      title: "Homemade Quality",
      description:
        "We focus on authentic homemade taste and quality in every product we prepare.",
    },
  ];

  return (
    <div className="page-container about-page">

      {/* HERO ABOUT SECTION */}
      <section className="about-section about-hero-section">
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
          <span className="eyebrow">ABOUT M & Y</span>

          <h2>Homemade Food That Feels Like Home</h2>

          <p>
            At M & Y Home Made Foods, we believe that the best food is made
            with care, quality ingredients and lots of love.
          </p>

          <p>
            Every product is freshly prepared to give you the taste and comfort
            of authentic homemade food.
          </p>

          <p>
            From healthy laddus to delicious chocolates and special treats,
            every order is made especially for you.
          </p>

          <Link to="/contact" className="primary-btn">
            <MessageCircle size={20} />
            Contact Us
          </Link>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="about-story-content">
          <span className="eyebrow">OUR STORY</span>

          <h2>Good Food Brings People Together</h2>

          <p>
            M & Y Home Made Foods was created with a simple idea — to share
            delicious homemade food that reminds you of the comfort and warmth
            of home.
          </p>

          <p>
            We believe that food prepared with care tastes better. That's why
            every order receives the same attention, freshness and love that we
            would give to food prepared for our own family.
          </p>
        </div>

        <div className="story-highlight">
          <div className="story-highlight-icon">
            <Heart size={42} fill="currentColor" />
          </div>

          <h3>Made Especially For You</h3>

          <p>
            Fresh ingredients, homemade recipes and lots of love in every bite.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="values-heading">
          <span className="eyebrow">WHY CHOOSE US</span>

          <h2>The Homemade Difference</h2>

          <p>
            Simple ingredients, authentic taste and food prepared with care.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <div className="value-card" key={value.title}>
              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="about-promise">
        <div className="promise-icon">
          <Gift size={45} />
        </div>

        <div className="promise-content">
          <span className="eyebrow light">
            OUR PROMISE
          </span>

          <h2>Freshly Made. Especially For You.</h2>

          <p>
            Whether you are ordering for yourself, your family, a celebration
            or a special occasion, we prepare every order with the same care
            and love.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <span className="eyebrow">
          READY TO ORDER?
        </span>

        <h2>Something Delicious Is Waiting For You</h2>

        <p>
          Explore our homemade collection and find your favourite treat.
        </p>

        <div className="about-cta-buttons">
          <Link to="/products" className="primary-btn">
            Explore Products
            <ArrowRight size={19} />
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;
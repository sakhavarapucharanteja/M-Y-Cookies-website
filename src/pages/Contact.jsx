import {
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";

const whatsappNumber = "918341921521";

function Contact() {
  const openWhatsApp = () => {
    const message =
      "Hi M & Y Home Made Foods! 👋 I would like to know more about your homemade products.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="page-container">
      <section className="contact-section">
        <div>
          <span className="eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            Ready For Something Delicious? 🍪
          </h2>

          <p>
            Message us on WhatsApp to place your
            order or enquire about custom and
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

          <div className="contact-location">
            <MapPin size={20} />
            Hyderabad, India
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
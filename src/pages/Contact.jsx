
import {
  MessageCircle,
  Phone,
  MapPin,
  Send,
  User,
  Mail,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

const phoneNumber = "+918341921521";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxLf7y7E9-JB-w58qce3LI11mhx_ZETio3w8x_yHS0p7gTBcEUTsdbCtuUsB6PANzMocA/exec";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiry: "General Enquiry",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const pendingRequestRef = useRef(null);

  // Handle response from Google Apps Script
  useEffect(() => {
    const handleResponse = (event) => {
      const pending = pendingRequestRef.current;

      if (!pending) {
        return;
      }

      const response = event.data;

      if (
        response?.type !== "MY_ENQUIRY_SUCCESS" &&
        response?.type !== "MY_ENQUIRY_ERROR"
      ) {
        return;
      }

      clearTimeout(pending.timeoutId);

      pending.form.remove();
      pending.iframe.remove();

      pendingRequestRef.current = null;
      setSubmitting(false);

      if (response.type === "MY_ENQUIRY_SUCCESS") {
        setStatus(
          "Thank you! Your enquiry has been submitted successfully. Please check your email for confirmation."
        );

        setStatusType("success");

        setFormData({
          name: "",
          phone: "",
          email: "",
          enquiry: "General Enquiry",
          message: "",
        });
      } else {
        setStatus(
          response.message ||
            "Unable to submit your enquiry. Please try again."
        );

        setStatusType("error");
      }
    };

    window.addEventListener("message", handleResponse);

    return () => {
      window.removeEventListener("message", handleResponse);

      if (pendingRequestRef.current) {
        clearTimeout(pendingRequestRef.current.timeoutId);
        pendingRequestRef.current.form.remove();
        pendingRequestRef.current.iframe.remove();
        pendingRequestRef.current = null;
      }
    };
  }, []);

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setStatus("");
    setStatusType("");
  };

  // Submit customer enquiry
  
const handleSubmit = async (e) => {
  e.preventDefault();

  setSubmitting(true);
  setStatus("Submitting your enquiry...");

  try {
    const fields = new URLSearchParams({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      enquiryType: formData.enquiry,
      message: formData.message,
    });

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: fields,
    });

    setStatus(
      "Thank you! Your enquiry has been submitted successfully. Please check your email for confirmation."
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      enquiry: "General Enquiry",
      message: "",
    });

  } catch (error) {
    console.error("Contact form error:", error);

    setStatus(
      "Unable to submit your enquiry. Please try again or contact us directly."
    );
  } finally {
    setSubmitting(false);
  }
};


  return (
    <main className="contact-page">

      {/* PAGE HEADER */}
      <section className="contact-page-header">
        <div className="contact-header-content">
          <span className="eyebrow">GET IN TOUCH</span>

          <h1>
            We'd Love To
            <span> Hear From You</span>
          </h1>

          <p>
            Have a question about our homemade products or want to place an
            order? Send us a message and we'll get back to you.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details-section">
        <div className="contact-details-grid">

          <a
            href={`tel:${phoneNumber}`}
            className="contact-detail-card"
          >
            <div className="contact-detail-icon">
              <Phone size={25} />
            </div>

            <div>
              <h3>Call Us</h3>
              <p>+91 83419 21521</p>
            </div>
          </a>

          <div className="contact-detail-card">
            <div className="contact-detail-icon">
              <MapPin size={25} />
            </div>

            <div>
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>
          </div>

          <div className="contact-detail-card">
            <div className="contact-detail-icon">
              <MessageCircle size={25} />
            </div>

            <div>
              <h3>Quick Enquiries</h3>
              <p>Fill the form below</p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <div className="contact-form-layout">

          {/* LEFT SIDE */}
          <div className="contact-form-content">
            <span className="eyebrow">
              SEND US A MESSAGE
            </span>

            <h2>
              Let's Make Something
              <span> Delicious Together</span>
            </h2>

            <p>
              Whether you're looking for healthy laddus, homemade sweets,
              chocolates, special gifts, or bulk orders, we'd be happy to
              help.
            </p>

            <div className="contact-form-points">

              <div>
                <span>✓</span>
                Fresh homemade products
              </div>

              <div>
                <span>✓</span>
                Custom and bulk orders
              </div>

              <div>
                <span>✓</span>
                Special occasion treats
              </div>

            </div>
          </div>

          {/* FORM */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Your Name *
                </label>

                <div className="input-wrapper">
                  <User size={18} />

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number *
                </label>

                <div className="input-wrapper">
                  <Phone size={18} />

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="email">
                  Email Address *
                </label>

                <div className="input-wrapper">
                  <Mail size={18} />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry">
                  Enquiry Type
                </label>

                <select
                  id="enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                >
                  <option>General Enquiry</option>
                  <option>Product Enquiry</option>
                  <option>Place an Order</option>
                  <option>Bulk Order</option>
                  <option>Custom Order</option>
                  <option>Festival Order</option>
                </select>
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="message">
                Your Message *
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us what you are looking for..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* STATUS MESSAGE */}
            {status && (
              <div
                className={`form-status ${
                  submitting ? "loading" : "success"
                }`}
                role="status"
              >
                {status}
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="contact-submit-btn"
              disabled={submitting}
            >
              <Send size={20} />
              {submitting ? "Submitting..." : "Send Enquiry"}
            </button>

          </form>

        </div>
      </section>

    </main>
  );
}

export default Contact;

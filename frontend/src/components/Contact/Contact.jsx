import { useState } from "react";
import api from "../../services/api";
import "./Contact.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (status) {
      setStatus("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("contact/", formData);

      setStatus("✅ Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>

        </div>

        <div className="contact-wrapper">

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="7"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Send Message
            </button>

            {status && <p className="status">{status}</p>}

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
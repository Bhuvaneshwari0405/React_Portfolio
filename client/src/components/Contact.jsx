import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/send-email", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      alert("Failed to send message.");
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 text-center color-primary">Contact Me</h2>
        <div className="row">
          {/* Left Side - Contact Details */}
          <div className="col-md-5 mb-4">
            <div className="contact-card p-4 shadow-sm text-center h-100">
              <h2 className="section-title mb-3">Get in Touch</h2>
              <p className="mb-3">You can reach me via:</p>
              <a
                href="mailto:bhuvanachinnaduri@gmail.com"
                className="d-block mb-3"
              >
                <i className="bi bi-envelope-fill me-2" />
                bhuvanachinnaduri@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/bhuvaneshwari-chinnadurai-50665a258/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary me-2 mb-2"
              >
                <i className="bi bi-linkedin me-1" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Bhuvaneshwari0405"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark mb-2"
              >
                <i className="bi bi-github me-1" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-md-7">
            <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control mb-3"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control mb-3"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control mb-3"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="form-control mb-3"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn btn-primary w-100">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

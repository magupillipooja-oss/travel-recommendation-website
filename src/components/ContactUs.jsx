import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* ── Navbar ─────────────────────────────────── */
        .navbar {
          background: linear-gradient(135deg, #0a3d62 0%, #1a6b9a 100%);
          padding: 0 2rem;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 12px rgba(0,0,0,0.25);
          font-family: 'Inter', sans-serif;
        }

        .navbar__brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }

        .navbar__site-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          color: #f0e6c8;
          letter-spacing: 0.02em;
        }

        .navbar__site-name span { color: #f4a916; }

        .navbar__links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }

        .navbar__links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: #c9dce8;
          text-decoration: none;
          padding: 0.4rem 0.9rem;
          border-radius: 6px;
          transition: background 0.2s, color 0.2s;
        }

        .navbar__links a:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }

        .navbar__links a.active {
          color: #f4a916;
          background: rgba(244,169,22,0.12);
        }

        /* ── Page ───────────────────────────────────── */
        .contact-page {
          position: relative;
          min-height: calc(100vh - 70px);
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .contact-page__bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }

        .contact-page__overlay {
          position: absolute;
          inset: 0;
          background: rgba(5, 25, 45, 0.65);
          z-index: 1;
        }

        /* ── Social icons ───────────────────────────── */
        .contact-page__socials {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          z-index: 3;
        }

        .contact-page__socials button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.08);
          color: #c9dce8;
          border: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .contact-page__socials button:hover {
          background: #f4a916;
          color: #0a3d62;
        }

        /* ── Content layout ─────────────────────────── */
        .contact-page__content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 3rem 3rem 3rem 5.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* ── Left: heading ──────────────────────────── */
        .contact-page__left {
          flex: 1;
        }

        .contact-page__title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.05;
          margin-bottom: 1rem;
        }

        .contact-page__subtitle {
          font-size: 1.1rem;
          color: #a8c8dc;
          font-weight: 400;
        }

        /* ── Right: form card ───────────────────────── */
        .contact-form-card {
          width: 100%;
          max-width: 400px;
          background: rgba(5, 25, 45, 0.7);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 2rem;
          backdrop-filter: blur(8px);
          flex-shrink: 0;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          font-size: 0.88rem;
          font-weight: 500;
          color: #c9dce8;
          margin-bottom: 0.45rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.65rem 0.9rem;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.18);
          border-radius: 8px;
          color: #ffffff;
          font-size: 0.9rem;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          resize: none;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #6a94ae;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #f4a916;
          background: rgba(255,255,255,0.12);
        }

        .form-group textarea {
          height: 110px;
        }

        .btn-submit {
          width: 100%;
          padding: 0.75rem;
          background: #1a7a6a;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          letter-spacing: 0.03em;
          transition: background 0.2s, transform 0.1s;
          margin-top: 0.25rem;
        }

        .btn-submit:hover { background: #15695b; }
        .btn-submit:active { transform: scale(0.98); }

        /* ── Success message ────────────────────────── */
        .success-msg {
          text-align: center;
          padding: 1.5rem 0;
        }

        .success-msg__icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .success-msg h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .success-msg p {
          font-size: 0.88rem;
          color: #a8c8dc;
          margin-bottom: 1.25rem;
        }

        .btn-back {
          padding: 0.55rem 1.5rem;
          background: transparent;
          color: #c9dce8;
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-back:hover { background: rgba(255,255,255,0.1); }
      `}</style>

      {/* ── Navbar ── */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <Link to="/" className="navbar__brand" aria-label="TravelBloom Home">
          <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="18" cy="18" r="17" stroke="#f4a916" strokeWidth="1.5" fill="rgba(244,169,22,0.08)"/>
            <polygon points="18,5 21,17 18,15 15,17" fill="#f4a916"/>
            <polygon points="18,31 15,19 18,21 21,19" fill="#c9dce8" opacity="0.7"/>
            <polygon points="5,18 17,15 15,18 17,21" fill="#c9dce8" opacity="0.7"/>
            <polygon points="31,18 19,21 21,18 19,15" fill="#f4a916" opacity="0.6"/>
            <circle cx="18" cy="18" r="2.5" fill="#f4a916"/>
          </svg>
          <span className="navbar__site-name">Travel<span>Bloom</span></span>
        </Link>

        <ul className="navbar__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact" className="active">Contact Us</Link></li>
        </ul>
      </nav>

      {/* ── Page body ── */}
      <div className="contact-page">
        <div className="contact-page__bg" role="img" aria-label="Aerial city view" />
        <div className="contact-page__overlay" />

        {/* Social icons */}
        <div className="contact-page__socials" aria-label="Social media links">
          <button aria-label="Twitter">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
          </button>
          <button aria-label="Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </button>
          <button aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </button>
          <button aria-label="YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          </button>
        </div>

        {/* Main content */}
        <div className="contact-page__content">

          {/* Left: title */}
          <div className="contact-page__left">
            <h1 className="contact-page__title">Contact<br />Us</h1>
            <p className="contact-page__subtitle">Get in touch</p>
          </div>

          {/* Right: form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="success-msg">
                <div className="success-msg__icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you soon.</p>
                <button className="btn-back" onClick={handleReset}>Send another message</button>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn-submit" onClick={handleSubmit}>
                  Submit
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

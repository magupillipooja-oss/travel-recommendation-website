import {Link} from 'react-router-dom';

export default function AboutUs() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      description: "John is responsible for overall company strategy and vision.",
    },
    {
      name: "Celina Thomas",
      role: "Team Lead",
      description: "Celina leads the technical and operations team.",
    },
    {
      name: "Mike Tyson",
      role: "Delivery Head",
      description: "Mike manages project delivery and client relationships.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* ── Navbar ────────────────────────────────── */
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
          flex-shrink: 0;
        }

        .navbar__site-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          color: #f0e6c8;
          letter-spacing: 0.02em;
        }

        .navbar__site-name span {
          color: #f4a916;
        }

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

        /* ── Page wrapper ──────────────────────────── */
        .about-page {
          position: relative;
          min-height: calc(100vh - 70px);
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        /* ── Background image ──────────────────────── */
        .about-page__bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }

        .about-page__overlay {
          position: absolute;
          inset: 0;
          background: rgba(5, 25, 45, 0.72);
          z-index: 1;
        }

        /* ── Social icons ──────────────────────────── */
        .about-page__socials {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          z-index: 3;
        }

        .about-page__socials button {
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

        .about-page__socials button:hover {
          background: #f4a916;
          color: #0a3d62;
        }

        /* ── Content ───────────────────────────────── */
        .about-page__content {
          position: relative;
          z-index: 2;
          padding: 3.5rem 3.5rem 5rem 5.5rem;
        }

        /* ── About Us section ──────────────────────── */
        .about-section__title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .about-section__text {
          background: rgba(5, 25, 45, 0.5);
          border-left: 3px solid #f4a916;
          border-radius: 0 8px 8px 0;
          padding: 1.5rem 1.75rem;
          max-width: 900px;
          margin-bottom: 4rem;
        }

        .about-section__text p {
          font-size: 0.97rem;
          line-height: 1.8;
          color: #c4d9e8;
          margin-bottom: 0.6rem;
        }

        .about-section__text p:last-child {
          margin-bottom: 0;
        }

        /* ── Team section ──────────────────────────── */
        .team-section {
          display: flex;
          align-items: flex-start;
          gap: 3rem;
          background: rgba(5, 25, 45, 0.5);
          border-radius: 12px;
          padding: 2.5rem 2rem 2.5rem 2.5rem;
          max-width: 1000px;
        }

        .team-section__heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          flex-shrink: 0;
          min-width: 160px;
        }

        .team-section__members {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          flex: 1;
        }

        /* ── Team card ─────────────────────────────── */
        .team-card {
          flex: 1;
          min-width: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.6rem;
        }

        .team-card__avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #1a6b9a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c9dce8;
          border: 2px solid rgba(255,255,255,0.2);
        }

        .team-card__name {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
        }

        .team-card__desc {
          font-size: 0.82rem;
          line-height: 1.55;
          color: #a8c8dc;
        }

        .team-card__badge {
          margin-top: 0.25rem;
          padding: 0.3rem 1.1rem;
          background: #1a6b9a;
          color: #e0eef7;
          font-size: 0.78rem;
          font-weight: 500;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.15);
        }
      `}</style>

      {/* ── Navbar (no search bar) ── */}
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
          <li><Link to="/about" className="active">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* ── Page body ── */}
      <div className="about-page">
        <div className="about-page__bg" role="img" aria-label="Aerial view of a travel destination" />
        <div className="about-page__overlay" />

        {/* Social icons */}
        <div className="about-page__socials" aria-label="Social media links">
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
        <div className="about-page__content">

          {/* About Us section */}
          <h1 className="about-section__title">About Us</h1>
          <div className="about-section__text">
            <p>Welcome to Our Company! We are a team of passionate individuals dedicated to providing excellent services and products to our customers. Our mission is to provide the best experience for people traveling to different destinations around the world.</p>
            <p>Our values include integrity, innovation, customer satisfaction, and teamwork. We believe in putting our customers first and working together to achieve our goals.</p>
            <p>Feel free to explore our website to learn more about what we offer!</p>
          </div>

          {/* Team section */}
          <div className="team-section">
            <h2 className="team-section__heading">Our<br />Team</h2>
            <div className="team-section__members">
              {teamMembers.map((member) => (
                <div className="team-card" key={member.name}>
                  <div className="team-card__avatar" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                  </div>
                  <div className="team-card__name">{member.name}</div>
                  <div className="team-card__desc">{member.description}</div>
                  <div className="team-card__badge">{member.role}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

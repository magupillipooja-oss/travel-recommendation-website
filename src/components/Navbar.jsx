import { Link } from "react-router-dom";

export default function Navbar({ searchQuery, setSearchQuery, onSearch, onClear }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter:wght@400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          background: linear-gradient(135deg, #0a3d62 0%, #1a6b9a 100%);
          padding: 0 2rem;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.25);
          font-family: 'Inter', sans-serif;
        }

        /* ── Logo ─────────────────────────────────────── */
        .navbar__brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar__logo {
          width: 36px;
          height: 36px;
        }

        .navbar__site-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          color: #f0e6c8;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .navbar__site-name span {
          color: #f4a916;
        }

        /* ── Nav links ────────────────────────────────── */
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          flex-shrink: 0;
        }

        .navbar__links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: #c9dce8;
          text-decoration: none;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }

        .navbar__links a:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }

        .navbar__links a.active {
          color: #f4a916;
          background: rgba(244,169,22,0.12);
        }

        /* ── Search ───────────────────────────────────── */
        .navbar__search {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          max-width: 380px;
        }

        .navbar__search-input-wrap {
          position: relative;
          flex: 1;
        }

        .navbar__search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #8ab4cc;
          pointer-events: none;
        }

        .navbar__search input {
          width: 100%;
          padding: 0.45rem 0.75rem 0.45rem 2.1rem;
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: 8px;
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-size: 0.875rem;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }

        .navbar__search input::placeholder {
          color: #8ab4cc;
        }

        .navbar__search input:focus {
          border-color: #f4a916;
          background: rgba(255,255,255,0.15);
        }

        .btn {
          padding: 0.45rem 1rem;
          border: none;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.1s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .btn:active {
          transform: scale(0.97);
        }

        .btn-search {
          background: #f4a916;
          color: #0a3d62;
        }

        .btn-search:hover {
          opacity: 0.88;
        }

        .btn-reset {
          background: rgba(255,255,255,0.12);
          color: #c9dce8;
          border: 1.5px solid rgba(255,255,255,0.2);
        }

        .btn-reset:hover {
          background: rgba(255,255,255,0.2);
          color: #fff;
        }
      `}</style>

      <nav className="navbar" role="navigation" aria-label="Main navigation">

        {/* Logo + Site name */}
        <Link to="/" className="navbar__brand" aria-label="WanderScape Home">
          {/* Inline SVG compass-rose logo */}
          <svg className="navbar__logo" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="18" cy="18" r="17" stroke="#f4a916" strokeWidth="1.5" fill="rgba(244,169,22,0.08)"/>
            <polygon points="18,5 21,17 18,15 15,17" fill="#f4a916"/>
            <polygon points="18,31 15,19 18,21 21,19" fill="#c9dce8" opacity="0.7"/>
            <polygon points="5,18 17,15 15,18 17,21" fill="#c9dce8" opacity="0.7"/>
            <polygon points="31,18 19,21 21,18 19,15" fill="#f4a916" opacity="0.6"/>
            <circle cx="18" cy="18" r="2.5" fill="#f4a916"/>
          </svg>
          <span className="navbar__site-name">Travel<span>Bloom</span></span>
        </Link>

        {/* Nav links */}
        <ul className="navbar__links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Search bar + buttons */}
        <div className="navbar__search" role="search">
          <div className="navbar__search-input-wrap">
            <svg className="navbar__search-icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
            </svg>
            <input
              type="text"
              placeholder="Search destinations…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Search destinations"
            />
          </div>
          <button className="btn btn-search" onClick={onSearch} aria-label="Search">
            Search
          </button>
          <button className="btn btn-reset" onClick={onClear} aria-label="Clear search">
            Clear
          </button>
        </div>

      </nav>
    </>
  );
}

import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function HomePage() {
  const [travelData, setTravelData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  // Fetch JSON data when the page loads
  useEffect(() => {
    fetch("/travel_recommendation_api.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Travel data loaded:", data);
        setTravelData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = () => {
    if (!travelData || searchQuery.trim() === "") return;

    // Convert to lowercase for case-insensitive matching
    const keyword = searchQuery.trim().toLowerCase();

    let matches = [];

    // Match beaches — handles "beach", "beaches", "Beach", "BEACH" etc.
    if (keyword === "beach" || keyword === "beaches") {
      matches = travelData.beaches;
    }
    // Match temples — handles "temple", "temples" etc.
    else if (keyword === "temple" || keyword === "temples") {
      matches = travelData.temples;
    }
    // Match countries or city names
    else {
      travelData.countries.forEach((country) => {
        // Match by country name e.g. "japan", "australia"
        if (country.name.toLowerCase().includes(keyword)) {
          matches = [...matches, ...country.cities];
        } else {
          // Match by city name e.g. "tokyo", "sydney"
          country.cities.forEach((city) => {
            if (city.name.toLowerCase().includes(keyword)) {
              matches.push(city);
            }
          });
        }
      });
    }

    setResults(matches);
    setSearched(true);
  };

  const handleClear = () => {
    setSearchQuery("");
    setResults([]);
    setSearched(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500&display=swap');

        .hero {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 70px);
          display: flex;
          align-items: center;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(5, 25, 45, 0.82) 0%,
            rgba(5, 25, 45, 0.55) 55%,
            rgba(5, 25, 45, 0.15) 100%
          );
          z-index: 1;
        }

        .hero__socials {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0;
          z-index: 3;
        }

        .hero__socials button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.08);
          color: #c9dce8;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.2s, color 0.2s;
        }

        .hero__socials button:hover {
          background: #f4a916;
          color: #0a3d62;
        }

        .hero__content {
          position: relative;
          z-index: 2;
          padding: 4rem 4rem 4rem 5rem;
          max-width: 680px;
        }

        .hero__eyebrow {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f4a916;
          margin-bottom: 1rem;
        }

        .hero__title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.1;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .hero__title em {
          font-style: normal;
          color: #f4a916;
        }

        .hero__desc {
          font-size: 1rem;
          line-height: 1.75;
          color: #c4d9e8;
          max-width: 520px;
          margin-bottom: 2.25rem;
          background: rgba(5, 25, 45, 0.45);
          padding: 1.1rem 1.3rem;
          border-left: 3px solid #f4a916;
          border-radius: 0 6px 6px 0;
        }

        .hero__actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 0.7rem 1.75rem;
          background: #f4a916;
          color: #0a3d62;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: opacity 0.2s, transform 0.1s;
        }

        .btn-primary:hover { opacity: 0.88; }
        .btn-primary:active { transform: scale(0.97); }

        .btn-secondary {
          padding: 0.68rem 1.5rem;
          background: transparent;
          color: #e0eef7;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.6);
        }

        .hero__stats {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          display: flex;
          background: rgba(5, 25, 45, 0.75);
          backdrop-filter: blur(6px);
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .hero__stat {
          flex: 1;
          padding: 1.1rem 1.5rem;
          border-right: 1px solid rgba(255,255,255,0.08);
          text-align: center;
        }

        .hero__stat:last-child { border-right: none; }

        .hero__stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #f4a916;
        }

        .hero__stat-label {
          font-size: 0.75rem;
          color: #8ab4cc;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ── Results section (overlay on hero) ── */
        .results-overlay {
          position: relative;
          z-index: 2;
          padding: 2.5rem 4rem 4rem 5rem;
          width: 100%;
        }

        .results-overlay__title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 800;
          color: #f4a916;
          margin-bottom: 1.75rem;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 320px));
          gap: 1.75rem;
        }

        .result-card {
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .result-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.35);
        }

        .result-card__img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
        }

        .result-card__body {
          padding: 1rem 1.25rem 1.4rem;
        }

        .result-card__name {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0a3d62;
          text-decoration: underline;
          margin-bottom: 0.6rem;
        }

        .result-card__desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #1a3a52;
          text-align: center;
        }

        .no-results {
          color: #f0e6c8;
          font-size: 1rem;
          background: rgba(5, 25, 45, 0.55);
          padding: 1rem 1.3rem;
          border-radius: 8px;
          display: inline-block;
        }
      `}</style>

      {/* Navbar — receives search state and handlers as props */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      {/* Hero section */}
      <section className="hero" aria-label="Hero section">
        <div className="hero__bg" role="img" aria-label="Aerial view of a travel destination" />
        <div className="hero__overlay" />

        <div className="hero__socials" aria-label="Social media links">
          <button aria-label="Twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
          </button>
          <button aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </button>
          <button aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </button>
          <button aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          </button>
        </div>

        {searched ? (
          /* ── Search Results overlay ── */
          <div className="results-overlay">
            <h2 className="results-overlay__title">Search Results</h2>
            {results.length > 0 ? (
              <div className="results-grid">
                {results.map((place) => (
                  <div className="result-card" key={place.id}>
                    <img
                      className="result-card__img"
                      src={place.imageUrl}
                      alt={place.name}
                    />
                    <div className="result-card__body">
                      <div className="result-card__name">
                        {place.name}{place.country ? `, ${place.country}` : ""}
                      </div>
                      <p className="result-card__desc">{place.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-results">
                No results found for "<strong>{searchQuery}</strong>". Try searching for "beach", "temple", "Japan", or "Sydney".
              </p>
            )}
          </div>
        ) : (
          /* ── Default hero content ── */
          <>
            <div className="hero__content">
              <p className="hero__eyebrow">Your next adventure starts here</p>
              <h1 className="hero__title">
                Explore <em>Dream</em><br />Destinations
              </h1>
              <p className="hero__desc">
                The Travel Recommendation App helps you explore popular travel destinations
                through an interactive and user-friendly interface. Search for beaches, temples,
                countries, or specific city names to view destinations along with images and
                descriptions. Discover and plan your next journey with ease.
              </p>
              <div className="hero__actions">
                <button className="btn-primary">Book Now</button>
                <button className="btn-secondary">Explore Destinations</button>
              </div>
            </div>

            <div className="hero__stats" aria-label="Website highlights">
              <div className="hero__stat">
                <div className="hero__stat-number">500+</div>
                <div className="hero__stat-label">Destinations</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">120+</div>
                <div className="hero__stat-label">Countries</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">50K+</div>
                <div className="hero__stat-label">Happy Travellers</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">4.9★</div>
                <div className="hero__stat-label">User Rating</div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

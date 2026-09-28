import { Link, useParams } from "react-router-dom";
import countries from "../data/data.js";
import "./CountryDetails.css";

function CountryDetails() {
  const { code } = useParams();

  const country = countries.find(
    (item) => item.code === code
  );

  if (!country) {
    return (
      <div className="country-not-found">
        <div>
          <span>404</span>
          <h1>Country Not Found</h1>
          <p>
            We couldn't find the country you're looking for.
          </p>

          <Link to="/explore" className="back-button">
            ← Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="country-details-page">

      {/* NAVBAR */}
      <nav className="details-navbar">
        <Link to="/" className="details-logo">
          GLOBAL<span>DATA</span>
        </Link>

        <div className="details-nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/explore" className="active">
            Explore
          </Link>
          <Link to="/charts">Charts</Link>
          <Link to="/d3">D3 Visuals</Link>
        </div>
      </nav>


      {/* MAIN CONTENT */}
      <main className="country-details-container">

        {/* BACK */}
        <Link to="/explore" className="back-link">
          ← Back to Countries
        </Link>


        {/* COUNTRY HERO */}
        <section className="country-hero">

          <div className="country-symbol">
            {country.name.charAt(0)}
          </div>

          <div className="country-heading">

            <div className="country-code">
              {country.code}
            </div>

            <h1>{country.name}</h1>

            <p>
              Explore important information and
              statistics about {country.name}.
            </p>

          </div>

        </section>


        {/* STAT CARDS */}
        <section className="country-stats">

          <div className="detail-card">
            <span className="detail-label">
              POPULATION
            </span>

            <strong>{country.population}</strong>

            <small>
              Estimated population
            </small>
          </div>


          <div className="detail-card">
            <span className="detail-label">
              CAPITAL
            </span>

            <strong>{country.capital}</strong>

            <small>
              Administrative capital
            </small>
          </div>


          <div className="detail-card">
            <span className="detail-label">
              AREA
            </span>

            <strong>{country.area}</strong>

            <small>
              Total land area
            </small>
          </div>


          <div className="detail-card">
            <span className="detail-label">
              REGION
            </span>

            <strong>{country.region}</strong>

            <small>
              World region
            </small>
          </div>

        </section>


        {/* INFORMATION */}
        <section className="information-section">

          <div className="section-heading">
            <span>COUNTRY INFORMATION</span>

            <h2>
              Quick facts about {country.name}
            </h2>
          </div>


          <div className="facts-grid">

            <div className="fact-box">
              <span>COUNTRY CODE</span>
              <strong>{country.code}</strong>
            </div>

            <div className="fact-box">
              <span>CAPITAL CITY</span>
              <strong>{country.capital}</strong>
            </div>

            <div className="fact-box">
              <span>REGION</span>
              <strong>{country.region}</strong>
            </div>

            <div className="fact-box">
              <span>CURRENCY</span>
              <strong>{country.currency}</strong>
            </div>

          </div>

        </section>


        {/* DATA VISUALIZATION CTA */}
        <section className="country-cta">

          <div>
            <span>DATA VISUALIZATION</span>

            <h2>
              See the numbers visually.
            </h2>

            <p>
              Explore global trends, comparisons and
              statistics using interactive charts.
            </p>
          </div>

          <Link to="/charts" className="charts-button">
            Explore Charts →
          </Link>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="details-footer">
        <div>
          <strong>GLOBAL DATA EXPLORER</strong>
          <p>
            Explore the world through data.
          </p>
        </div>

        <span>
          © 2026 Global Data Explorer
        </span>
      </footer>

    </div>
  );
}

export default CountryDetails;
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background effects */}
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <p className="hero-eyebrow">
            INTERACTIVE DATA VISUALIZATION
          </p>

          <h1 className="hero-title">
            <span>GLOBAL</span>
            <span>DATA</span>
            <span>EXPLORER</span>
          </h1>

          <p className="hero-tagline">
            Explore the world <span>through data.</span>
          </p>

          <p className="hero-description">
            Discover global trends, compare countries,
            explore interactive visualizations, and turn
            complex data into meaningful insights.
          </p>

          <div className="hero-actions">

            <Link
              to="/data"
              className="hero-btn hero-btn-primary"
            >
              Explore Data
              <span>↗</span>
            </Link>

            <Link
              to="/charts"
              className="hero-btn hero-btn-secondary"
            >
              View Insights
              <span>↓</span>
            </Link>

          </div>

          <div className="hero-tech">
            <span>REACT</span>
            <span>THREE.JS</span>
            <span>D3.JS</span>
            <span>CHART.JS</span>
          </div>

        </div>


        {/* RIGHT SIDE VISUAL */}
        <div className="hero-visual">

          <div className="visual-label">
            <span className="status-dot"></span>
            LIVE VISUALIZATION
          </div>

          <div className="visual-card">

            <div className="visual-ring ring-one"></div>
            <div className="visual-ring ring-two"></div>
            <div className="visual-ring ring-three"></div>

            <div className="visual-globe">
              <div className="globe-inner">
                GLOBAL
              </div>
            </div>

            <div className="data-point point-one"></div>
            <div className="data-point point-two"></div>
            <div className="data-point point-three"></div>

            <div className="visual-stat stat-one">
              <strong>195</strong>
              <span>COUNTRIES</span>
            </div>

            <div className="visual-stat stat-two">
              <strong>7</strong>
              <span>CONTINENTS</span>
            </div>

          </div>

          <p className="visual-caption">
            INTERACTIVE GLOBAL DATA SYSTEM
          </p>

        </div>

      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line"></span>
      </div>

    </section>
  );
}

export default Hero;
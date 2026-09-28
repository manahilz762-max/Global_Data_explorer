import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 6500);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 9000);

    const navTimer = setTimeout(() => {
      setShowNav(true);
    }, 9500);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(contentTimer);
      clearTimeout(navTimer);
    };
  }, []);

  return (
    <div className="home">

      {/* ================= NAVBAR ================= */}

      <nav className={`home-navbar ${showNav ? "nav-visible" : ""}`}>

        <Link to="/" className="logo">
          <span>G</span>LOBAL DATA EXPLORER
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/charts">Charts</Link>
          <Link to="/globe">3D Globe</Link>
          <Link to="/d3">D3 Visuals</Link>
          <Link to="/settings">Settings</Link>
        </div>

      </nav>


      {/* ================= CINEMATIC HERO ================= */}

      <section className="space-scene">

        {/* Stars */}
        <div className="stars stars-one"></div>
        <div className="stars stars-two"></div>
        <div className="stars stars-three"></div>

        {/* Shooting stars */}
        <div className="shooting-star shooting-one"></div>
        <div className="shooting-star shooting-two"></div>
        <div className="shooting-star shooting-three"></div>


        {/* Sun */}
        <div className="sun"></div>


        {/* Earth */}
        <div className="earth">

          <div className="earth-atmosphere"></div>

          <div className="earth-glow"></div>

          <div className="earth-land land-one"></div>
          <div className="earth-land land-two"></div>
          <div className="earth-land land-three"></div>
          <div className="earth-land land-four"></div>

          <div className="earth-cloud cloud-one"></div>
          <div className="earth-cloud cloud-two"></div>
          <div className="earth-cloud cloud-three"></div>

        </div>


        {/* Data network */}

        <div className="data-network">

          <span className="data-point point-one"></span>
          <span className="data-point point-two"></span>
          <span className="data-point point-three"></span>
          <span className="data-point point-four"></span>
          <span className="data-point point-five"></span>
          <span className="data-point point-six"></span>

          <div className="connection line-one"></div>
          <div className="connection line-two"></div>
          <div className="connection line-three"></div>
          <div className="connection line-four"></div>
          <div className="connection line-five"></div>

        </div>


        {/* Digital rings */}

        <div className="digital-ring ring-one"></div>
        <div className="digital-ring ring-two"></div>
        <div className="digital-ring ring-three"></div>


        {/* Cinematic darkness */}

        <div className="cinematic-overlay"></div>


        {/* ================= TITLE ================= */}

        <div className={`hero-title ${showTitle ? "title-visible" : ""}`}>

          <div className="small-title">
            DISCOVER • UNDERSTAND • EXPLORE
          </div>

          <h1>
            <span>GLOBAL</span>

            <span className="data-word">
              DATA
            </span>

            <span>EXPLORER</span>
          </h1>

          <div className="title-line"></div>

          <div className="title-subtitle">
            TURNING THE WORLD'S DATA INTO A VISUAL EXPERIENCE
          </div>

        </div>


        {/* ================= HERO CONTENT ================= */}

        <div className={`hero-content ${showContent ? "content-visible" : ""}`}>

          <p>
            Explore countries, populations, regions, trends and
            global statistics through interactive data visualization.
          </p>

          <div className="hero-buttons">

            <Link
              to="/dashboard"
              className="primary-button"
            >
              Explore Dashboard
              <span>→</span>
            </Link>

            <Link
              to="/explore"
              className="secondary-button"
            >
              Explore Countries
            </Link>

          </div>

        </div>


        {/* Bottom indicator */}

        <div
          className={`explore-indicator ${
            showContent ? "indicator-visible" : ""
          }`}
        >
          <br /> <br />
           <br /> <br />
          <span></span>

         

          <span></span>
        </div>

      </section>


      {/* ================= GLOBAL DATA SECTION ================= */}

      <section className="global-data-section">

        <div className="section-label">
          GLOBAL SNAPSHOT
        </div>

        <h2>
          The world,
          <span> explained through data.</span>
        </h2>

        <p className="section-description">
          Global Data Explorer brings important information about
          our planet together and transforms it into interactive,
          understandable visualizations.
        </p>


        <div className="global-stats">

          <div className="global-stat">
            <strong>195</strong>
            <span>Countries</span>
            <small>Recognized countries explored</small>
          </div>

          <div className="global-stat">
            <strong>8.2B</strong>
            <span>World Population</span>
            <small>People across the planet</small>
          </div>

          <div className="global-stat">
            <strong>7</strong>
            <span>Continents</span>
            <small>From Asia to Antarctica</small>
          </div>

          <div className="global-stat">
            <strong>6+</strong>
            <span>Visualizations</span>
            <small>Interactive data experiences</small>
          </div>

        </div>


        {/* Feature cards */}

        <div className="intro-cards">

          <div className="intro-card">

            <div className="card-number">
              01
            </div>

            <h3>
              Explore
            </h3>

            <p>
              Search countries and discover population,
              region and other important information.
            </p>

          </div>


          <div className="intro-card">

            <div className="card-number">
              02
            </div>

            <h3>
              Visualize
            </h3>

            <p>
              Turn numbers into beautiful charts that
              make patterns and comparisons easier to see.
            </p>

          </div>


          <div className="intro-card">

            <div className="card-number">
              03
            </div>

            <h3>
              Discover
            </h3>

            <p>
              Explore relationships, trends and insights
              hidden inside global datasets.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="home-footer">

        <div className="footer-main">

          <div className="footer-brand">

            <h3>
              GLOBAL DATA EXPLORER
            </h3>
            <br />
            <br />
            <p>
              Explore the world through data,
              visualization and technology.
            </p>

          </div>


          <div className="footer-column">

            <h4>
              TECHNOLOGIES
            </h4>

            <span>React</span>
            <span>Three.js</span>
            <span>Chart.js</span>
            <span>D3.js</span>
            <span>JavaScript</span>

          </div>


          <div className="footer-column">

            <h4>
              PROJECT DATA
            </h4>

            <span>195 Countries</span>
            <span>7 Continents</span>
            <span>Population Data</span>
            <span>Country Comparisons</span>
            <span>Interactive Visualizations</span>

          </div>


          <div className="footer-column">

            <h4>
              EXPLORE
            </h4>

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/explore">
              Countries
            </Link>

            <Link to="/charts">
              Charts
            </Link>

            <Link to="/globe">
              3D Globe
            </Link>

            <Link to="/d3">
              D3 Visuals
            </Link>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Global Data Explorer
          </span>

          <span>
            Built for interactive global data exploration
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Home;
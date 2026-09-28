
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <p className="footer-label">
            GLOBAL DATA SYSTEM
          </p>

          <h2>
            GLOBAL DATA
            <span>EXPLORER</span>
          </h2>

          <p>
            Explore the world through data,
            visualizations, trends, and insights.
          </p>
        </div>


        {/* NAVIGATION */}
        <div className="footer-column">
          <h3>EXPLORE</h3>

          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/data">Data</Link>
          <Link to="/explore">Countries</Link>
        </div>


        {/* VISUALIZATIONS */}
        <div className="footer-column">
          <h3>VISUALIZATIONS</h3>

          <Link to="/charts">Charts</Link>
          <Link to="/3d">3D Explorer</Link>
          <Link to="/d3">D3 Visualization</Link>
        </div>


        {/* TECHNOLOGIES */}
        <div className="footer-column">
          <h3>BUILT WITH</h3>

          <span>React</span>
          <span>Three.js</span>
          <span>D3.js</span>
          <span>Chart.js</span>
        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 Global Data Explorer
        </span>

        <span>
          INTERACTIVE DATA VISUALIZATION
        </span>

      </div>

    </footer>
  );
}

export default Footer;



import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

import GlobeModel from "../components/GlobeModel";
import "./Globe.css";

function Globe() {
  return (
    <div className="globe-page">

      {/* ================= NAVBAR ================= */}

      <nav className="globe-navbar">

        <Link to="/" className="globe-logo">

          <span className="globe-logo-icon">
            GD
          </span>

          <div className="globe-logo-text">
            <span>GLOBAL DATA</span>
            <strong>EXPLORER</strong>
          </div>

        </Link>


        <div className="globe-nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/explore">
            Explore
          </Link>

          <Link to="/charts">
            Charts
          </Link>

          <Link to="/d3">
            D3 Visuals
          </Link>

          <Link
            to="/globe"
            className="active"
          >
            3D Globe
          </Link>

          <Link to="/settings">
            Settings
          </Link>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="globe-hero">

        <div>

          <span className="globe-label">
            THREE.JS · INTERACTIVE DATA
          </span>

          <h1>
            Explore the
            <span> world.</span>
          </h1>

          <p>
            Discover countries and explore global
            data through an interactive 3D globe.
          </p>

        </div>


        <div className="globe-status">

          <span></span>

          LIVE 3D VISUALIZATION

        </div>

      </section>


      {/* ================= GLOBE ================= */}

      <section className="globe-section">

        <div className="globe-info-card">

          <div className="info-icon">
            ✦
          </div>

          <div>

            <strong>
              Interactive Globe
            </strong>

            <span>
              Explore countries through
              interactive data points.
            </span>

          </div>

        </div>


        <div className="globe-canvas">

          <Canvas
            camera={{
              position: [0, 0, 4.5],
              fov: 45
            }}
          >

            {/* SPACE */}

            <Stars
              radius={100}
              depth={50}
              count={2500}
              factor={3}
              saturation={0}
              fade
              speed={0.5}
            />


            {/* LIGHTING */}

            <ambientLight
              intensity={0.5}
            />

            <directionalLight
              position={[5, 5, 5]}
              intensity={2}
            />

            <pointLight
              position={[-4, -2, 4]}
              intensity={2}
              color="#00e5ff"
            />


            {/* EXISTING GLOBE */}

            <GlobeModel />


            {/* EXISTING CONTROLS */}

            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={3}
              maxDistance={7}
              autoRotate={false}
            />

          </Canvas>


          {/* =================
              ONLY TEXT BELOW GLOBE
          ================= */}

          <div className="globe-instruction">

            <div className="instruction-dot"></div>

            <span>
              EXPLORE THE WORLD
            </span>

            <span className="instruction-divider">
              •
            </span>

            <span>
              DISCOVER COUNTRY DATA
            </span>

            <span className="instruction-divider">
              •
            </span>

            <span>
              INTERACTIVE 3D EXPERIENCE
            </span>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="globe-features">

        <div className="feature-card">

          <div className="feature-number">
            01
          </div>

          <div>

            <h3>
              Explore
            </h3>

            <p>
              Explore different countries
              using the interactive globe.
            </p>

          </div>

        </div>


        <div className="feature-card">

          <div className="feature-number">
            02
          </div>

          <div>

            <h3>
              Discover
            </h3>

            <p>
              Hover over glowing points
              to discover country information.
            </p>

          </div>

        </div>


        <div className="feature-card">

          <div className="feature-number">
            03
          </div>

          <div>

            <h3>
              Understand
            </h3>

            <p>
              Turn global information into
              an interactive visual experience.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="globe-footer">

        <div className="footer-brand">

          <span className="globe-logo-icon">
            GD
          </span>

          <div>

            <strong>
              Global Data Explorer
            </strong>

            <span>
              Visualizing the world through data.
            </span>

          </div>

        </div>


        <p>
          © 2026 Global Data Explorer
        </p>

      </footer>

    </div>
  );
}

export default Globe;


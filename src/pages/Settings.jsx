import { useState } from "react";
import { Link } from "react-router-dom";
import "./Settings.css";

function Settings() {
  const [animations, setAnimations] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [defaultView, setDefaultView] = useState("dashboard");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const handleReset = () => {
    setAnimations(true);
    setAutoRotate(true);
    setDefaultView("dashboard");
    setSaved(false);
  };

  return (
    <div className="settings-page">

      {/* ================= NAVBAR ================= */}

      <nav className="settings-navbar">

        <Link to="/" className="settings-logo">
          <span className="settings-logo-icon">
            GD
          </span>

          <span className="settings-logo-text">
            Global Data
            <strong>Explorer</strong>
          </span>
        </Link>

        <div className="settings-nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/charts">Charts</Link>
          <Link to="/d3">D3 Visuals</Link>
          <Link to="/globe">3D Globe</Link>
          <Link
            to="/settings"
            className="active"
          >
            Settings
          </Link>
        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="settings-hero">

        <div className="settings-hero-content">

          <span className="settings-label">
            CONFIGURATION
          </span>

          <h1>
            Customize your
            <span> experience.</span>
          </h1>

          <p>
            Configure how Global Data Explorer
            displays data, animations, and
            visualizations.
          </p>

        </div>

        <div className="settings-status">
          <span></span>
          SETTINGS ACTIVE
        </div>

      </section>


      {/* ================= MAIN ================= */}

      <main className="settings-content">


        {/* ================= VISUALIZATION ================= */}

        <section className="settings-card">

          <div className="settings-card-header">

            <div className="settings-card-icon">
              ◈
            </div>

            <div>
              <h2>
                Visualization
              </h2>

              <p>
                Choose your preferred data
                visualization experience.
              </p>
            </div>

          </div>


          {/* DEFAULT VIEW */}

          <div className="setting-item">

            <div className="setting-text">

              <strong>
                Default View
              </strong>

              <span>
                Choose the page shown when
                exploring your data.
              </span>

            </div>

            <select
              value={defaultView}
              onChange={(event) =>
                setDefaultView(event.target.value)
              }
            >
              <option value="dashboard">
                Dashboard
              </option>

              <option value="charts">
                Charts
              </option>

              <option value="globe">
                3D Globe
              </option>

              <option value="d3">
                D3 Visuals
              </option>
            </select>

          </div>


          {/* ANIMATIONS */}

          <div className="setting-item">

            <div className="setting-text">

              <strong>
                Animations
              </strong>

              <span>
                Enable smooth transitions and
                visual effects.
              </span>

            </div>

            <button
              className={`toggle ${
                animations ? "on" : ""
              }`}
              onClick={() =>
                setAnimations(!animations)
              }
              aria-label="Toggle animations"
            >
              <span></span>
            </button>

          </div>


          {/* AUTO ROTATION */}

          <div className="setting-item">

            <div className="setting-text">

              <strong>
                Globe Auto Rotation
              </strong>

              <span>
                Automatically rotate the
                Three.js globe.
              </span>

            </div>

            <button
              className={`toggle ${
                autoRotate ? "on" : ""
              }`}
              onClick={() =>
                setAutoRotate(!autoRotate)
              }
              aria-label="Toggle globe rotation"
            >
              <span></span>
            </button>

          </div>

        </section>


        {/* ================= APPEARANCE ================= */}

        <section className="settings-card">

          <div className="settings-card-header">

            <div className="settings-card-icon">
              ◐
            </div>

            <div>
              <h2>
                Appearance
              </h2>

              <p>
                View the visual style of your
                explorer interface.
              </p>
            </div>

          </div>


          <div className="appearance-preview">

            <div className="preview-window">

              <div className="preview-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="preview-body">

                <div className="preview-sidebar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="preview-main">

                  <div className="preview-title"></div>

                  <div className="preview-cards">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="preview-chart">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>

              </div>

            </div>


            <div className="appearance-info">

              <strong>
                Dark Interface
              </strong>

              <span>
                Optimized for data visualization
                and extended exploration.
              </span>

              <div className="appearance-badge">
                ACTIVE
              </div>

            </div>

          </div>

        </section>


        {/* ================= TECHNOLOGIES ================= */}

        <section className="settings-card">

          <div className="settings-card-header">

            <div className="settings-card-icon">
              ⓘ
            </div>

            <div>
              <h2>
                About this project
              </h2>

              <p>
                Technologies powering Global
                Data Explorer.
              </p>
            </div>

          </div>


          <div className="technology-grid">

            <div className="technology-item">
              <strong>React</strong>
              <span>Frontend Framework</span>
            </div>

            <div className="technology-item">
              <strong>Chart.js</strong>
              <span>Data Charts</span>
            </div>

            <div className="technology-item">
              <strong>D3.js</strong>
              <span>Custom Visualization</span>
            </div>

            <div className="technology-item">
              <strong>Three.js</strong>
              <span>3D Visualization</span>
            </div>

          </div>

        </section>


        {/* ================= ACTIONS ================= */}

        <div className="settings-actions">

          <button
            className="reset-button"
            onClick={handleReset}
          >
            Reset Settings
          </button>

          <button
            className="save-button"
            onClick={handleSave}
          >
            {saved
              ? "✓ Settings Saved"
              : "Save Settings"}
          </button>

        </div>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="settings-footer">

        <div className="settings-footer-brand">

          <span className="settings-logo-icon">
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


        <div className="settings-footer-links">

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

        </div>


        <p>
          © 2026 Global Data Explorer
        </p>

      </footer>

    </div>
  );
}

export default Settings;
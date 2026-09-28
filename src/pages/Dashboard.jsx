import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const stats = [
    {
      number: "195",
      label: "Countries",
      description: "Countries available to explore",
      icon: "🌍",
    },
    {
      number: "8.2B",
      label: "World Population",
      description: "Estimated global population",
      icon: "👥",
    },
    {
      number: "7",
      label: "Continents",
      description: "Global regions represented",
      icon: "🌎",
    },
    {
      number: "6+",
      label: "Visualizations",
      description: "Interactive data experiences",
      icon: "📊",
    },
  ];

  const regions = [
    {
      name: "Asia",
      population: "4.8B",
      percentage: "59%",
    },
    {
      name: "Africa",
      population: "1.5B",
      percentage: "18%",
    },
    {
      name: "Europe",
      population: "744M",
      percentage: "9%",
    },
    {
      name: "Americas",
      population: "1.1B",
      percentage: "13%",
    },
    {
      name: "Oceania",
      population: "46M",
      percentage: "1%",
    },
  ];

  const topCountries = [
    {
      rank: "01",
      country: "India",
      population: "1.46B",
      region: "Asia",
    },
    {
      rank: "02",
      country: "China",
      population: "1.41B",
      region: "Asia",
    },
    {
      rank: "03",
      country: "United States",
      population: "347M",
      region: "Americas",
    },
    {
      rank: "04",
      country: "Indonesia",
      population: "286M",
      region: "Asia",
    },
    {
      rank: "05",
      country: "Pakistan",
      population: "255M",
      region: "Asia",
    },
  ];

  return (
    <div className="dashboard">

      {/* =================================================
          TOP NAVIGATION
      ================================================= */}

      <nav className="dashboard-navbar">

        <Link to="/" className="dashboard-logo">
          <span>G</span>
          GLOBAL DATA EXPLORER
        </Link>

        <div className="dashboard-nav-links">
          <Link to="/">Home</Link>

          <Link to="/dashboard" className="active">
            Dashboard
          </Link>

          <Link to="/explore">
            Explore
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
           <Link to="/settings">
            Settings
          </Link>
        </div>

      </nav>


      {/* =================================================
          DASHBOARD HEADER
      ================================================= */}

      <main className="dashboard-main">

        <section className="dashboard-heading">

          <div>
            <p className="dashboard-label">
              GLOBAL OVERVIEW
            </p>

            <h1>
              Explore the world's
              <span> data.</span>
            </h1>

            <p className="dashboard-description">
              A visual overview of countries, populations,
              continents and global statistics.
            </p>
          </div>

          <Link
            to="/explore"
            className="dashboard-explore-button"
          >
            Explore Countries
            <span>→</span>
          </Link>

        </section>


        {/* =================================================
            STAT CARDS
        ================================================= */}

        <section className="dashboard-stats">

          {stats.map((stat) => (
            <div className="dashboard-stat-card" key={stat.label}>

              <div className="stat-top">

                <span className="stat-icon">
                  {stat.icon}
                </span>

                <span className="stat-line"></span>

              </div>

              <strong>
                {stat.number}
              </strong>

              <h3>
                {stat.label}
              </h3>

              <p>
                {stat.description}
              </p>

            </div>
          ))}

        </section>


        {/* =================================================
            MAIN DATA AREA
        ================================================= */}

        <section className="dashboard-grid">


          {/* POPULATION BY REGION */}

          <div className="dashboard-panel region-panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">
                  POPULATION
                </span>

                <h2>
                  Population by region
                </h2>
              </div>

              <span className="panel-year">
                GLOBAL
              </span>

            </div>


            <div className="region-chart">

              {regions.map((region) => (
                <div
                  className="region-row"
                  key={region.name}
                >

                  <div className="region-info">

                    <span>
                      {region.name}
                    </span>

                    <strong>
                      {region.population}
                    </strong>

                  </div>

                  <div className="region-bar">

                    <div
                      className="region-bar-fill"
                      style={{
                        width: region.percentage,
                      }}
                    ></div>

                  </div>

                  <span className="region-percent">
                    {region.percentage}
                  </span>

                </div>
              ))}

            </div>

          </div>


          {/* REGIONAL DISTRIBUTION */}

          <div className="dashboard-panel distribution-panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">
                  DISTRIBUTION
                </span>

                <h2>
                  Global regions
                </h2>
              </div>

            </div>


            <div className="donut-wrapper">

              <div className="donut-chart">

                <div className="donut-center">
                  <strong>
                    5
                  </strong>

                  <span>
                    Regions
                  </span>
                </div>

              </div>

            </div>


            <div className="legend">

              {regions.map((region) => (
                <div
                  className="legend-item"
                  key={region.name}
                >

                  <span className="legend-dot"></span>

                  <span>
                    {region.name}
                  </span>

                  <strong>
                    {region.percentage}
                  </strong>

                </div>
              ))}

            </div>

          </div>


          {/* TOP COUNTRIES */}

          <div className="dashboard-panel countries-panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">
                  RANKING
                </span>

                <h2>
                  Largest countries
                </h2>
              </div>

              <Link to="/explore">
                View all →
              </Link>

            </div>


            <div className="country-table">

              <div className="country-table-header">

                <span>
                  #
                </span>

                <span>
                  COUNTRY
                </span>

                <span>
                  REGION
                </span>

                <span>
                  POPULATION
                </span>

              </div>


              {topCountries.map((country) => (
                <div
                  className="country-row"
                  key={country.rank}
                >

                  <span className="country-rank">
                    {country.rank}
                  </span>

                  <strong>
                    {country.country}
                  </strong>

                  <span className="country-region">
                    {country.region}
                  </span>

                  <span className="country-population">
                    {country.population}
                  </span>

                </div>
              ))}

            </div>

          </div>


          {/* QUICK INSIGHTS */}

          <div className="dashboard-panel insights-panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">
                  INSIGHTS
                </span>

                <h2>
                  Global highlights
                </h2>
              </div>

            </div>


            <div className="insight-list">

              <div className="insight-item">

                <span className="insight-number">
                  01
                </span>

                <div>
                  <strong>
                    Asia leads global population
                  </strong>

                  <p>
                    More than half of the world's
                    population lives in Asia.
                  </p>
                </div>

              </div>


              <div className="insight-item">

                <span className="insight-number">
                  02
                </span>

                <div>
                  <strong>
                    India is the largest country
                    by population
                  </strong>

                  <p>
                    India currently represents one
                    of the world's largest populations.
                  </p>
                </div>

              </div>


              <div className="insight-item">

                <span className="insight-number">
                  03
                </span>

                <div>
                  <strong>
                    Explore data visually
                  </strong>

                  <p>
                    Use charts, D3 visualizations
                    and the 3D globe to explore data.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            VISUALIZATION CTA
        ================================================= */}

        <section className="dashboard-cta">

          <div>

            <span>
              READY TO EXPLORE?
            </span>

            <h2>
              Go deeper into
              <strong> global data.</strong>
            </h2>

          </div>


          <div className="cta-buttons">

            <Link
              to="/charts"
              className="cta-primary"
            >
              View Charts
              <span>→</span>
            </Link>

            <Link
              to="/globe"
              className="cta-secondary"
            >
              Open 3D Globe
            </Link>

          </div>

        </section>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="dashboard-footer">

        <span>
          © 2026 Global Data Explorer
        </span>

        <span>
          Built with React • Chart.js • D3.js • Three.js
        </span>

      </footer>

    </div>
  );
}

export default Dashboard;
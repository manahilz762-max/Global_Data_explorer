import { useState } from "react";
import { Link } from "react-router-dom";

import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

import "./Charts.css";

function Charts() {
  const [activeChart, setActiveChart] = useState("bar");

  return (
    <div className="charts-page">

      {/* NAVBAR */}
      <nav className="charts-navbar">

        <Link to="/" className="charts-logo">
          GLOBAL<span>DATA</span>
        </Link>

        <div className="charts-nav-links">
          <Link to="/">Home</Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/explore">
            Explore
          </Link>

          <Link to="/charts" className="active">
            Charts
          </Link>

          <Link to="/d3">
            D3 Visuals
          </Link>
                    <Link to="/3D">
            3D GLOBE
          </Link>
                  
                    <Link to="/settings">
            Settings
          </Link>
        </div>

      </nav>


      {/* HEADER */}
      <main className="charts-container">

        <section className="charts-header">

          <div>

            <span className="charts-label">
              DATA VISUALIZATION
            </span>

            <h1>
              See the world<br />
              through <span>data.</span>
            </h1>

            <p>
              Interactive charts that transform global
              statistics into clear visual insights.
            </p>

          </div>

          <div className="chart-header-number">
            <strong>03</strong>
            <span>VISUALIZATIONS</span>
          </div>

        </section>


        {/* CHART SWITCHER */}
        <section className="chart-switcher">

          <button
            className={
              activeChart === "bar"
                ? "chart-tab active"
                : "chart-tab"
            }
            onClick={() => setActiveChart("bar")}
          >
            <span>01</span>
            Population
          </button>


          <button
            className={
              activeChart === "line"
                ? "chart-tab active"
                : "chart-tab"
            }
            onClick={() => setActiveChart("line")}
          >
            <span>02</span>
            Trend
          </button>


          <button
            className={
              activeChart === "pie"
                ? "chart-tab active"
                : "chart-tab"
            }
            onClick={() => setActiveChart("pie")}
          >
            <span>03</span>
            Regions
          </button>

        </section>


        {/* MAIN CHART */}
        <section className="main-chart-card">

          <div className="chart-card-header">

            <div>

              <span>
                {activeChart === "bar" && "COUNTRY COMPARISON"}

                {activeChart === "line" && "GLOBAL TREND"}

                {activeChart === "pie" && "REGIONAL DISTRIBUTION"}
              </span>

              <h2>
                {activeChart === "bar" &&
                  "Population by country"}

                {activeChart === "line" &&
                  "Population growth trend"}

                {activeChart === "pie" &&
                  "Population by region"}
              </h2>

            </div>


            <div className="live-indicator">
              <i></i>
              DATASET ACTIVE
            </div>

          </div>


          {/* CHART AREA */}

          <div className="chart-display">

            {activeChart === "bar" && (
              <BarChart />
            )}

            {activeChart === "line" && (
              <LineChart />
            )}

            {activeChart === "pie" && (
              <PieChart />
            )}

          </div>

        </section>


        {/* INFORMATION CARDS */}
        <section className="chart-info-grid">

          <div className="chart-info-card">

            <span>CHART TYPE</span>

            <strong>
              {activeChart === "bar" && "Bar Chart"}

              {activeChart === "line" && "Line Chart"}

              {activeChart === "pie" && "Doughnut Chart"}
            </strong>

            <p>
              Interactive Chart.js visualization.
            </p>

          </div>


          <div className="chart-info-card">

            <span>DATA POINTS</span>

            <strong>
              {activeChart === "bar" && "5 Countries"}

              {activeChart === "line" && "6 Years"}

              {activeChart === "pie" && "5 Regions"}
            </strong>

            <p>
              Data points used in this visualization.
            </p>

          </div>


          <div className="chart-info-card">

            <span>INTERACTION</span>

            <strong>
              Hover + Switch
            </strong>

            <p>
              Hover over charts and switch views.
            </p>

          </div>

        </section>


        {/* CTA */}
        <section className="charts-cta">

          <div>

            <span>
              WANT MORE?
            </span>

            <h2>
              Explore custom D3 visualizations.
            </h2>

            <p>
              Discover interactive visualizations
              built with D3.js.
            </p>

          </div>

          <Link
            to="/d3"
            className="charts-cta-button"
          >
            Explore D3 →
          </Link>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="charts-footer">

        <div>

          <strong>
            GLOBAL DATA EXPLORER
          </strong>

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

export default Charts;
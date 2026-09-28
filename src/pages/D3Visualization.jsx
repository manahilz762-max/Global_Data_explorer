import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as d3 from "d3";

import "./D3Visualization.css";

function D3Visualization() {
  const svgRef = useRef(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regionData = [
    {
      region: "Asia",
      population: 4800,
      countries: 48,
      description: "Largest population region",
    },
    {
      region: "Africa",
      population: 1500,
      countries: 54,
      description: "Rapidly growing population",
    },
    {
      region: "Americas",
      population: 1100,
      countries: 35,
      description: "North and South America",
    },
    {
      region: "Europe",
      population: 744,
      countries: 44,
      description: "Highly urbanized region",
    },
    {
      region: "Oceania",
      population: 46,
      countries: 14,
      description: "Smallest population region",
    },
  ];

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    const width = 900;
    const height = 500;

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const container = svg.append("g");

    const maxPopulation = d3.max(
      regionData,
      (d) => d.population
    );

    const radiusScale = d3
      .scaleSqrt()
      .domain([0, maxPopulation])
      .range([35, 100]);

    const positions = {
      Asia: { x: 610, y: 190 },
      Africa: { x: 440, y: 330 },
      Americas: { x: 190, y: 260 },
      Europe: { x: 430, y: 130 },
      Oceania: { x: 760, y: 360 },
    };

    const groups = container
      .selectAll(".region-group")
      .data(regionData)
      .enter()
      .append("g")
      .attr("class", "region-group")
      .attr(
        "transform",
        (d) =>
          `translate(${positions[d.region].x}, ${positions[d.region].y})`
      )
      .style("cursor", "pointer")
      .on("click", function (event, d) {
        setSelectedRegion(d);
      });

    groups
      .append("circle")
      .attr("class", "region-glow")
      .attr("r", (d) => radiusScale(d.population) + 15);

    groups
      .append("circle")
      .attr("class", "region-circle")
      .attr("r", 0)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 150)
      .ease(d3.easeBackOut)
      .attr("r", (d) => radiusScale(d.population));

    groups
      .append("text")
      .attr("class", "region-name")
      .attr("text-anchor", "middle")
      .attr("dy", "-5")
      .text((d) => d.region);

    groups
      .append("text")
      .attr("class", "region-population")
      .attr("text-anchor", "middle")
      .attr("dy", "18")
      .text((d) => `${d.population.toLocaleString()}M`);

    groups
      .on("mouseenter", function () {
        d3.select(this)
          .select(".region-circle")
          .transition()
          .duration(200)
          .attr(
            "r",
            (d) => radiusScale(d.population) + 8
          );
      })
      .on("mouseleave", function () {
        d3.select(this)
          .select(".region-circle")
          .transition()
          .duration(200)
          .attr(
            "r",
            (d) => radiusScale(d.population)
          );
      });

    const lines = [
      ["Americas", "Europe"],
      ["Europe", "Asia"],
      ["Asia", "Oceania"],
      ["Americas", "Africa"],
      ["Africa", "Asia"],
    ];

    lines.forEach(([source, target]) => {
      const start = positions[source];
      const end = positions[target];

      container
        .append("line")
        .attr("class", "connection-line")
        .attr("x1", start.x)
        .attr("y1", start.y)
        .attr("x2", start.x)
        .attr("y2", start.y)
        .transition()
        .duration(800)
        .delay(500)
        .attr("x2", end.x)
        .attr("y2", end.y);
    });

    container
      .append("text")
      .attr("class", "background-label")
      .attr("x", 450)
      .attr("y", 475)
      .attr("text-anchor", "middle")
      .text("GLOBAL REGIONAL POPULATION NETWORK");
  }, []);

  return (
    <div className="d3-page">

      {/* NAVBAR */}

      <nav className="d3-navbar">

        <Link to="/" className="d3-logo">
          GLOBAL<span>DATA</span>
        </Link>

        <div className="d3-nav-links">

          <Link to="/">Home</Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/explore">
            Explore
          </Link>

          <Link to="/charts">
            Charts
          </Link>

          <Link to="/d3" className="active">
            D3 Visuals
          </Link>
           <Link to="/globe" className="active">
            3D Visuals
          </Link>
           <Link to="/settings" className="active">
            Settings
          </Link>

        </div>

      </nav>


      {/* MAIN */}

      <main className="d3-container">

        <section className="d3-header">

          <div>

            <span className="d3-label">
              D3.JS VISUALIZATION
            </span>

            <h1>
              Discover the
              <br />
              <span>global network.</span>
            </h1>

            <p>
              An interactive visualization showing
              population distribution across the
              world's major regions.
            </p>

          </div>

          <div className="d3-tech-badge">
            <strong>D3</strong>
            <span>DATA-DRIVEN DOCUMENTS</span>
          </div>

        </section>


        {/* VISUALIZATION */}

        <section className="d3-visual-card">

          <div className="d3-card-header">

            <div>

              <span>
                INTERACTIVE NETWORK
              </span>

              <h2>
                Regional population
              </h2>

            </div>

            <div className="d3-status">
              <i></i>
              LIVE INTERACTION
            </div>

          </div>


          <div className="d3-svg-wrapper">

            <svg ref={svgRef}></svg>

          </div>


          <div className="d3-hint">
            Click a region to inspect its data
          </div>

        </section>


        {/* SELECTED REGION */}

        {selectedRegion && (
          <section className="selected-region">

            <div className="selected-icon">
              {selectedRegion.region.charAt(0)}
            </div>

            <div className="selected-content">

              <span>SELECTED REGION</span>

              <h2>
                {selectedRegion.region}
              </h2>

              <p>
                {selectedRegion.description}
              </p>

            </div>

            <div className="selected-stats">

              <div>
                <strong>
                  {selectedRegion.population.toLocaleString()}M
                </strong>

                <span>POPULATION</span>
              </div>

              <div>
                <strong>
                  {selectedRegion.countries}
                </strong>

                <span>COUNTRIES</span>
              </div>

            </div>

          </section>
        )}


        {/* DATA CARDS */}

        <section className="d3-data-grid">

          {regionData.map((region) => (
            <div
              className="d3-data-card"
              key={region.region}
              onClick={() => setSelectedRegion(region)}
            >

              <span>
                {region.region}
              </span>

              <strong>
                {region.population.toLocaleString()}M
              </strong>

              <small>
                {region.countries} countries
              </small>

            </div>
          ))}

        </section>


        {/* CTA */}

        <section className="d3-cta">

          <div>

            <span>
              NEXT VISUALIZATION
            </span>

            <h2>
              Explore the world in 3D.
            </h2>

            <p>
              Rotate and explore an interactive
              Three.js globe.
            </p>

          </div>

          <Link
            to="/globe"
            className="d3-cta-button"
          >
            Open 3D Globe →
          </Link>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="d3-footer">

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

export default D3Visualization;
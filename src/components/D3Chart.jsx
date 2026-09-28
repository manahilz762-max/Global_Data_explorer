import { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./D3Chart.css";

function D3Chart() {
  const chartRef = useRef();

  useEffect(() => {
    const width = 700;
    const height = 400;

    const data = [
      { country: "Pakistan", value: 241 },
      { country: "India", value: 1428 },
      { country: "China", value: 1410 },
      { country: "USA", value: 339 },
      { country: "Japan", value: 124 },
    ];

    const colors = [
      "#3b82f6",
      "#8b5cf6",
      "#ec4899",
      "#10b981",
      "#f59e0b",
    ];

    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove();

    const radius = d3
      .scaleSqrt()
      .domain([
        0,
        d3.max(data, (d) => d.value),
      ])
      .range([30, 75]);

    const circles = svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")

      .attr(
        "cx",
        (d, i) => 80 + i * 130
      )

      .attr(
        "cy",
        height / 2
      )

      .attr(
        "r",
        (d) => radius(d.value)
      )

      .attr(
        "fill",
        (d, i) => colors[i]
      )

      .attr("stroke", "#ffffff")
      .attr("stroke-width", 4)
      .attr("opacity", 0.9);

    circles
      .on("mouseover", function () {

        d3.select(this)
          .transition()
          .duration(200)
          .attr("opacity", 0.65)
          .attr(
            "stroke",
            "#111827"
          );

      })

      .on("mouseout", function () {

        d3.select(this)
          .transition()
          .duration(200)
          .attr("opacity", 0.9)
          .attr(
            "stroke",
            "#ffffff"
          );

      });

    svg
      .selectAll(".country-label")
      .data(data)
      .enter()
      .append("text")

      .attr("class", "country-label")

      .attr(
        "x",
        (d, i) => 80 + i * 130
      )

      .attr(
        "y",
        height / 2 + 110
      )

      .attr(
        "text-anchor",
        "middle"
      )

      .text(
        (d) => d.country
      )

      .attr(
        "fill",
        "#374151"
      )

      .attr(
        "font-size",
        "14px"
      )

      .attr(
        "font-weight",
        "600"
      );

  }, []);

  return (
    <div className="d3-chart">
      <svg ref={chartRef}></svg>
    </div>
  );
}

export default D3Chart;
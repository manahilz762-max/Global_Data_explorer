import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

import { Pie } from "react-chartjs-2";

import "./PieChart.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

function PieChart() {
  const data = {
    labels: [
      "Asia",
      "Europe",
      "Africa",
      "America",
      "Oceania",
    ],

    datasets: [
      {
        label: "Population Distribution",

        data: [60, 10, 17, 12, 1],

        backgroundColor: [
          "#3b82f6",
          "#8b5cf6",
          "#10b981",
          "#f59e0b",
          "#ec4899",
        ],

        borderColor: "#ffffff",

        borderWidth: 3,

        hoverOffset: 12,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
      },

      title: {
        display: true,
        text: "Population Distribution",
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <div className="pie-chart">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
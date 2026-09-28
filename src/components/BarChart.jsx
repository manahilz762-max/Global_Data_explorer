import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import "./BarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const data = {
    labels: ["Pakistan", "India", "China", "USA", "Japan"],

    datasets: [
      {
        label: "Population (Millions)",
        data: [241, 1428, 1410, 339, 124],

        backgroundColor: [
          "#3b82f6",
          "#8b5cf6",
          "#06b6d4",
          "#f59e0b",
          "#ec4899",
        ],

        borderColor: [
          "#2563eb",
          "#7c3aed",
          "#0891b2",
          "#d97706",
          "#db2777",
        ],

        borderWidth: 2,

        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
      },

      title: {
        display: true,
        text: "Population Comparison",
        font: {
          size: 18,
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#e5e7eb",
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
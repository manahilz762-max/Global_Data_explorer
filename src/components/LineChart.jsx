import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

import "./LineChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function LineChart() {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
    ],

    datasets: [
      {
        label: "Monthly Visitors",
        data: [120, 190, 150, 240, 220, 300],

        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.15)",

        borderWidth: 4,

        pointBackgroundColor: [
          "#3b82f6",
          "#8b5cf6",
          "#ec4899",
          "#f59e0b",
          "#06b6d4",
          "#10b981",
        ],

        pointBorderColor: "#ffffff",
        pointBorderWidth: 3,
        pointRadius: 6,

        fill: true,

        tension: 0.4,
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
        text: "Monthly Visitors Trend",
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
    <div className="line-chart">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
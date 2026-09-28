import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ThreeDChart from "../components/ThreeDChart";

import "./ThreeD.css";

function ThreeD() {
  return (
    <div className="page-layout">
      <Sidebar />

      <main className="page-content">
        <Header />

        <div className="visualization-page">
          <div className="page-heading">
            <h2>3D Visualization</h2>
            <p>
              Explore data using an interactive 3D visualization.
            </p>
          </div>

          <ThreeDChart />
        </div>
      </main>
    </div>
  );
}

export default ThreeD;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import CountryDetails from "./pages/CountryDetails";
import Charts from "./pages/Charts";
import D3Visualization from "./pages/D3Visualization";
import Globe from "./pages/Globe";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/country/:code"
          element={<CountryDetails />}
        />

        <Route
          path="/charts"
          element={<Charts />}
        />

        <Route
          path="/d3"
          element={<D3Visualization />}
        />

        <Route
          path="/globe"
          element={<Globe />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
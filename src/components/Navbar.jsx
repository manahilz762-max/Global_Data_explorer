import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Explore", path: "/explore" },
    { label: "Data", path: "/data" },
    { label: "Charts", path: "/charts" },
    { label: "3D", path: "/3d" },
    { label: "D3", path: "/d3" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <NavLink to="/" className="navbar-brand">
          <div className="brand-mark">GD</div>

          <div className="brand-text">
            <strong>GLOBAL DATA</strong>
            <span>EXPLORER</span>
          </div>
        </NavLink>

        <nav className="navbar-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Dashboard</h1>
        <p>Explore and understand your data</p>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <span>⌕</span>
          <input type="text" placeholder="Search data..." />
        </div>

        <div className="profile">
          <div className="profile-avatar">M</div>

          <div className="profile-info">
            <strong>Manahil</strong>
            <span>Frontend Developer</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
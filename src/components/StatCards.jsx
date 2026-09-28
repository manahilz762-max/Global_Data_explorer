import "./StatCards.css";

function StatCards() {
  return (
    <div className="stat-cards">

      <div className="stat-card">
        <div className="stat-icon">🌍</div>
        <div>
          <p>Total Countries</p>
          <h3>195</h3>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">👥</div>
        <div>
          <p>Total Population</p>
          <h3>8.1B</h3>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">📊</div>
        <div>
          <p>Data Sets</p>
          <h3>50</h3>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">📈</div>
        <div>
          <p>Growth Rate</p>
          <h3>4.8%</h3>
        </div>
      </div>

    </div>
  );
}

export default StatCards;
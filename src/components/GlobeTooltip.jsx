function GlobeTooltip({ country }) {
  if (!country) {
    return null;
  }

  return (
    <div className="country-tooltip">
      <div className="tooltip-code">
        {country.code}
      </div>

      <h3>
        {country.name}
      </h3>

      <div className="tooltip-info">
        <div>
          <span>Population</span>
          <strong>{country.population}</strong>
        </div>

        <div>
          <span>Capital</span>
          <strong>{country.capital}</strong>
        </div>

        <div>
          <span>Region</span>
          <strong>{country.region}</strong>
        </div>
      </div>
    </div>
  );
}

export default GlobeTooltip;
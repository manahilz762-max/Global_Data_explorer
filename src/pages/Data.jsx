import { useState } from "react";
import countries from "../data/data.js";
import { countryDetails } from "../data/countryDetails";
import "./Data.css";

function Data() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const regions = [
    "All",
    ...new Set(countries.map((country) => country.region)),
  ];

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion =
      region === "All" || country.region === region;

    return matchesSearch && matchesRegion;
  });

  const handleCountryClick = (country) => {
    const details = countryDetails[country.code];

    setSelectedCountry({
      ...country,
      details,
    });
  };

  return (
    <main className="data-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="data-hero">

        <div className="data-container">

          <p className="data-eyebrow">
            GLOBAL DATA EXPLORER
          </p>

          <h1>
            Find the data
            <span> you need.</span>
          </h1>

          <p className="data-intro">
            Search and explore countries, regions,
            and global datasets.
          </p>

          {/* SEARCH */}

          <div className="data-search">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedCountry(null);
              }}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => {
                  setSearch("");
                  setSelectedCountry(null);
                }}
              >
                ×
              </button>
            )}

          </div>

        </div>

      </section>


      {/* =========================
          DATA CONTENT
      ========================= */}

      <section className="data-content">

        <div className="data-container">

          {/* TOOLBAR */}

          <div className="data-toolbar">

            <div>

              <p className="data-label">
                DATASET
              </p>

              <h2>
                Country Information
              </h2>

            </div>

            <div className="result-count">
              {filteredCountries.length}{" "}
              {filteredCountries.length === 1
                ? "country"
                : "countries"}
            </div>

          </div>


          {/* REGION FILTER */}

          <div className="region-filter">

            {regions.map((item) => (

              <button
                key={item}
                className={
                  region === item
                    ? "region-btn active"
                    : "region-btn"
                }
                onClick={() => {
                  setRegion(item);
                  setSelectedCountry(null);
                }}
              >
                {item}
              </button>

            ))}

          </div>


          {/* COUNTRY TABLE */}

          <div className="data-table-wrapper">

            <div className="data-table-header">

              <span>COUNTRY</span>
              <span>CODE</span>
              <span>REGION</span>
              <span>STATUS</span>

            </div>


            {filteredCountries.length > 0 ? (

              filteredCountries.map((country) => (

                <button
                  className="data-table-row"
                  key={country.id}
                  onClick={() => handleCountryClick(country)}
                >

                  <strong>
                    {country.name}
                  </strong>

                  <span>
                    {country.code}
                  </span>

                  <span>
                    {country.region}
                  </span>

                  <span className="data-status">

                    <i></i>

                    Available

                  </span>

                </button>

              ))

            ) : (

              <div className="no-results">

                <div className="no-results-icon">
                  ?
                </div>

                <h3>
                  No country found
                </h3>

                <p>
                  Try searching for another country.
                </p>

              </div>

            )}

          </div>


          {/* =========================
              COUNTRY DETAILS
          ========================= */}

          {selectedCountry && (

            <section className="country-details">

              <div className="country-details-header">

                <div>

                  <p className="data-label">
                    COUNTRY PROFILE
                  </p>

                  <h2>
                    {selectedCountry.name}
                  </h2>

                  <span>
                    {selectedCountry.code} ·{" "}
                    {selectedCountry.region}
                  </span>

                </div>

                <button
                  className="close-details"
                  onClick={() => setSelectedCountry(null)}
                >
                  ×
                </button>

              </div>


              {selectedCountry.details ? (

                <div className="country-stats">

                  <div className="country-stat">

                    <span>CAPITAL</span>

                    <strong>
                      {selectedCountry.details.capital}
                    </strong>

                  </div>


                  <div className="country-stat">

                    <span>POPULATION</span>

                    <strong>
                      {selectedCountry.details.population.toLocaleString()}
                    </strong>

                  </div>


                  <div className="country-stat">

                    <span>AREA</span>

                    <strong>
                      {selectedCountry.details.area.toLocaleString()} km²
                    </strong>

                  </div>


                  <div className="country-stat">

                    <span>CURRENCY</span>

                    <strong>
                      {selectedCountry.details.currency}
                    </strong>

                  </div>


                  <div className="country-stat">

                    <span>LANGUAGES</span>

                    <strong>
                      {selectedCountry.details.languages.join(", ")}
                    </strong>

                  </div>

                </div>

              ) : (

                <div className="details-unavailable">

                  <h3>
                    More data coming soon
                  </h3>

                  <p>
                    Basic information for this country is
                    available, but detailed statistics have
                    not been added yet.
                  </p>

                </div>

              )}

            </section>

          )}

        </div>

      </section>

    </main>
  );
}

export default Data;
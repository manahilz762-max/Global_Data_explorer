import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Explore.css";

const countries = [
  {
    name: "Pakistan",
    code: "PAK",
    capital: "Islamabad",
    region: "Asia",
    population: "255M",
    area: "881,913 km²",
    currency: "Pakistani Rupee",
  },
  {
    name: "India",
    code: "IND",
    capital: "New Delhi",
    region: "Asia",
    population: "1.46B",
    area: "3,287,590 km²",
    currency: "Indian Rupee",
  },
  {
    name: "China",
    code: "CHN",
    capital: "Beijing",
    region: "Asia",
    population: "1.41B",
    area: "9,706,961 km²",
    currency: "Chinese Yuan",
  },
  {
    name: "Japan",
    code: "JPN",
    capital: "Tokyo",
    region: "Asia",
    population: "123M",
    area: "377,975 km²",
    currency: "Japanese Yen",
  },
  {
    name: "Indonesia",
    code: "IDN",
    capital: "Jakarta",
    region: "Asia",
    population: "286M",
    area: "1,904,569 km²",
    currency: "Indonesian Rupiah",
  },
  {
    name: "United States",
    code: "USA",
    capital: "Washington, D.C.",
    region: "Americas",
    population: "347M",
    area: "9,833,520 km²",
    currency: "US Dollar",
  },
  {
    name: "Brazil",
    code: "BRA",
    capital: "Brasília",
    region: "Americas",
    population: "212M",
    area: "8,515,767 km²",
    currency: "Brazilian Real",
  },
  {
    name: "Canada",
    code: "CAN",
    capital: "Ottawa",
    region: "Americas",
    population: "40M",
    area: "9,984,670 km²",
    currency: "Canadian Dollar",
  },
  {
    name: "Mexico",
    code: "MEX",
    capital: "Mexico City",
    region: "Americas",
    population: "131M",
    area: "1,964,375 km²",
    currency: "Mexican Peso",
  },
  {
    name: "United Kingdom",
    code: "GBR",
    capital: "London",
    region: "Europe",
    population: "69M",
    area: "243,610 km²",
    currency: "Pound Sterling",
  },
  {
    name: "Germany",
    code: "DEU",
    capital: "Berlin",
    region: "Europe",
    population: "84M",
    area: "357,022 km²",
    currency: "Euro",
  },
  {
    name: "France",
    code: "FRA",
    capital: "Paris",
    region: "Europe",
    population: "66M",
    area: "551,695 km²",
    currency: "Euro",
  },
  {
    name: "Italy",
    code: "ITA",
    capital: "Rome",
    region: "Europe",
    population: "59M",
    area: "301,340 km²",
    currency: "Euro",
  },
  {
    name: "Spain",
    code: "ESP",
    capital: "Madrid",
    region: "Europe",
    population: "49M",
    area: "505,990 km²",
    currency: "Euro",
  },
  {
    name: "Nigeria",
    code: "NGA",
    capital: "Abuja",
    region: "Africa",
    population: "238M",
    area: "923,768 km²",
    currency: "Nigerian Naira",
  },
  {
    name: "Egypt",
    code: "EGY",
    capital: "Cairo",
    region: "Africa",
    population: "118M",
    area: "1,001,450 km²",
    currency: "Egyptian Pound",
  },
  {
    name: "South Africa",
    code: "ZAF",
    capital: "Pretoria",
    region: "Africa",
    population: "65M",
    area: "1,221,037 km²",
    currency: "South African Rand",
  },
  {
    name: "Australia",
    code: "AUS",
    capital: "Canberra",
    region: "Oceania",
    population: "27M",
    area: "7,692,024 km²",
    currency: "Australian Dollar",
  },
  {
    name: "New Zealand",
    code: "NZL",
    capital: "Wellington",
    region: "Oceania",
    population: "5M",
    area: "268,021 km²",
    currency: "New Zealand Dollar",
  },
  {
    name: "Saudi Arabia",
    code: "SAU",
    capital: "Riyadh",
    region: "Asia",
    population: "35M",
    area: "2,149,690 km²",
    currency: "Saudi Riyal",
  },
];

function Explore() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesRegion =
        region === "All" || country.region === region;

      return matchesSearch && matchesRegion;
    });
  }, [search, region]);

  return (
    <div className="explore-page">

      {/* NAVBAR */}

      <nav className="explore-navbar">

        <Link to="/" className="explore-logo">
          <span></span>
          GLOBAL DATA EXPLORER
        </Link>

        <div className="explore-nav-links">

          <Link to="/">Home</Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link
            to="/explore"
            className="active"
          >
            Explore
          </Link>

          <Link to="/charts">
            Charts
          </Link>

          <Link to="/globe">
            3D Globe
          </Link>

          <Link to="/d3">
            D3 Visuals
          </Link>
            <Link to="/settings">
            Settings
          </Link>

        </div>

      </nav>


      {/* MAIN */}

      <main className="explore-main">

        {/* HEADER */}

        <section className="explore-header">

          <div>

            <p className="explore-label">
              COUNTRY DATABASE
            </p>

            <h1>
              Explore the
              <span> world.</span>
            </h1>

            <p className="explore-description">
              Search countries, compare regions and
              discover important global information.
            </p>

          </div>

          <div className="country-counter">
            <strong>
              {filteredCountries.length}
            </strong>

            <span>
              Countries shown
            </span>
          </div>

        </section>


        {/* SEARCH + FILTER */}

        <section className="explore-controls">

          <div className="search-box">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search a country..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="clear-search"
              >
                ×
              </button>
            )}

          </div>


          <div className="region-filter">

            <label>
              REGION
            </label>

            <select
              value={region}
              onChange={(event) =>
                setRegion(event.target.value)
              }
            >
              <option value="All">
                All Regions
              </option>

              <option value="Asia">
                Asia
              </option>

              <option value="Africa">
                Africa
              </option>

              <option value="Europe">
                Europe
              </option>

              <option value="Americas">
                Americas
              </option>

              <option value="Oceania">
                Oceania
              </option>
            </select>

          </div>

        </section>


        {/* COUNTRY GRID */}

        <section className="country-grid">

          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (

              <Link
                to={`/country/${country.code}`}
                className="country-card"
                key={country.code}
              >

                <div className="country-card-top">

                  <span className="country-code">
                    {country.code}
                  </span>

                  <span className="country-region">
                    {country.region}
                  </span>

                </div>


                <div className="country-symbol">
                  {country.code.charAt(0)}
                </div>


                <h2>
                  {country.name}
                </h2>


                <div className="country-info">

                  <div>
                    <span>
                      POPULATION
                    </span>

                    <strong>
                      {country.population}
                    </strong>
                  </div>

                  <div>
                    <span>
                      CAPITAL
                    </span>

                    <strong>
                      {country.capital}
                    </strong>
                  </div>

                </div>


                <div className="country-card-bottom">

                  <span>
                    View details
                  </span>

                  <span className="arrow">
                    →
                  </span>

                </div>

              </Link>

            ))
          ) : (

            <div className="no-results">

              <div>
                🔎
              </div>

              <h2>
                No countries found
              </h2>

              <p>
                Try another country name or region.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setRegion("All");
                }}
              >
                Clear filters
              </button>

            </div>

          )}

        </section>

      </main>


      {/* FOOTER */}

      <footer className="explore-footer">

        <span>
          © 2026 Global Data Explorer
        </span>

        <span>
          Explore countries through data
        </span>

      </footer>

    </div>
  );
}

export default Explore;
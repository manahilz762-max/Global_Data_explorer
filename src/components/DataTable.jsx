import "./DataTable.css";

function DataTable() {
  const data = [
    {
      country: "Pakistan",
      population: "241M",
      region: "Asia",
      growth: "2.0%",
    },
    {
      country: "India",
      population: "1,428M",
      region: "Asia",
      growth: "0.8%",
    },
    {
      country: "China",
      population: "1,410M",
      region: "Asia",
      growth: "0.1%",
    },
    {
      country: "USA",
      population: "339M",
      region: "America",
      growth: "0.5%",
    },
    {
      country: "Japan",
      population: "124M",
      region: "Asia",
      growth: "-0.5%",
    },
  ];

  return (
    <div className="data-table">
      <div className="table-header">
        <h2>Country Data</h2>
        <p>Population and growth information</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Population</th>
            <th>Region</th>
            <th>Growth</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.country}</td>
              <td>{item.population}</td>
              <td>{item.region}</td>
              <td>{item.growth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
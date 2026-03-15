const BuildingsTable = ({ buildings }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px" }}>
      <h3>Buildings</h3>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Add Date</th>
            <th>Building Value</th>
            <th>Contents</th>
            <th>Business Income</th>
            <th>TIV</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {buildings.map((b) => (
            <tr key={b._id}>
              <td>{b.buildingName}</td>

              <td>{b.addDate}</td>

              <td>{b.buildingValue}</td>

              <td>{b.contents}</td>

              <td>{b.businessIncome}</td>

              <td>{b.tiv}</td>

              <td>{b.proRataTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuildingsTable;

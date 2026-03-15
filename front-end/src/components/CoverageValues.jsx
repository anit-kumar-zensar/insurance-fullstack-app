const CoverageValues = ({ proposal }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "20px",
      }}
    >
      <h3>Coverage Values</h3>

      <table>
        <tbody>
          <tr>
            <td>Building Value</td>
            <td>{proposal.buildingValue}</td>
          </tr>

          <tr>
            <td>Contents</td>
            <td>{proposal.contents}</td>
          </tr>

          <tr>
            <td>Business Income</td>
            <td>{proposal.businessIncome}</td>
          </tr>

          <tr>
            <td>Total Insured Value</td>
            <td>{proposal.totalInsuredValue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CoverageValues;

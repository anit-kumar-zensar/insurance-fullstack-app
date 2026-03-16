const ProgramCosts = ({ proposal }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "20px",
      }}
    >
      <h3>Insurance Programs</h3>
      <table>
        <tbody>
          <tr>
            <td>Property Program</td>
            <td>{proposal.propertyProgramAnnual}</td>
            <td>{proposal.propertyProgramProrated}</td>
          </tr>

          <tr>
            <td>Liability Program</td>
            <td>{proposal.liabilityProgramAnnual}</td>
            <td>{proposal.liabilityProgramProrated}</td>
          </tr>

          <tr>
            <td>Environmental</td>
            <td>{proposal.environmentalAnnual}</td>
            <td>{proposal.environmentalProrated}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProgramCosts;

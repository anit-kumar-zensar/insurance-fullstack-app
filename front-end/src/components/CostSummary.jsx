const CostSummary = ({ proposal }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "20px",
      }}
    >
      <h3>Estimated Costs</h3>
      <p>Estimated Annual Cost: {proposal.totalAnnualCost}</p>
      <p>Estimated ProRated Cost: {proposal.totalProratedCost}</p>
    </div>
  );
};

export default CostSummary;

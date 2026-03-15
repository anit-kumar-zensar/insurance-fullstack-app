const ProposalHeader = ({ proposal }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "20px",
      }}
    >
      <h2>{proposal.portfolioName}</h2>

      <p>
        Coverage Term: {proposal.coverageStart} - {proposal.coverageEnd}
      </p>

      <p>Address: {proposal.address}</p>

      <p>
        {proposal.city}, {proposal.state} {proposal.zip}
      </p>

      <p>CAT Load Category: {proposal.catLoadCategory}</p>
    </div>
  );
};

export default ProposalHeader;

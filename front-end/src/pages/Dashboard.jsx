import { useEffect, useState } from "react";

import API from "../services/api";

import ProposalHeader from "../components/ProposalHeader";
import CoverageValues from "../components/CoverageValues";
import ProgramCosts from "../components/ProgramCosts";
import CostSummary from "../components/CostSummary";
import BuildingsTable from "../components/BuildingsTable";

const Dashboard = () => {
  const [proposal, setProposal] = useState(null);
  const [buildings, setBuildings] = useState([]);

  const fetchData = async () => {
    const res = await API.get("/proposals/dashboard/YOUR_PROPOSAL_ID");

    setProposal(res.data.proposal);
    setBuildings(res.data.buildings);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!proposal) return <p>Loading...</p>;

  return (
    <div style={{ width: "900px", margin: "auto" }}>
      <h1>Insurance Dashboard</h1>
      <ProposalHeader proposal={proposal} />

      <CoverageValues proposal={proposal} />

      <ProgramCosts proposal={proposal} />

      <CostSummary proposal={proposal} />

      <BuildingsTable buildings={buildings} />
    </div>
  );
};

export default Dashboard;

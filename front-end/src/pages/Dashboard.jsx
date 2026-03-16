import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProposalHeader from "../components/ProposalHeader";
import CoverageValues from "../components/CoverageValues";
import ProgramCosts from "../components/ProgramCosts";
import CostSummary from "../components/CostSummary";
import BuildingsTable from "../components/BuildingsTable";
import API from "../services/api";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [proposal, setProposal] = useState(null);
  const [buildings, setBuildings] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const res = await API.get("/proposals/dashboard/" + id);
      setProposal(res.data.proposal);
      setBuildings(res.data.buildings);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!proposal) {
    return <p>Loading proposal data...</p>;
  }

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

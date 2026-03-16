import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const ProposalPage = () => {
  const navigate = useNavigate();
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  // Get userId from localStorage (saved after login)
  console.log("Login from context:", user);
  const userId = localStorage.getItem("userId") || (user ? user.id : null);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        setLoading(true);
        // Fetch proposals for the user
        const res = await API.get(`/proposals/user/${userId}`);
        setProposals(res.data);
      } catch (err) {
        console.error(err);
        alert("Error fetching proposals");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchProposals();
    } else {
      navigate("/login"); // redirect if not logged in
    }
  }, [userId, navigate]);

  const handleClick = (proposalId) => {
    // Navigate to Dashboard page for this proposal
    navigate(`/dashboard/${proposalId}`);
  };

  if (loading) return <p>Loading proposals...</p>;

  if (proposals.length === 0)
    return <p>No proposals found. Please create one.</p>;

  return (
    <div style={{ maxWidth: "900px", margin: "auto", fontFamily: "Arial" }}>
      <h2>Your Proposals</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Portfolio Name
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Building Value
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Contents
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Business Income
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((p) => (
            <tr key={p._id}>
              <td style={{ padding: "10px" }}>{p.portfolioName}</td>
              <td style={{ padding: "10px" }}>{p.buildingValue}</td>
              <td style={{ padding: "10px" }}>{p.contents}</td>
              <td style={{ padding: "10px" }}>{p.businessIncome}</td>
              <td style={{ padding: "10px" }}>
                <button onClick={() => handleClick(p._id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProposalPage;

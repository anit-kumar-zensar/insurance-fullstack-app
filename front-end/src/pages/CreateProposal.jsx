import { useState } from "react";
import API from "../services/api";
import AddBuildingForm from "../components/AddBuildingForm";

const CreateProposal = () => {
  const [isProposalCreated, setIsProposalCreated] = useState(false);
  const [proposalId, setProposalId] = useState(null);
  const date = new Date();

  // Initialize form state
  const [form, setForm] = useState({
    portfolioName: "",
    coverageStart: date.toISOString().split("T")[0],
    coverageEnd: "",
    effectiveDate: date.toISOString().split("T")[0],
    address: "",
    city: "",
    state: "",
    zip: "",
    catLoadCategory: "",
    glExposureSqft: "",
    glExposureUnits: "",
    buildingValue: "",
    contents: "",
    businessIncome: "",
    propertyProgramAnnual: "",
    propertyProgramProrated: "",
    liabilityProgramAnnual: "",
    liabilityProgramProrated: "",
    environmentalAnnual: "",
    environmentalProrated: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Include userId from login
      const userId = localStorage.getItem("userId");
      const res = await API.post("/proposals", { ...form, userId });
      // alert("Proposal created successfully!");
      // navigate(`/dashboard/${res.data._id}`);
      if (res?.data?._id) {
        setIsProposalCreated(true);
        setProposalId(res.data._id);
      }
    } catch (err) {
      console.error(err);
      alert("Error creating proposal");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", fontFamily: "Arial" }}>
      {isProposalCreated ? (
        <>
          <p>Proposal created successfully! Now you can add buildings.</p>
          <AddBuildingForm proposalId={proposalId} refresh={() => {}} />
        </>
      ) : (
        <>
          <h2>Create Proposal</h2>
          <form onSubmit={handleSubmit}>
            {Object.keys(form).map((key) => (
              <div key={key} style={{ marginBottom: "12px" }}>
                <label style={{ display: "block", marginBottom: "4px" }}>
                  {key}
                </label>
                <input
                  type="text"
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}

            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit Proposal
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CreateProposal;

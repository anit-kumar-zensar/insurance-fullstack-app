import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const AddBuildingForm = ({ proposalId }) => {
  const [form, setForm] = useState({
    buildingName: "",
    buildingValue: "",
    contents: "",
    businessIncome: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/buildings", {
      ...form,
      proposalId,
    });
    navigate(`/dashboard/${proposalId}`);
  };

  return (
    <>
      <h3>Add Building</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="buildingName"
          placeholder="Building Name"
          onChange={handleChange}
        />
        <input
          name="buildingValue"
          placeholder="Building Value"
          onChange={handleChange}
        />
        <input name="contents" placeholder="Contents" onChange={handleChange} />
        <input
          name="businessIncome"
          placeholder="Business Income"
          onChange={handleChange}
        />
        <button type="submit">Add Building</button>
      </form>
    </>
  );
};

export default AddBuildingForm;

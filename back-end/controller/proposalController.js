const Proposal = require("../models/Proposal");
const Building = require("../models/Building");

exports.createProposal = async (req, res) => {
  try {
    const {
      buildingValue,
      contents,
      businessIncome,

      propertyProgramAnnual,
      liabilityProgramAnnual,
      environmentalAnnual,

      propertyProgramProrated,
      liabilityProgramProrated,
      environmentalProrated,
    } = req.body;

    const totalInsuredValue =
      Number(buildingValue) + Number(contents) + Number(businessIncome);

    const totalAnnualCost =
      Number(propertyProgramAnnual || 0) +
      Number(liabilityProgramAnnual || 0) +
      Number(environmentalAnnual || 0);

    const totalProratedCost =
      Number(propertyProgramProrated || 0) +
      Number(liabilityProgramProrated || 0) +
      Number(environmentalProrated || 0);

    const proposal = await Proposal.create({
      ...req.body,
      totalInsuredValue,
      totalAnnualCost,
      totalProratedCost,
    });

    res.status(201).json(proposal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find();

    res.json(proposals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProposalById = async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id);

    res.json(proposal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getProposalByUserId = async (req, res) => {
  try {
    const proposals = await Proposal.find({ userId: req.params.userId });
    res.json(proposals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProposal = async (req, res) => {
  try {
    const proposal = await Proposal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(proposal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Dashboard: proposal + related buildings
exports.getProposalDashboard = async (req, res) => {
  try {
    console.log("Fetching dashboard for proposal ID:", req.params.id);
    const proposal = await Proposal.findById(req.params.id);
    console.log("Proposal found:", proposal);
    if (!proposal)
      return res.status(404).json({ message: "Proposal not found" });

    const buildings = await Building.find({ proposalId: req.params.id });
    console.log("Related buildings found:", buildings);

    res.json({ proposal, buildings });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ message: error.message });
  }
};

// Why Calculate in Backend (Interview Answer)

// If interviewer asks:

// Why not calculate on frontend?

// Answer:

// Business calculations should live in the backend to ensure consistency and prevent manipulation from the client side.

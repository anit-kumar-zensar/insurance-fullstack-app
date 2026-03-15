const Proposal = require("../models/Proposal");

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

// Why Calculate in Backend (Interview Answer)

// If interviewer asks:

// Why not calculate on frontend?

// Answer:

// Business calculations should live in the backend to ensure consistency and prevent manipulation from the client side.

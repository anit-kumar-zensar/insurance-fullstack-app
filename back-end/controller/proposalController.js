const Proposal = require("../models/Proposal");

exports.createProposal = async (req, res) => {
  try {
    const proposal = await Proposal.create(req.body);

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

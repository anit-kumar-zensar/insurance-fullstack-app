const express = require("express");
const router = express.Router();

const {
  createProposal,
  getProposals,
  getProposalById,
  updateProposal,
} = require("../controller/proposalController");

router.post("/", createProposal);

router.get("/", getProposals);

router.get("/:id", getProposalById);

router.put("/:id", updateProposal);

module.exports = router;

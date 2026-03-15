const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const {
  createProposal,
  getProposals,
  getProposalById,
  updateProposal,
} = require("../controller/proposalController");

router.post(
  "/",
  [
    body("portfolioName").notEmpty(),
    body("buildingValue").isNumeric(),
    body("contents").isNumeric(),
    body("businessIncome").isNumeric(),
  ],
  createProposal,
);

router.get("/", getProposals);

router.get("/:id", getProposalById);

router.put("/:id", updateProposal);

module.exports = router;

const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createProposal,
  getProposals,
  getProposalById,
  getProposalByUserId,
  updateProposal,
  getProposalDashboard,
} = require("../controller/proposalController");

router.post(
  "/",
  body("portfolioName").notEmpty(),
  body("buildingValue").isNumeric(),
  body("contents").isNumeric(),
  body("businessIncome").isNumeric(),
  createProposal,
);

router.get("/", auth, getProposals);
router.get("/:id", auth, getProposalById);
router.get("/user/:userId", auth, getProposalByUserId);
router.put("/:id", auth, updateProposal);
router.get("/dashboard/:id", auth, getProposalDashboard);

module.exports = router;

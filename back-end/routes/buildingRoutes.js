const express = require("express");
const router = express.Router();

const {
  addBuilding,
  getBuildings,
} = require("../controller/buildingController");

router.post("/", addBuilding);

router.get("/:proposalId", getBuildings);

module.exports = router;

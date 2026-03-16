const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
  addBuilding,
  getBuildings,
} = require("../controller/buildingController");

router.post("/", auth, addBuilding);
router.get("/:proposalId", auth, getBuildings);

module.exports = router;

// Why Protect APIs (Interview Answer)

// If interviewer asks:

// Why did you protect the APIs?

// You say:

// Since proposals contain sensitive insurance data, only authenticated users should access them.
// JWT middleware ensures only valid users can access the APIs.

const Building = require("../models/Building");

exports.addBuilding = async (req, res) => {
  try {
    const building = await Building.create(req.body);

    res.status(201).json(building);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBuildings = async (req, res) => {
  try {
    const buildings = await Building.find({
      proposalId: req.params.proposalId,
    });

    res.json(buildings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const mongoose = require("mongoose");

const BuildingSchema = new mongoose.Schema(
  {
    proposalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proposal",
    },

    buildingName: String,
    addDate: Date,

    buildingValue: Number,
    contents: Number,
    businessIncome: Number,

    tiv: Number,

    propertyTerrorTotal: Number,
    glProgramProrata: Number,
    proRataTotal: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Building", BuildingSchema);

// Why Separate Building Model (Interview Answer)

// A proposal can contain multiple buildings, so we keep buildings in a separate collection with a reference to the proposal.

// This is called One-to-Many relationship.

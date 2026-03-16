const mongoose = require("mongoose");

const ProposalSchema = new mongoose.Schema(
  {
    portfolioName: String,
    coverageStart: Date,
    coverageEnd: Date,
    effectiveDate: Date,

    address: String,
    city: String,
    state: String,
    zip: String,
    catLoadCategory: String,

    buildingValue: Number,
    contents: Number,
    businessIncome: Number,

    glExposureSqft: Number,
    glExposureUnits: Number,

    propertyProgramAnnual: Number,
    propertyProgramProrated: Number,

    liabilityProgramAnnual: Number,
    liabilityProgramProrated: Number,

    environmentalAnnual: Number,
    environmentalProrated: Number,

    totalInsuredValue: Number,
    totalAnnualCost: Number,
    totalProratedCost: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Proposal", ProposalSchema);

// Interview Explanation

// If interviewer asks:

// Why keep many fields in one proposal model?

// Answer:

// These fields represent a single insurance quote summary.
// Since they belong to the same proposal, storing them in one document simplifies reads and updates.

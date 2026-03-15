const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const proposalRoutes = require("./routes/proposalRoutes");
const buildingRoutes = require("./routes/buildingRoutes");

dotenv.config();

const PORT = process.env.PORT || 9000;

const app = express();
// connect database
connectDB();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  console.log("Hello World");
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);
app.use("/api/proposals", proposalRoutes);
app.use("/api/buildings", buildingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  console.log("Hello World");
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

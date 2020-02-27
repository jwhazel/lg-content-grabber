const express = require("express");
const app = express();
const cors = require("cors");
const sample = require("./sample.json");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json(sample);
});

app.listen(port, () => console.log(`Mock server listening on port ${port}!`));

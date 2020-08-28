require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.static("../client/build"));
app.use(express.json());
app.use(router);

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`); //eslint-disable-line
  });
}

module.exports = app;

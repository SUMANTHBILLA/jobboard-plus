const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", time: new Date() });
});

module.exports = app;
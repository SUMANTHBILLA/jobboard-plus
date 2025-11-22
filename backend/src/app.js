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

const Test = require("./models/Test");

app.get("/api/test", async (req, res) => {
  try {
    const doc = await Test.create({ message: "MongoDB is working!" });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
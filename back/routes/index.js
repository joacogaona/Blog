const express = require("express");
const router = express.Router();

// /api
router.get("/", (req, res) => {
  res.send("HOLA BLOG");
});

module.exports = router;

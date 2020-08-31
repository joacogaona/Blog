const express = require("express");
const router = express.Router();
const { findTags } = require("../controllers/tags");

router.get("/", findTags);

module.exports = router;

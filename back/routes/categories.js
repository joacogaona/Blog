const express = require("express");
const router = express.Router();
const { findCategories } = require("../controllers/categories");

router.get("/", findCategories);

module.exports = router;

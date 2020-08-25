const express = require("express");
const router = express.Router();
const { findSingleArticle } = require("../controllers/articles");

router.get("/:title", findSingleArticle);

module.exports = router;

const express = require("express");
const router = express.Router();
const { findSingleArticle, findArticles } = require("../controllers/articles");

router.get("/", findArticles);
router.get("/:title", findSingleArticle);

module.exports = router;

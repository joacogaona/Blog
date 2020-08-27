const express = require("express");
const router = express.Router();
const {
  findSingleArticle,
  findArticles,
  searchArticles,
  searchArticlesByTag,
  searchArticlesByAuthor,
} = require("../controllers/articles");

router.get("/search", searchArticles);
router.get("/tag/:tag", searchArticlesByTag);
router.get("/author/:author", searchArticlesByAuthor);
router.get("/", findArticles);
router.get("/:title", findSingleArticle);

module.exports = router;

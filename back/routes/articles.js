const express = require("express");
const router = express.Router();
const {
  findSingleArticle,
  findArticles,
  searchArticles,
  searchArticlesByTag,
  searchArticlesByAuthor,
  createArticle,
  editArticle,
  deleteArticle,
} = require("../controllers/articles");

router.get("/search", searchArticles);
router.get("/tag/:tag", searchArticlesByTag);
router.get("/author/:author", searchArticlesByAuthor);
router.get("/", findArticles);
router.get("/:title", findSingleArticle);
router.post("/create", createArticle);
router.patch("/edit", editArticle);
router.delete("/delete/:id", deleteArticle);

module.exports = router;

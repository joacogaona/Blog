const express = require("express");
const router = express.Router();
const articlesRouter = require("./articles");
const categoriesRouter = require("./categories");
// /api
router.use("/articles", articlesRouter);
router.use("/categories", categoriesRouter);

module.exports = router;

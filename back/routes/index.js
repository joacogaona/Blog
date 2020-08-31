const express = require("express");
const router = express.Router();
const articlesRouter = require("./articles");
const categoriesRouter = require("./categories");
const usersRouter = require("./users");
const tagsRouter = require("./tags");
// /api
router.use("/articles", articlesRouter);
router.use("/categories", categoriesRouter);
router.use("/users", usersRouter);
router.use("/tags", tagsRouter);

module.exports = router;

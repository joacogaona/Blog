const express = require("express");
const router = express.Router();

// /api
router.use("/articles", articlesRouter);

module.exports = router;

const { Article } = require("../models/index");

const findSingleArticle = (req, res) => {
  Article.findOne({ articleURL: req.params.title })
    .populate("articleAuthor")
    .populate("tags")
    .then((article) => res.send(article));
};

module.exports = { findSingleArticle };

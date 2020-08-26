const { Article } = require("../models/index");

const findSingleArticle = (req, res) => {
  Article.findOne({ articleURL: req.params.title })
    .populate("articleAuthor")
    .populate("tags")
    .then((article) => res.send(article));
};

const findArticles = (req, res) => {
  Article.find()
    .populate("articleAuthor")
    .populate("tags")
    .then((articles) => {
      res.send(articles);
    });
};

module.exports = { findSingleArticle, findArticles };

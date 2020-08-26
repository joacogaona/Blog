const { Article } = require("../models/index");

const findSingleArticle = (req, res) => {
  Article.findOne({ articleURL: req.params.title }).then((article) =>
    res.send(article)
  );
};

const findArticles = (req, res) => {
  Article.find()
    /* .populate("articleAuthor") */
    .populate("tags")
    /* .populate("categories") */
    .then((articles) => {
      console.log(articles, "ARRE");
      res.send(articles);
    });
};

module.exports = { findSingleArticle, findArticles };

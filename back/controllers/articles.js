const { Article } = require("../models/indexq");

export const findSingleArticle = (req, res) => {
  Article.findOne({ articleURL: req.params.title }).then((article) =>
    res.send(article)
  );
};

module.exports = { findSingleArticle };

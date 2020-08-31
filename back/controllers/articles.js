const { Article, Tag, User } = require("../models/index");

const findSingleArticle = (req, res) => {
  Article.findOne({ articleURL: req.params.title, isEliminated: false })
    .populate("articleAuthor")
    .populate("tags")
    .then((article) => res.send(article));
};

const findArticles = (req, res) => {
  Article.find({ isEliminated: false })
    .populate("articleAuthor")
    .populate("tags")
    .then((articles) => {
      res.send(articles);
    });
};

const searchArticlesByTag = (req, res) => {
  Tag.findOne({ tagTitle: req.params.tag }).then((tag) => {
    Article.find({ tags: tag._id })
      .populate("articleAuthor")
      .populate("tags")
      .then((articles) => {
        res.send(articles);
      });
  });
};

const searchArticlesByAuthor = (req, res) => {
  const [firstName, lastName] = req.params.author.split("-");
  User.findOne({
    firstName: firstName.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }),
    lastName: lastName.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }),
  }).then((author) => {
    Article.find({ articleAuthor: author._id })
      .populate("articleAuthor")
      .populate("tags")
      .then((articles) => {
        res.send(articles);
      });
  });
};

const searchArticles = (req, res) => {
  let searchWords = req.query.query.split(" ");
  let results = new Set([]);
  let resultsTitles = new Set([]);
  let array = [];
  for (var word of searchWords) {
    if (word.length > 2) {
      array.push(
        Article.find({
          articleURL: { $regex: word },
        }).then((result) => {
          for (var i = 0; i < result.length; i++) {
            if (!resultsTitles.has(result[i].articleTitle)) {
              results.add(result[i]);
              resultsTitles.add(result[i].articleTitle);
            }
          }
        })
      );
    }
  }
  Promise.all(array).then(() => {
    res.send([...results]);
  });
};

const createArticle = (req, res) => {
  Article.create(req.body).then((articleCreated) => {
    Article.findById(articleCreated._id)
      .populate("articleAuthor")
      .populate("tags")
      .then((article) => res.send(article));
  });
};

const editArticle = (req, res) => {
  Article.updateOne({ _id: req.body._id }, req.body)
    .then(() =>
      Article.findById(req.body._id).populate("articleAuthor").populate("tags")
    )
    .then((article) => {
      res.send(article);
    });
};

module.exports = {
  findSingleArticle,
  findArticles,
  searchArticles,
  searchArticlesByTag,
  searchArticlesByAuthor,
  createArticle,
  editArticle,
};

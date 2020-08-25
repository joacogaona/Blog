const { Category } = require("../models/index");

const findCategories = (req, res) => {
  Category.find().then((categories) => res.send(categories));
};

module.exports = { findCategories };

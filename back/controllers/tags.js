const { Tag } = require("../models/index");

const findTags = (req, res) => {
  Tag.find().then((tags) => {
    res.send(tags);
  });
};

module.exports = {
  findTags,
};

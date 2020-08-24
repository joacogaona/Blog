const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var articleSchema = new Schema({
  articleTitle: {
    type: String,
    required: true,
  },
  articleDescription: {
    type: String,
    required: true,
  },

  articleContent: {
    type: String,
    required: true,
  },
  articleAuthor: [
    {
      type: Schema.Types.ObjectId,
      ref: "authors",
    },
  ],

  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "tags",
    },
  ],
});

const Article = mongoose.model("articles", articleSchema);
module.exports = Article;

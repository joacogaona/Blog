const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var articleSchema = new Schema({
  articleTitle: {
    type: String,
    required: true,
  },

  metaDescription: {
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

  readingTime: {
    type: Number,
  },

  imageArticle: {
    type: String,
    default:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fprofile.es%2Fpro%2Fwp-content%2Fmedia%2Flenguajes-de-programacion-mas-populares-2019.jpg&imgrefurl=https%3A%2F%2Fprofile.es%2Fblog%2Fcuales-son-los-lenguajes-de-programacion-mas-populares%2F&tbnid=QbpAB--CJBzLIM&vet=12ahUKEwjW6MP6urbrAhXGArkGHV0gAD4QMygAegUIARDNAQ..i&docid=p6uhXhjrRcda2M&w=1800&h=840&q=programacion&ved=2ahUKEwjW6MP6urbrAhXGArkGHV0gAD4QMygAegUIARDNAQ",
  },

  articleURL: {
    type: String,
  },

  isEliminated: {
    type: Boolean,
    default: false,
  },

  articleAuthor: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],

  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
  ],

  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "tags",
    },
  ],
});

articleSchema.pre("save", async function save(next) {
  if (!this.isModified("articleTitle")) return next();
  try {
    this.articleURL = this.articleTitle
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    return next();
  } catch (err) {
    return next(err);
  }
});

const Article = mongoose.model("articles", articleSchema);
module.exports = Article;

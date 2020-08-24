const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var categorySchema = new Schema({
  categoryTitle: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;

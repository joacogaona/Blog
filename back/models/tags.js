const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var tagSchema = new Schema({
  tagTitle: {
    type: String,
    required: true,
  },
});

const Tag = mongoose.model("tags", tagSchema);
module.exports = Tag;

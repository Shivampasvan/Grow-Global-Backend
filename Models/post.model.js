const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: String,
  description: String,
  status: Boolean,
  user: String,
});

const PostModel = mongoose.model("post", postSchema);

module.exports = {
  PostModel,
};

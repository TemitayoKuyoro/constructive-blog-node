const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  Post.find()
    .then((post) => console.log(post))
    .catch((err) => console.log(err));
};

exports.getPost = (req, res, next) => {
  const newsId = req.params.newsId;
  Post.findById(newsId)
    .then((post) => console.log(post))
    .catch((err) => console.log(err));
};

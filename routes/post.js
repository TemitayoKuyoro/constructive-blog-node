const express = require("express");

const postController = require("../controllers/feed");

const router = express.Router();

router.get("/news/:newsId", postController.getPost);
router.get("/", postController.getPosts);

module.exports = router;

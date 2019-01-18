const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweet");

router.post("/", tweetController.create);
router.get("/new", tweetController.new);
router.get("/:id", tweetController.show);
router.put("/:id", tweetController.update);

module.exports = router;

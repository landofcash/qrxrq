const express = require("express");
const { shortenUrl } = require("../controllers/shortenController");
const { redirectUrl } = require("../controllers/redirectController");

const router = express.Router();

router.post("/shorten", shortenUrl);
router.get("/:shortId", redirectUrl);

module.exports = router;

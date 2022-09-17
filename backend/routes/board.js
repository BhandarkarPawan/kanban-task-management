const express = require("express");
const data = require("../data/data.json");

const router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
    res.json(data);
});

module.exports = router;

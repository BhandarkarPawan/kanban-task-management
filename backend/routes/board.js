const express = require("express");
const data = require("../data/data.json");

const router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
    res.json(data);
});

router.post("/", function (req, res, next) {
    const { title, content } = req.body;
    data.push({ title, content });
    res.json(data);
});

module.exports = router;

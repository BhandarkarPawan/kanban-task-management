const express = require("express");
const data = require("../data/data.json");
const { getBoard } = require("../controllers/boardController");

const router = express.Router();
/* GET home page. */
router.get("/", getBoard);

router.post("/", function (req, res, next) {
    const { title, content } = req.body;
    data.push({ title, content });
    res.json(data);
});

module.exports = router;

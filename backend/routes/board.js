const express = require("express");
const Board = require("../models/board.js");

const router = express.Router({ mergeParams: true });

router.get("/", async function (req, res, next) {
    const allBoards = await Board.find({});
    res.json(allBoards);
});

router.post("/", async function (req, res, next) {
    let { name, columns } = req.body;
    if (!columns) {
        columns = [];
    }
    if (!name) {
        // error
        res.status(400).json({ error: "Board name is required" });
    }
    const newBoard = {
        name,
        columns,
    };
    const board = new Board(newBoard);
    try {
        await board.save();
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: "Error saving board", error: err.toString() });
    }
    res.status(200).json(board);
});

router.put("/:id", async function (req, res, next) {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        // error
        res.status(400).json({ error: "Board name is required" });
    }
    Board.findById(id, (err, board) => {
        if (err) {
            return res.status(500).json({
                message: "Error updating board",
                error: err.toString(),
            });
        }
        if (!board) {
            return res.status(404).json({ message: "Board not found" });
        }
        board.name = name;
        board.save();
        res.status(200).json(board);
    });
});

router.delete("/:id", async function (req, res, next) {
    const { id } = req.params;
    Board.findByIdAndDelete(id, (err, board) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting board",
                error: err.toString(),
            });
        }
        if (!board) {
            return res.status(404).json({ message: "Board not found" });
        }
        res.status(200).json(board);
    });
});

module.exports = router;

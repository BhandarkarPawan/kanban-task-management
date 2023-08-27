const express = require("express");
const { Board, Column, Task } = require("../models");

const router = express.Router({ mergeParams: true });
const DEFAULT_COLUMN_COLOR = "#49C4E5";

router.get("/", async function (req, res, next) {
    const allBoards = await Board.find().populate("columns");

    for (const board of allBoards) {
        await board.populate("tasks");
        for (const task of board.tasks) {
            await task.populate("subtasks");
            await task.populate("status");
        }
    }
    res.json(allBoards);
});

router.post("/", async function (req, res, next) {
    let { name, columns } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Board name is required" });
    }
    const board = new Board({ name });
    try {
        if (columns.length > 0) {
            for (let i = 0; i < columns.length; i++) {
                console.log(!columns[i].color);
                if (!columns[i].color) {
                    columns[i].color = DEFAULT_COLUMN_COLOR;
                }
                const newColumn = new Column({
                    name: columns[i].name,
                    color: columns[i].color,
                    board: board._id,
                });
                await newColumn.save();
                board.columns.push(newColumn._id);
            }
        }
        await board.save();
        console.log("Board saved");
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Error saving column",
            error: err.toString(),
        });
    }

    await board.populate("columns");
    res.status(201).json(board);
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

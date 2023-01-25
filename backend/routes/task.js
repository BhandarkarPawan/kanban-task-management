const express = require("express");
const router = express.Router();

const Task = require("../models/task");

router.post("/", async function (req, res, next) {
    const { boardId, columnId } = req.params;
    let { name, description, status, subtasks } = req.body;
    if (!name) {
        // error
        res.status(400).json({ error: "Task name is required" });
    }
    if (!status){
        status = "todo";
    }
    if (!subtasks) {
        subtasks = [];
    }
    const task = new Task({ name, description, status, subtasks, column: columnId });
    try {
        await task.save();
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Error saving task", error: err.toString() });
    }
    res.status(200).json(task);
});

router.put("/:taskId", async function (req, res, next) {
    const { boardId, columnId, taskId } = req.params;
    const { name, description, status, subtasks } = req.body;
    if (!name && !description && !status && !subtasks) {
        // error
        res.status(400).json({ error: "Task name or description or status or subtasks is required" });
    }
    Task.findOne({ _id: taskId }, async (err, task) => {
        if (err) {
            return res.status(500).json({message: "Error updating task", error: err.toString()});
        }
        if (!task) {
            return res.status(404).json({message: "Task not found"});
        }
        if (name) task.name = name;
        if (description) task.description = description;
        if (status) task.status = status;
        if (subtasks) task.subtasks = subtasks;
        await task.save();
        res.status(200).json(task);
    });
});

router.delete("/:taskId", async function (req, res, next) {
    const { boardId, columnId, taskId } = req.params;
    Task.findOneAndDelete({ _id: taskId }, (err, task) => {
        if (err) {
            return res.status(500).json({ message: "Error deleting task", error: err.toString() });
        }
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    });
});

module.exports = router;
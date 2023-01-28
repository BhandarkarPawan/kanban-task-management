const express = require("express");
const { Task, Column, SubTask } = require("../models");

const router = express.Router({ mergeParams: true });

router.post("/", async function (req, res, next) {
    const { boardId, columnId } = req.params;
    let { title, description, status, subtasks } = req.body;

    if (!title) {
        // error
        return res.status(400).json({ error: "Task title is required" });
    }
    if (!description) {
        // error
        return res.status(400).json({ error: "Task description is required" });
    }
    if (!status) {
        status = "todo";
    }

    const task = new Task({
        title,
        description,
        status,
        column: columnId,
        subtasks: [],
    });

    try {
        const column = await Column.findById(columnId);
        column.tasks.push(task._id);
        if (!subtasks) {
            subtasks = [];
        } else {
            for (const st of subtasks) {
                const subtask = new SubTask({
                    title: st.title,
                    isCompleted: st.isCompleted,
                    task: task._id,
                });
                await subtask.save();
                task.subtasks.push(subtask._id);
            }
        }
        await task.save();
        await column.save();
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: "Error saving task", error: err.toString() });
    }
    res.status(200).json(task);
});

router.put("/:taskId", async function (req, res, next) {
    const { boardId, columnId, taskId } = req.params;
    const { title, description, status, subtasks } = req.body;
    if (!title && !description && !status && !subtasks) {
        // error
        res.status(400).json({
            error: "Task title or description or status or subtasks is required",
        });
    }
    Task.findOne({ _id: taskId }, async (err, task) => {
        if (err) {
            return res.status(500).json({
                message: "Error updating task",
                error: err.toString(),
            });
        }
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        if (title) task.title = title;
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
            return res.status(500).json({
                message: "Error deleting task",
                error: err.toString(),
            });
        }
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    });
});

module.exports = router;

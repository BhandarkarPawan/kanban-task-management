const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    column: {
        type: Schema.Types.ObjectId,
        ref: "Column",
        required: true,
    },
});

taskSchema.virtual("subtasks", {
    ref: "SubTask",
    localField: "_id",
    foreignField: "task",
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

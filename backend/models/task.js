const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
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

TaskSchema.virtual("subtasks", {
    ref: "SubTask",
    localField: "_id",
    foreignField: "task",
});

module.exports = TaskSchema;

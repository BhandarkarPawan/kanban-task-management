const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const subTaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false,
    },
    task: {
        type: Schema.Types.ObjectId,
        ref: "Task",
        required: true,
    },
});

const SubTask = mongoose.model("SubTask", subTaskSchema);

module.exports = SubTask;

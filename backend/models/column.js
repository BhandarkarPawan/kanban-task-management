const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const columnSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: "Board",
        required: true,
    },
});

columnSchema.virtual("tasks", {
    ref: "Task",
    localField: "_id",
    foreignField: "column",
});

const Column = mongoose.model("Column", columnSchema);

module.exports = Column;

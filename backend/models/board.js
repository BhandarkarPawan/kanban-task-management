const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
    },
});

boardSchema.virtual("columns", {
    ref: "Column",
    localField: "_id",
    foreignField: "board",
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;

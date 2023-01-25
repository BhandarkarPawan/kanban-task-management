const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
    },
});

BoardSchema.virtual("columns", {
    ref: "Column",
    localField: "_id",
    foreignField: "board",
});

module.exports = BoardSchema;

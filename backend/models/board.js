const {mongoose} = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    columns: {
        //n to n relationship
    }
});

const Board = mongoose.model('board', boardSchema);

module.exports = Board;
const {mongoose} = require('mongoose');
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
    },
});

const Column = mongoose.model('Column', columnSchema);

module.exports = Column;
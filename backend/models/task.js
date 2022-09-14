const {mongoose} = require('mongoose');
const Schema = mongoose.Schema;

const subtaskSchema = new Schema({
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
        //n to n relationship
    },
    subtasks: {

    }
});

const Subtask = mongoose.model('subtask', subtaskSchema);

module.exports = Subtask;
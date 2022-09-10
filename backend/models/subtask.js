const {mongoose} = require('mongoose');
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
        //n to n relationship
    },
    subtasks: {

    }
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
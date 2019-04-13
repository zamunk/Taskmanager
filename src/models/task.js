const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task',{
    completed: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = Task
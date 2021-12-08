const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: Array,
        required: true
    },
    code: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Course', courseSchema);
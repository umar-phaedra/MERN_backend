const mongoose = require("mongoose");

const Schema = mongoose.Schema 
const TaskModel = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    status:{
        type: String,
        default: 'ACTIVE' // ACTIVE | COMPLETED
        }
}, {
    timestamps: true,
    versionKey:false
})

module.exports = mongoose.model('tasks', TaskModel)
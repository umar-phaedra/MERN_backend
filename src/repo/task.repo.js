const taskModel = require("../model/task.model");

const getAllTask = async () => {
    return await taskModel.find({})
}

const getTaskById = async (id) => {
    return await taskModel.findById(id)
}

const createTask = async ({name, description}) => {
    return await taskModel.create({name, description})
}

const deleteTask = async (_id) => {
    return await taskModel.findOneAndDelete({_id})
}

const updateTask = async (id, status) => {
    return await taskModel.findByIdAndUpdate(id, {status}, {new: true})
}

module.exports = {
    getAllTask,
    getTaskById,
    createTask,
    deleteTask,
    updateTask,
}

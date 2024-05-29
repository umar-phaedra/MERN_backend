const tasksRepo = require('../repo/task.repo')

const getAllTasks = async (req, res) => {
    const tasks = await tasksRepo.getAllTask()
    res.status(200).json(tasks)
}

const createTask = async (req, res) => {
    const name = req.body?.name
    const description = req.body?.description
    const task = await tasksRepo.createTask({name, description})
    res.status(201).json(task)
}

const deleteTask = async (req, res) => {
    const taskId = req.params.taskId

    const isExist = await tasksRepo.getTaskById(taskId)
    if (!isExist) return res.status(404).json({ message: 'Task not found!' })

    const task = await tasksRepo.deleteTask(taskId)
    res.status(200).json(task)
}

const updateTask = async (req, res) => {
    const taskId = req.params.taskId
    const {status} = req.body

    const isExist = await tasksRepo.getTaskById(taskId)
    if (!isExist) return res.status(404).json({ message: "Task not found" })

    const task = await tasksRepo.updateTask(taskId, status)
    res.status(200).json({ message: "Task updated succssfully", task })
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask
}


const express = require('express')
const router = express()
const taskController = require('../../controllers/tasks.controller')


router.get('/', taskController.getAllTasks)

router.post('/', taskController.createTask)

router.delete('/:taskId', taskController.deleteTask )

router.put('/:taskId', taskController.updateTask)

module.exports = router
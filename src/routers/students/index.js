const express = require('express')
const router = express()
const studentController = require('../../controllers/student_controller')

router.get('/', studentController.getAllStudent)
router.post('/', studentController.createStudent)
router.delete('/:studentId', studentController.deleteStudent)
router.put('/:studentId', studentController.updateStudent)

module.exports = router
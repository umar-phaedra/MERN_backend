const express = require('express')
const { getAllUsers, createUser, deleteUser } = require('../../controllers/users.controller')
const router = express()



router.get('/', getAllUsers)

router.post('/', createUser)

router.delete('/:userId', deleteUser)

module.exports = router
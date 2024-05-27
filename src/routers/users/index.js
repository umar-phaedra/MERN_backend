const express = require('express')
const { getAllUsers, createUser, deleteUser, updateUser } = require('../../controllers/users.controller')
const router = express()



router.get('/', getAllUsers)

router.post('/', createUser)

router.delete('/:userId', deleteUser)
router.put('/:userId/:newName', updateUser)

module.exports = router
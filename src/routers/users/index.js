const express = require('express')
const router = express()

let users = [
    {
        id: 1,
        name: 'Younis'
    },
    {
        id: 2,
        name: 'Waqas'
    },

]

router.get('/', (req, res) => {
    res.status(200).json(users)
})

router.post('/', (req, res) => {
    users.push({
        id: 3,
        name: 'Faisal'
    })
    res.status(201).json(users)
})

router.delete('/:userId', (req, res) => {
    const userId = +req.params.userId

    const isExist = !!users.find(user => user.id === userId)
    if (!isExist) return res.status(404).json({ message: 'User not found!' })

    users = users.filter(user => user.id !== userId)
    res.status(201).json(users)
})

module.exports = router
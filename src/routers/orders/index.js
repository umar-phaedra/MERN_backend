const express = require('express')
const router = express()

const orders = [
    {
        id: 1,
        name: 'Order 1'
    },
    {
        id: 2,
        name: 'Order 2'
    },

]

router.get('/', (req, res) => {
    res.status(200).json(orders)
})


module.exports = router
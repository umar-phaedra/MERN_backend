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

router.get('/:orderId', (req, res) => {
    const orderId = +req.params.orderId
    res.status(200).json(orders.find(order => order.id === orderId))
})


module.exports = router
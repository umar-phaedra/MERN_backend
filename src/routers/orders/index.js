const express = require('express')
const { getAllOrders, getOrder, deleteOrder, addOrder } = require('../../controllers/orders.controller')
const router = express()



router.get('/', getAllOrders)

router.get('/:orderId', getOrder)

router.post('/', addOrder)

router.delete('/orderId', deleteOrder)


module.exports = router
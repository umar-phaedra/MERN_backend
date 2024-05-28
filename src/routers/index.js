const express = require('express')
const UsersRouter = require('./users')
const ProductsRouter = require('./products')
const OrdersRouter = require('./orders')
const TaskRouter = require('./tasks')
const router = express()

// v1/users
// Users
router.use('/users', UsersRouter)

// v1/products
// // Products
router.use('/products', ProductsRouter)

// v1/orders
// // Orders
router.use('/orders', OrdersRouter)

router.use('/tasks', TaskRouter)

module.exports = router





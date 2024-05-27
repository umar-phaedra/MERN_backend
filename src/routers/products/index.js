const express = require('express')
const { getAllProducts, getProduct } = require('../../controllers/products.controller')
const router = express()



// localhost:3000/products
router.get('/', getAllProducts)

// localhost:3000/products/2
router.get('/:productId', getProduct)




module.exports = router
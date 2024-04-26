const express = require('express')
const router = express()

const products = [
    {
        id: 1,
        name: 'Shirt'
    },
    {
        id: 2,
        name: 'Pent'
    },

]

// localhost:3000/products
router.get('/', (req, res) => {
    res.status(200).json(products)
})

// localhost:3000/products/2
router.get('/:productId', (req, res) => {
    const productId = +req.params.productId
    res.status(200).json(products?.find(product => product.id === productId))
})




module.exports = router
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

const getAllProducts = (req, res) => {
    res.status(200).json(products)
}

const getProduct = (req, res) => {
    const productId = +req.params.productId
    res.status(200).json(products?.find(product => product.id === productId))
}


module.exports = {
    getAllProducts,
    getProduct

}
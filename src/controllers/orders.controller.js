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

const getAllOrders = (req, res) => {
    res.status(200).json(orders)
}

const getOrder = (req, res) => {
    const orderId = +req.params.orderId
    res.status(200).json(orders.find(order => order.id === orderId))
}


const deleteOrder = (req, res) => {
    const orderIdId = +req.params.userId
    const seletedOrder = orders.find(user => user.id === userId)

    if (seletedOrder == -1) return res.status(200).json({ message: 'Order not found' })
    orders.splice(seletedOrder)
    res.status(200).json({ message: "Order deleted successfully" })

}

const addOrder = (req, res) => {
    orders.push[{
        id: '3',
        name: "youna"
    }]
    res.status(200).json(orders)
}

module.exports = {
    getAllOrders,
    getOrder,
    deleteOrder,
    addOrder
}
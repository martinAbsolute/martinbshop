const Order = require('../models/order')

const getAll = () => Product.find().populate('productList')
const create = (product) => Product.create(product)
const findById = (id) => Product.findById(id).populate('productList')
const update = ({ _id, ...rest }) => Product.update({ _id }, rest)
const deleteById = (id) => Product.deleteById(id)

module.exports = {
    getAll,
    create,
    findById,
    update,
    deleteById
}
const router = require('express').Router()

router.get('/', (req, res) => res.send(
    res.send('Welcome home!')
))

// User routing
const {
    getAll: getAllUsers,
    create: createUser,
    findById: findUserById,
    update: updateUser,
    deleteById: deleteUserById,
} = require('./controllers/users')
router.get('/user', getAllUsers)
router.post('/user', createUser)
router.get('/user/:id', findUserById)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUserById)

// Category routing 
const {
    getAll: getAllCategories,
    create: createCategory,
    findById: findCategoryById,
    update: updateCategory,
    deleteById: deleteCategoryById,
} = require('./controllers/categories')
router.get('/category', getAllCategories)
router.post('/category', createCategory)
router.get('/category/:id', findCategoryById)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', deleteCategoryById)

// Product routing
const {
    getAll: getAllProducts,
    create: createProduct,
    findById: findProductById,
    update: updateProduct,
    deleteById: deleteProductById,
} = require('./controllers/products')
router.get('/product', getAllProducts)
router.post('/product', createProduct)
router.get('/product/:id', findProductById)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProductById)

// Order routing
const {
    getAll: getAllOrders,
    create: createOrder,
    findById: findOrderById,
    update: updateOrder,
    deleteById: deleteOrderById,
} = require('./controllers/orders')
router.get('/order', getAllOrders)
router.post('/order', createOrder)
router.get('/order/:id', findOrderById)
router.put('/order/:id', updateOrder)
router.delete('/order/:id', deleteOrderById)

module.exports = router
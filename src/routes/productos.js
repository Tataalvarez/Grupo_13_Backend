const { Router } = require('express')
const router = Router()
const { getProductos, createProductos, getProducto, updateProductos, deleteProductos } = require('../controllers/productosController')

router.route('/')
  .get(getProductos)
  .post(createProductos)

router.route('/:id')
  .get(getProducto)
  .put(updateProductos)
  .delete(deleteProductos)

module.exports = router
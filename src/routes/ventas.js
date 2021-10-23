const { Router } = require('express')
const router = Router()
const { getVentas, createVentas, getVenta, updateVentas, deleteVentas } = require('../controllers/venatasController')

router.route('/')
  .get(getVentas)
  .post(createVentas)

router.route('/:id') // http://localhost:3001/api/ventas/45
  .get(getVenta)
  .put(updateVentas)
  .delete(deleteVentas)

module.exports = router
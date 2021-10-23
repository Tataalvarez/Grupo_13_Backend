const { Router } = require('express')
const router = Router()

const { getUsuarios, createUsuario, deleteUsuario } = require('../controllers/usuariosController')

router.route('/')
  .get(getUsuarios)
  .post(createUsuario)

router.route('/:id')
  .delete(deleteUsuario);

module.exports = router;
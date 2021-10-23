const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { usersController } = require('../controllers');

routes.post('/registrar',
    body('fullName', 'El nombre requerido, y debe estar entre(6,100) caracteres')
        .exists()
        .isLength({ min: 6, max: 100 }),
    body('passwprd', 'La contraseña es requqerida y debe estar entre(8,16) caracteres')
        .isLength({ min: 8, max: 16 }),
    usersController.createUser)
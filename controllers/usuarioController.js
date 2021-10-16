const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.crearUsuario = async (req, res) => {
  // Revisar si hay errores
  const errores = validationResult(req);
  if( !errores.isEmpty() ){
    return res.status(400).json({ errores: errores.array() })
  }

  // Extraer usuario y email (Destructuracion)
  const { email, password } = req.body;

  try {
    // Revisamos que el usuario registrado sea unico
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }
    
    // crea el nuevo usuario
    usuario = new Usuario(req.body);

    // Encriptar el password
    const salt = await bcryptjs.genSalt(10);
    usuario.password = await bcryptjs.hash(password, salt);

    // guardar el nuevo usuario
    await usuario.save();

    // Mensaje de confirmacion
    res.json({ msg: 'Usuario creado correctamente'});
  } catch (error) {
    console.log(error);
    res.status(400).send('Hubo un error');
  }
}
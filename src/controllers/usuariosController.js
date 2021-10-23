const usuariosCtrl = {};

const UsuarioModel = require("../models/Usuarios");

usuariosCtrl.getUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.find();
    res.json(usuarios);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

usuariosCtrl.createUsuario = async (req, res) => {
  try {
    const { username, rol, estado } = req.body;

    const newUsuario = new UsuarioModel({ username, rol, estado });
    await newUsuario.save();
    res.json("Usuario creado");
  } catch (e) {
    console.log(e);
    res.json(e.errmsg);
  }
};

usuariosCtrl.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  await UsuarioModel.findByIdAndDelete(id);
  res.json("Usuario eliminado");
};

module.esports = usuariosCtrl;

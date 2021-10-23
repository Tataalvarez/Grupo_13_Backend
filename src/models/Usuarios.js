const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema ({
  usuario: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  rol: Boolean,
  estado: String,
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('Usuario', usuarioSchema);
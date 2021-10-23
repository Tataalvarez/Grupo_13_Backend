const { Schema, model } = require('mongoose');

const productoSchema = new Schema ({
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  valorUnitario: Number,
  estado: Boolean,
  vendedor: String
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = model('Producto', productoSchema);
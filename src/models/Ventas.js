const { Schema, model } = require('mongoose');

const ventaSchema = new Schema ({
  cantidad: Number,
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  valorUnitario: Number,
  valorTotal: Number,
  nit: {
    type: Number,
    unique: true,
  },
  cliente: String,
  codigoVenta: {
    type: Number,
    unique: true,
    trim: true,
  },
  estado: Boolean,
  vendedor: String,
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = model('Venta', ventaSchema);
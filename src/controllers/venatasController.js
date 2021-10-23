const ventasCtrl = {};

const VentaModel = require('../models/Ventas')

ventasCtrl.getVentas = async (req, res) => {
  const ventas = await VentaModel.find()
  res.json(ventas)
}
ventasCtrl.createVentas = async (req, res) => {
  const { cantidad, descripcion, valorUnitario, valorTotal, nit, cliente, codigoVenta, estado, vendedor } = req.body;
  const newVenta = new VentaModel ({
    cantidad,
    descripcion,
    valorUnitario,
    valorTotal,
    nit,
    cliente,
    codigoVenta,
    estado,
    vendedor,
  })
  await newVenta.save()
  res.json({msg: 'Venta guardada'})
}
ventasCtrl.getVenta = async (req, res) => {
  const Venta = await VentaModel.findById(req.params.id)
  res.json(Venta)
}
ventasCtrl.updateVentas = async (req, res) => {
  const { cantidad, descripcion, valorUnitario, valorTotal, nit, cliente, codigoVenta, estado, vendedor } = req.body;
  await VentaModel.findByIdAndUpdate(req.params.id, {
    cantidad,
    descripcion,
    valorUnitario,
    valorTotal,
    nit,
    cliente,
    codigoVenta,
    estado,
    vendedor,
  })
  console.log(req.params.id, req.body)
  res.json({msg: 'Venta actualizada'})
}

ventasCtrl.deleteVentas = async (req, res) => {
  await VentaModel.findByIdAndDelete(req.params.id)
  res.json({msg: 'Venta eliminada'})
}

module.exports = ventasCtrl;
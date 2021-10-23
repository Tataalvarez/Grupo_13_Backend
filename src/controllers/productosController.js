const productosCtrl = {};

const ProductoModel = require('../models/Productos')

productosCtrl.getProductos = async (req, res) => {
  const productos = await ProductoModel.find()
  res.json(productos)
}
productosCtrl.createProductos = async (req, res) => {
  const { descripcion, valorUnitario, estado, vendedor } = req.body;
  const newProducto = new ProductoModel ({
    descripcion,
    valorUnitario,
    estado,
    vendedor,
  })
  await newProducto.save()
  res.json({msg: 'Productos guardados'})
}
productosCtrl.getProducto = async (req, res) => {
  const Producto = await ProductoModel.findById(req.params.id)
  res.json(Producto)
}
productosCtrl.updateProductos = async (req, res) => {
  const { descripcion, valorUnitario, estado, vendedor } = req.body;
  await ProductoModel.findByIdAndUpdate(req.params.id, {
    descripcion,
    valorUnitario,
    estado,
    vendedor
  })
  console.log(req.params.id, req.body)
  res.json({msg: 'Producto actualizado'})
}

productosCtrl.deleteProductos = async (req, res) => {
  await ProductoModel.findByIdAndDelete(req.params.id)
  res.json({msg: 'Producto eliminado'})
}

module.exports = productosCtrl;
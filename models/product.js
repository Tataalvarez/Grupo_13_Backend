const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    valor: Number,
    dedescripcion: String,
    estado: Boolean,

})

module.exports = mongoose.model('products',ProductSchema);
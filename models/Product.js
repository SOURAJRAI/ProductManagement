const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  rating: String,
});

const ProductModal= mongoose.model('Product', productSchema);
module.exports = ProductModal;
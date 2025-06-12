const Product= require('../models/Product');

//Create a new product
const addProduct = (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(savedProduct => res.json(savedProduct))
    .catch(err => res.status(500).json({ message: err.message }));
};

//update an existing product
const updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.status(500).json({ message: err.message }));
};

//delete a product
const deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Product deleted successfully' }))
    .catch(err => res.json({ message: err.message }));
};

//get all products with optional filters and sorting

const getProducts = (req, res) => {
  const { price, rating, sortBy, sortOrder } = req.query;
  const filter = {};
  const sort = {};

  if (price && !isNaN(price)) filter.price = Number(price);
  if (rating && !isNaN(rating)) filter.rating = Number(rating);
  if (sortBy) sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

  console.log('Filter:', filter, 'Sort:', sort);

  Product.find(filter)
    .sort(sortBy ? sort : {})
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ message: err.message }));
};


//get a product by id
const getProductById = (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) return res.json({ message: 'Product not found' });
      res.json(product);
    })
    .catch(err => res.json({ message: err.message }));
};


module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById
};

const express=require('express');
const router=express.Router();
const {addProduct, getProducts, getProductById, updateProduct, deleteProduct} = require('../controller/ProductController');

router.post('/addProduct', addProduct); 
router.get('/getProducts', getProducts); 
router.get('/getProductById/:id', getProductById); 
router.put('/updateProduct/:id', updateProduct); 
router.delete('/deleteProduct/:id', deleteProduct); 

module.exports = router;
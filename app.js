const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the Product API');
}
);

app.use('/api/products', productRoutes);

module.exports =app;
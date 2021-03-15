const express = require("express");
const app = express();

const rotaProduct = require('./routes/product');

app.use('/product', rotaProduct);

module.exports = app;
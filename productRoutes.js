// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//router.get('/get-record', productController.getrecord);
router.post('/add-info', productController.addinfo);
router.get('/search-player/:id',productController.searchdata);

//router.get('/products', productController.getProducts);

module.exports = router;

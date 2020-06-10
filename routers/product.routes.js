const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');


router.get('/product',productController.getAll);
router.post('/product',productController.postOne);

module.exports = router;
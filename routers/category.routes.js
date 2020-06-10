const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.controllers');

router.get('/category',categoryController.getAll);
router.post('/category',categoryController.postOne);

module.exports=router;
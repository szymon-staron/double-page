const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog.controller');

router.get('/blog',blogController.getAll);
router.post('/blog',blogController.postOne);

module.exports = router;
const express = require('express');
const router = express.Router();

const mainController = require('../controller/main.controller');

// Sample route
router.get('/', mainController.index);
router.get('/private', mainController.private);

module.exports = router;

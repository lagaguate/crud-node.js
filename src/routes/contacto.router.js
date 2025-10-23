const express = require('express');
const router = express.Router();

const contactoController = require('../controller/contacto.controller');

// Sample route
router.get('/', contactoController.index);
router.post('/', contactoController.submit);


module.exports = router;

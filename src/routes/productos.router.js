const express = require('express');
const router = express.Router();

const productoController = require('../controller/producto.controller');


router.get('/', productoController.index);
router.get('/:id', productoController.byproductoId);



module.exports = router;
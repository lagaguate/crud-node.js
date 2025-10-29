const express = require('express');
const router = express.Router();

const Controller = require('../controller/categorias.controller');

// Categorias
router.get('/create', Controller.create);
router.post('/', Controller.store);

router.get('/edit/:id', Controller.edit);
router.put('/update/:id', Controller.update);
router.get('/showdelete/:id', Controller.showDeleteConfirm);
router.delete('/delete/:id', Controller.deleteRecord);
router.get('/', Controller.index);
router.get('/:id', Controller.detail);

module.exports = router;

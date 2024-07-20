const express = require('express');
const { readAll, readById, create, updateById, deleteById } = require('./card.controller');

const router = express.Router()

router.get('/', readAll)
router.get('/:id', readById)
router.post('/', create)
router.put('/:id', updateById)
router.delete('/:id', deleteById)

module.exports = router;
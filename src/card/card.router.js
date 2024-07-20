const express = require('express');

const router = express.Router()

function teste(_, res) {
  res.send('Ok')
}

router.get('/', teste)
router.get('/:id', teste)
router.post('/', teste)
router.put('/:id', teste)
router.delete('/:id', teste)

module.exports = router;
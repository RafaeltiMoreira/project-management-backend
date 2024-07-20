const service = require('./card.service')

async function readAll(_, res) {
  const cards = await service.readAll()
  res.send(cards)
}

function readById(_, res) {
  res.send('Read By ID')
}

function create(_, res) {
  res.send('Create')
}

function updateById(_, res) {
  res.send('Update By ID')
}

function deleteById(_, res) {
  res.send('Delete By ID')
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}
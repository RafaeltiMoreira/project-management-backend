const service = require('./card.service')

async function readAll(_, res) {
  // Acesso a lista de cards no service
  const cards = await service.readAll()
  res.send(cards)
}

async function readById(req, res) {
  // Acesso a rota por ID do card no service
  const id = req.params.id
  const card = await service.readById(id)

  if (!card) {
    return res.status(404).send('Card não encontrado.')
  }
  res.send(card)
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
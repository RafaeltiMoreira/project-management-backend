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

async function create(req, res) {
  const newCard = req.body

  if (!newCard || !newCard.title) {
    return res.status(400).send('A requisição deve conter a propriedade `title`.')
  }

  await service.create(newCard)
  res.status(201).send(newCard)
}

async function updateById(req, res) {

  const id = req.params.id

  const newCard = req.body

  if (!newCard || !newCard.title) {
    return res.status(400).send('A requisição deve conter a propriedade `title`.')
  }
  await service.updateById(id, newCard)

  res.send(newCard)
}

async function deleteById(req, res) {
  const id = req.params.id

  // Remove o card pelo ID
  await service.deleteById(id)

  res.send('Card removido com sucesso ' + id)
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}
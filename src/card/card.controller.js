const card = require('./card.entity')
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
  // Adiciona no DB pelo service com validação
  const { error, value: newCard } = card.validate(req.body)

  if (error) {
    return res.status(400).send({ error: error.details[0].message })
  }

  await service.create(newCard)
  res.status(201).send(newCard)
}

async function updateById(req, res) {
  // Aualiza no DB pelo ID
  const id = req.params.id

  const { error, value: newCard } = card.validate(req.body)

  if (error) {
    return res.status(400).send({ error: error.details[0].message })
  }

  await service.updateById(id, newCard)

  res.send(newCard)
}

async function deleteById(req, res) {
  // Remove o card pelo ID
  const id = req.params.id

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
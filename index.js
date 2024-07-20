const express = require('express')
const app = express()

app.get('/', function (_, res) {
  res.send('Hello, World!')
})

const card = ['Menu Online', 'Sorteios X', 'Educação Infantil', 'Calc IMC']

app.get('/card', function (_, res) {
  res.send(card.filter(Boolean))
})

app.get('/card/:id', function (req, res) {
  const id = req.params.id
  const item = card[id - 1]

  res.send(item)
})

app.use(express.json())

app.post('/card', function (req, res) {
  const body = req.body

  const novoCard = body.title

  if (!novoCard) {
    return res.status(400).send('A requisição deve conter a propriedade `title`.')
  }

  if (card.includes(novoCard)) {
    return res.status(409).send('Título já existente para um Card.')
  }

  card.push(novoCard)
  res.status(201).send('Card adicionado com sucesso: ' + novoCard)
})

app.put('/card/:id', function (req, res) {
  const id = req.params.id
  const body = req.body
  const novoCard = body.title

  if (!novoCard) {
    return res.status(400).send('A requisição deve conter a propriedade `title`.')
  }

  if (card.includes(novoCard)) {
    return res.status(409).send('Título já existente para um Card.')
  }

  card[id - 1] = novoCard

  res.send('Card atualizado com sucesso: ' + id + ' - ' + novoCard)
})

app.delete('/card/:id', function (req, res) {
  const id = req.params.id
  delete card[id - 1]

  res.send('Card removido com sucesso ' + id)
})

app.listen(3001, function () {
  console.log('Aplicação rodando na porta https://localhost:3001')
})
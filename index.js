const express = require('express')
const app = express()

app.get('/', function (_, res) {
  res.send('Hello, World!')
})

const card = ['Menu Online', 'Sorteios X', 'Educação Infantil', 'Calc IMC']

app.get('/card', function (_, res) {
  res.send(card)
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
  card.push(novoCard)
  res.send('Card adicionado com sucesso: ' + novoCard)
})

app.put('/card/:id', function (req, res) {
  const id = req.params.id
  const body = req.body
  const novoCard = body.title
  card[id - 1] = novoCard

  res.send('Card atualizado com sucesso: ' + id + '-' + novoCard)
})

app.listen(3001, function () {
  console.log('Aplicação rodando na porta https://localhost:3001')
})
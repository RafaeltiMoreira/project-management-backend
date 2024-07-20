require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const dbUrl = process.env.DATABASE_URL
const dbName = 'db-api-restful-coders'

async function main() {
  const client = new MongoClient(dbUrl)
  await client.connect()
  console.log('Banco de dados conectado!')

  const db = client.db(dbName)
  const collection = db.collection('card')

  const app = express()

  app.get('/', function (_, res) {
    res.send('Hello, World!')
  })

  const card = ['Menu Online', 'Sorteios X', 'Educação Infantil', 'Calc IMC']

  app.get('/card', async function (_, res) {
    const cards = await collection.find().toArray()
    res.send(cards)
  })

  app.get('/card/:id', async function (req, res) {
    const id = req.params.id
    const item = await collection.findOne({ _id: new ObjectId(id) })

    if (!item) {
      return res.status(404).send('Item não encontrado.')
    }

    res.send(item)
  })

  app.use(express.json())

  app.post('/card', async function (req, res) {
    const novoCard = req.body

    if (!novoCard || !novoCard.title) {
      return res.status(400).send('A requisição deve conter a propriedade `title`.')
    }

    // if (card.includes(novoCard)) {
    //   return res.status(409).send('Título já existente para um Card.')
    // }

    await collection.insertOne(novoCard)
    res.status(201).send(novoCard)
  })

  app.put('/card/:id', function (req, res) {
    const id = req.params.id

    if (!card[id - 1]) {
      return res.status(404).send('Item não encontrado.')
    }

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

    if (!card[id - 1]) {
      return res.status(404).send('Item não encontrado.')
    }

    delete card[id - 1]

    res.send('Card removido com sucesso ' + id)
  })

  app.listen(3001, function () {
    console.log('Aplicação rodando na porta https://localhost:3001')
  })
}

main()
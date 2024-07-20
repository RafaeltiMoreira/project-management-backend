require('dotenv').config();
const express = require('express');
const { connectToDatabase } = require('./db/database-connection');
const cardRouter = require('./card/card.router');
// const { MongoClient, ObjectId } = require('mongodb');



async function main() {

  // const collection = db.collection('card')
  connectToDatabase()

  const app = express()
  app.use(express.json())

  app.get('/', function (_, res) {
    res.send('Hello, World!')
  })

  app.use('/card', cardRouter)

  /*
  app.put('/card/:id', async function (req, res) {
    const id = req.params.id

    // if (!card[id - 1]) {
    //   return res.status(404).send('Item não encontrado.')
    // }

    const novoCard = req.body

    if (!novoCard || !novoCard.title) {
      return res.status(400).send('A requisição deve conter a propriedade `title`.')
    }

    // if (card.includes(novoCard)) {
    //   return res.status(409).send('Título já existente para um Card.')
    // }
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: novoCard }
    )
    // card[id - 1] = novoCard

    res.send(novoCard)
  })

  app.delete('/card/:id', async function (req, res) {
    const id = req.params.id

    // if (!card[id - 1]) {
    //   return res.status(404).send('Item não encontrado.')
    // }

    await collection.deleteOne({ _id: new ObjectId(id) })
    // delete card[id - 1]

    res.send('Card removido com sucesso ' + id)
  })

  */
  app.listen(3001, function () {
    console.log('Aplicação rodando na porta https://localhost:3001')
  })
}

main()
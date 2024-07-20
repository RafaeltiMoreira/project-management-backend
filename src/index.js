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
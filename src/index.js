require('dotenv').config();
const express = require('express');
const { connectToDatabase } = require('./db/database-connection');
const cardRouter = require('./card/card.router');

async function main() {
  connectToDatabase()

  const app = express()
  app.use(express.json())

  app.get('/', function (_, res) {
    res.send('Hello, World!')
  })

  app.use('/card', cardRouter)

  app.listen(3001, function () {
    console.log('Aplicação rodando na porta https://localhost:3001')
  })
}

main()
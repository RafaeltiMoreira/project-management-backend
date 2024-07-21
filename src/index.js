require('dotenv').config();
const express = require('express');
const { connectToDatabase } = require('./db/database-connection');
const cardRouter = require('./card/card.router');
const cors = require('cors');
require('express-async-errors');

async function main() {
  connectToDatabase()

  const app = express()
  app.use(express.json())
  app.use(cors())

  app.get('/', function (_, res) {
    res.send('Hello, World!')
  })

  app.use('/card', cardRouter)

  app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500).send({ error: 'Negado, algo deu errado!' });
  })

  app.listen(3001, function () {
    console.log('Aplicação rodando na porta https://localhost:3001')
  })
}

main()
const { MongoClient } = require('mongodb')

const dbUrl = process.env.DATABASE_URL
const dbName = 'db-api-restful-coders'

async function connectToDatabase() {
  const client = new MongoClient(dbUrl)
  await client.connect()
  console.log('Banco de dados conectado!')

  const db = client.db(dbName)
}

module.exports = {
  connectToDatabase
}
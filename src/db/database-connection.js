const { MongoClient } = require('mongodb')

const dbUrl = process.env.DATABASE_URL
const dbName = 'db-api-restful-coders'
const client = new MongoClient(dbUrl)

async function connectToDatabase() {
  await client.connect()
  console.log('Banco de dados conectado!')
}

function getDatabase() {
  return client.db(dbName)
}

module.exports = {
  connectToDatabase,
  getDatabase
}
const { ObjectId } = require('mongodb')
const { getDatabase } = require('../db/database-connection')

function getCollection() {
  return getDatabase().collection('card')
}

function readAll() {
  // Acesso a lista de cards na collection MongoDB
  return getCollection().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id) {
  return getCollection().findOne({ _id: new ObjectId(id) })
}

function create(newCard) {
  // Adicionar na collection
  return getCollection().insertOne(newCard)
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function updateById(id, newCard) {
  // Atualizar na collection o card pelo ID
  return getCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: newCard }
  )
}

function deleteById() {
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}
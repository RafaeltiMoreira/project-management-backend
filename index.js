const express = require('express')
const app = express()

app.get('/', function (_, res) {
    res.send('Hello, World!')
})

const card = ['Menu Online', 'Sorteios X', 'Educação Infantil', 'Calc IMC']

app.get('/card', function (_, res) {
    res.send(card)
})

app.listen(3001, function () {
    console.log('Aplicação rodando na porta https://localhost:3001')
})
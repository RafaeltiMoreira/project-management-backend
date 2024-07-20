const express = require('express')
const app = express()

app.get('/', function (_, res) {
    res.send('Hello, World!')
})

app.get('/ola', function (_, res) {
    res.send('Olá, mundo!')
})

app.listen(3001, function () {
    console.log('Aplicação rodando na porta https://localhost:3001')
})
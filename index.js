const express = require('express')
const app = express()

app.get('/', function (_, res) {
    res.send('Hello, World!')
})

app.listen(3001)
var express = require('express')
var app = express()

app.use(express.static(__dirname))

var messages = [
    {name: "Bruno", message: "Olá"},
    {name: "Amanda", message: "Oi"}
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

var server = app.listen(3000, () => {
    console.log('Servidor está rodando na porta', server.address().port)
})
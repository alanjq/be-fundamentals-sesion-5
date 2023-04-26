// Servidor con EXPRESS JS
const express = require('express')
const app = express()
const port = 3000

// Agregamos la respuesta para /
app.get('/', (request, response) => {
    response.json({
        hello: 'Hello World desde Express.JS'
    })
})

// Escuchar en el puerto
app.listen(port, () => {
    console.log(`Express.JS escuchando en el puerto ${port}`);
})

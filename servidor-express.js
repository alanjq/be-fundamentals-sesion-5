// Servidor con EXPRESS JS
const express = require('express')
const bparser = require('body-parser')
const app = express()
const port = 3000

// Agregamos la respuesta para el get de raíz /
app.get('/', (request, response) => {
    response.json({
        hello: 'Hello World desde Express.JS'
    })
})

// Necesario para leer los datos de POST
app.use(bparser.json())
app.use(bparser.urlencoded({ extended: true }))

// Ejemplo usando POST
app.post('/', (req, res) => {
    // Tomamos los datos de POST
    const user_name = req.body.user
    const user_password = req.body.password
    console.log('user_name', user_name);
    console.log('user_password', user_password);
    // Devolvemos los datos que se recibieron por POST
    res.end(JSON.stringify({
        user: user_name,
        password: user_password
    }))
})

// Escuchar en el puerto
app.listen(port, () => {
    console.log(`Express.JS escuchando en el puerto ${port}`);
})

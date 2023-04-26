const http = require('http')

// Datos para el servidor
const hostname = '127.0.0.1' // localhost
const port = 3000

// Creamos el servidor
const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello World.')
})

// Escuchamos peticiones en el puerto indicado
server.listen(port, hostname, () => {
    console.log(`Servidor escuchando en ${hostname}:${port}`); // 127.0.0.1:3000
})

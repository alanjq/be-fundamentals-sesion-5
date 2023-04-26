/**
 * Devolver datos usando una API
 */
// Servidor con EXPRESS JS
const express = require('express')
const app = express()
const port = 3000

// Conexión a la BD
let mySql = require('mysql')

// Objeto con datos de la conexión
const INFO_BD = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'libreria'
}

let connection = mySql.createConnection(INFO_BD)

let sql = `SELECT id, titulo, clasificacion FROM libreria.libros`

// exportar conexión para llamar mediante URL
const getLibros = () => {
    // El query
    return connection.query(sql, (error, results, fields) => {
        // Validamos que no haya fallado
        if (error) {
            return console.error(error.message)
        }
        // Si todo funciona
        return fields
    })
}

app.get('/', (req, res) => {
    res.json({ message: 'get Libros' })
})

app.get('/libros', (req, res) => {
    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.json({ error: 'No se pudo obtener información de la base de datos.' })
        }
        res.json(results)
    })
})

app.listen(port, () => {
    console.log(`Express.JS escuchando en el puerto ${port}`);
})

module.exports = getLibros
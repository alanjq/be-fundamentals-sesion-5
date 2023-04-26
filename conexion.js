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

let sql = `SELECT id, titulo, clasificacion FROM libreria.libros WHERE clasificacion = 'Programacion'`

// Probar conexión
/*
connection.connect((error)=>{
    if(!error){
        console.log('Conexión exitosa.');
    }
    console.error('Falló la conexión.', error);
})
*/

connection.query(sql, (error, results, fields) => {
    // Validamos que no haya fallado
    if (error) {
        return console.error(error.message)
    }
    // Si todo funciona
    console.log(results);
})

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

module.exports  = getLibros
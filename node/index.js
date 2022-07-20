const express = require('express')
const mysql = require('mysql');
const { getDefaultFlags } = require('mysql/lib/ConnectionConfig');

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'mydb'
};

const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) values('Nei Fassula')`
connection.query(sql)
connection.end()

    
app.get('/', async (req,res) => {
    const conn = mysql.createConnection(config);
    const pessoas = await getData(conn);
    conn.end();    
    res.send(
        `<h1>Full Cycle Rocks!!</h1>
        <h2>Lista:</h2>
        ${pessoas}`
    );
});

const getData = (conn) => {
    let pessoas = '';

    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM people', (err, rows) => {
            if (err) return reject(err)
        
            pessoas = '<ul>'
            rows.forEach(pessoa => {
                pessoas = pessoas + `<li>${pessoa.name}(${pessoa.id})</li>`
            });
            pessoas = pessoas + '</ul>';  
            return resolve(pessoas);
        });
    });
};

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
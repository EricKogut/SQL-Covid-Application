const express = require('express');
var mysql = require('mysql')

const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    var connection = mysql.createConnection({
      host: 'project-3309.c0vk0iwpo9it.us-east-2.rds.amazonaws.com',
      user: 'admin',
      password: 'pa$$word',
      database: '3309'
    })

    connection.connect()

    connection.query('SELECT * FROM Student', function (err, rows, fields) {
      if (err) throw err

        console.log('Student is:', rows[0])
    })

    connection.end()
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


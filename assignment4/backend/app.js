const express = require('express');
var mysql = require('mysql')
var cors = require('cors')



const app = express();
app.use(cors());


const covidRoute = require('../backend/Routes/covid');
app.use('/api', covidRoute);

// app.use("/",function(req,res, next){
//   var connection = mysql.createConnection({
//     host: 'project-3309.c0vk0iwpo9it.us-east-2.rds.amazonaws.com',
//     user: 'admin',
//     password: 'pa$$word',
//     database: '3309'
//   })
//   connection.connect();
// next();
// connection.end();
// })

const port = process.env.port || 3000;



// app.get('/', (req, res) => {
    
//  connection.query('SELECT * FROM Student', function (err, rows, fields) {
//   if (err) throw err

//         res.send(rows[0]);
//       })

   
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


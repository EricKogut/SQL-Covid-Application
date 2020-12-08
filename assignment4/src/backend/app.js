const express = require('express');
var mysql = require('mysql')
var cors = require('cors')
const bodyParser = require('body-parser');




const app = express();
app.use(cors());
app.use(bodyParser.json());



const covidRoute = require('../backend/Routes/covid');
app.use('/api', covidRoute);



const port = process.env.port || 3000;




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


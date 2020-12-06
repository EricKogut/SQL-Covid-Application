const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const connection = require('./connection');


router.get('/', (req, res) => {

connection.connect();
connection.query('SELECT * FROM Student', function (err, rows, fields) {
  if (err) throw err
   res.send(rows[0]);
  })
   
connection.end();
 });





module.exports = router;



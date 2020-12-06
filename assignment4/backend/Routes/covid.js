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

 //Get all the classrooms that has lecture assigned to it with a given number of seats 

router.get('/classrooms/:capacity', (req, res) => {

    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    });

    connection.query('SELECT C.*,L.* FROM Lecture L LEFT JOIN Classroom C ON C.roomNumber = L.classroomNumber WHERE C.numberOfSeats>= ?',
    [req.params.capacity],
    function (err, rows, fields) {
      if (err) throw err
     res.send(rows);
      })
       
   // connection.end();
     });

//POST for inserting a new lecture into the database 








module.exports = router;



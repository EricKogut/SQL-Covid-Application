const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const connection = require('./connection');


// GET all students 
router.get('/', (req, res) => {

connection.connect();
connection.query('SELECT * FROM Student', function (err, rows, fields) {
  if (err) throw err
   res.send(rows[0]);
  })
   
//connection.end();
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
        !err ? res.send(rows) : res.json(err);
      });
       
   // connection.end();
     });

//POST for inserting a new lecture into the database 
router.post('/lecture/add', (req,res,next)=>{
    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    });

    let data  = [req.body.lectureID, req.body.startTime, req.body.endTime, req.body.courseID, req.body.classroomNumber];

    connection.query('INSERT INTO Lecture (lectureID, startTime, endTime, courseID,classroomNumber SET (?,?,?,?,?)',
    data, 
    function (err, rows, fields) {
        !err ? res.send(rows) : res.json(err);
      });
});

//GET a list of all the courses in which students can enroll 
//Created a view called StudentPerCourse by joining Course, Lecture and Classroom 
router.get('/available', (req,res)=>{
    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    });

    connection.query('SELECT * FROM StudentPerCourse WHERE numberOfSeats>=numberOfStudents', function (err, rows, fields) {
        !err ? res.send(rows) : res.json(err);
        })

});

//POST for updating enrollment and courses 
// numberOfStudents++











module.exports = router;



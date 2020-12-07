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


// GET a list of all the course ids 
// this would be displayed as a dragdown option for user to select from
router.get('/courseID', (req, res) => {

    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    });

    connection.query('SELECT courseID FROM Course',
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

    connection.query('INSERT INTO Lecture (lectureID, startTime, endTime, courseID,classroomNumber) VALUES (?,?,?,?,?)',
    data, 
    function (err, rows, fields) {
        !err ? res.send(rows) : res.json(err);
      });
});

//GET a list of all the courses along with their information in which students can enroll 
router.get('/available', (req,res)=>{
    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    });

    const queryString = 'SELECT C.courseName, C.description, C.numberOfStudents, Cl.numberOfSeats, L.startTime, L.endTime FROM Course C JOIN Lecture L ON C.courseID = L.courseID JOIN Classroom Cl ON L.classroomNumber = Cl.roomNumber WHERE Cl.numberOfSeats>=C.numberOfStudents';

    connection.query(queryString, function (err, rows, fields) {
        !err ? res.send(rows) : res.json(err);
        })

});

//POST for updating enrollment and courses 
// Insert User info into the Enrollment relation
router.post('/course/add', (req,res,next)=>{
    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    }); 
    let data  = [req.body.courseID, req.body.studentEmail ,1];

    connection.query('INSERT INTO Enrollment (courseID, studentEmail, currentlyEnrolled) VALUES (?,?,?)',
     data, 
    function (err, rows, fields) {
        !err ? res.send(rows) : res.json(err);
      });
    
});

//Check if the user has already been enrolled 
// if output is 1 then yes otherwise they can enroll into the course 
router.post('/enrollment/check', (req,res,next)=>{
    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    });
    // check if already enrolled or not 
const queryString = 'SELECT currentlyEnrolled FROM Enrollment WHERE courseID = ? AND studentEmail = ?' ;

    connection.query(queryString,
    [req.body.courseID, req.body.studentEmail], 
    function (err, rows, fields) {
        !err ? res.send(rows) : res.json(err);
      });

    
});

  // numberOfStudents++ in Course Relation 
    router.put('/course/increment/:courseID', (req,res,next)=>{
    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    });

    const queryString = 'UPDATE Course SET numberOfStudents = numberOfStudents + 1 WHERE courseID = ? '

    connection.query(queryString,[req.params.courseID], 
    function (err, rows, fields) {
        !err ? res.send(rows) : res.json(err);
      });
  
    
});








module.exports = router;



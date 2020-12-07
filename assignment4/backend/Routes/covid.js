const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const connection = require('./connection');

router.get('/coincidence/:self/:user', (req, _) => {
  const connection = mysql.createConnection({
    /* Avoid a lot of errors by creating a connection local to function */
      host: 'project-3309.c0vk0iwpo9it.us-east-2.rds.amazonaws.com',
      user: 'admin',
      password: 'pa$$word',
      database: '3309'
    });

    const you = req.params.self;
    const them = req.params.user;

    connection.connect();

    connection.query(`CREATE VIEW A AS SELECT courseID FROM Enrollment WHERE studentEmail = '${you}'`);
    connection.query(`CREATE VIEW B AS SELECT courseID FROM Enrollment WHERE studentEmail = '${them}'`);

    connection.query(`SELECT * FROM A INNER JOIN B ON A.courseID = B.courseID`, (err, rows, fields) => {
        if (err) {
          connection.query(`DROP VIEW A`);
          connection.query(`DROP VIEW B`);
          return;
        }
      res.send(rows);
    });

    connection.query(`DROP VIEW A`);
    connection.query(`DROP VIEW B`);
})

/* name = UWO Email in Student relation */
router.post('/case/:name', (req, res) => {
  /* Add username to COVID Case relation, notify those users
  with a distance < 6ft on dashboard */

  const connection = mysql.createConnection({
    /* Avoid a lot of errors by creating a connection local to function */
      host: 'project-3309.c0vk0iwpo9it.us-east-2.rds.amazonaws.com',
      user: 'admin',
      password: 'pa$$word',
      database: '3309'
    });

  const username = req.params.name;
  const status = 'A'; // Status currently has no meaning, 

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const date = `${year}-${month}-${day}`;

  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  const time = `${hour}:${minute}:${second}`;

  connection.connect();

  connection.query(`INSERT INTO COVID_Case VALUES ('${username}', '${status}', '${time}', '${date}', null)`, (err, rows, fields) => {
    if (err) {
      switch(err.errno) {
        case 1062:
          res.status(400).send('That entry currently exists in the case database');
          break;
        case 1452:
          res.status(404).send('That email cannot be found in the student records');
          break;
        default:
          res.status(400).send('Cannot do that, there is an error!');
      }
      return;
    } 
  }) 

  const added = [];

  connection.query(`SELECT * FROM Location_Distance WHERE (studentEmail1 = '${username}' OR studentEmail2 = '${username}') AND distance < 300`,
  (err, rows, fields) => {

    for (const distance of rows) {

      let toNotify;
      if(username !== distance['studentEmail1']) { // This is the other person
        toNotify = distance['studentEmail1'];
      } else if (username !== distance['studentEmail2']) { 
        toNotify = distance['studentEmail2'];
      }

      if (toNotify) added.push(toNotify);//
    }

  added.forEach((name) => {


    connection.query(`SELECT MAX(idNotification) FROM Notification WHERE studentEmail_notif = '${name}'`, (err, rows, fields) => {
      let result;
      if (rows) {
        result = Object.values(rows[0])[0] ? Object.values(rows[0])[0] : 0; // Number or null
      }
        connection.query(`INSERT INTO Notification VALUES (${result + 1}, '${name}', 'You have been in contact with a COVID case reported on ${date}}')`)
    })
  })

  res.send(added.length);

  })
})

router.get('/notifications/:name', (req, res) =>  {
  // Route to retrieve notifications for a particular user as per TODO #A

  connection.connect();

  connection.query(`SELECT * FROM Notification WHERE studentEmail_notif = ${req.params.name}`, (err, rows, fields) => {
    res.send(rows);
  }) 

  connection.end();
})

// GET all students 
router.get('/', (req, res) => {

  console.log("hello");
connection.connect();
connection.query(`SELECT MIN(idNotification) FROM Notification WHERE studentEmail_notif = 'Adbbott@uwo.ca'`, function (err, rows, fields) {
  if (err) throw err
   console.log(Object.values(rows[0])[0]);//
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


//Get search results based on courseID

router.get('/search/courseID/:courseID', (req,res)=>{
    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    });

    const queryString = 'SELECT * FROM searchTable WHERE courseID = ?';

    connection.query(queryString,[req.params.courseID], function (err, rows, fields) {
        !err ? res.send(rows) : res.json(err);
        })

});

//Get search results based on courseName

router.get('/search/courseName/:courseName', (req,res)=>{
    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    });

    const queryString = 'SELECT * FROM searchTable WHERE courseName = ?';

    connection.query(queryString,[req.params.courseName], function (err, rows, fields) {
        !err ? res.send(rows) : res.json(err);
        })

});


router.get('/signin', (req, res) => {


    connection.connect((error)=>{
        if(!error){
            console.log("Database Connected!");
        }else{
            console.log("Connection to Database failed \n Error: " + JSON.stringify(error,undefined,2));
        }
    });

    connection.query(`SELECT studentEmail FROM Student WHERE studentEmail = ? AND lName = ?`,[req.query.email, req.query.lastName],
    function (err, rows, fields) {
        !err ? res.send(rows) : res.json(err);
      });
       
   // connection.end();
     });





module.exports = router;



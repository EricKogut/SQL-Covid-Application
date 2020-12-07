const mysql = require('mysql');



const connection = mysql.createConnection({
    host: 'project-3309.c0vk0iwpo9it.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'pa$$word',
    database: '3309'
  });

  //console.log("Database connected!");


  module.exports = connection;
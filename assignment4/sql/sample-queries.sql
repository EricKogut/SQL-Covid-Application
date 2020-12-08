-- Functionality #1

CREATE VIEW A AS SELECT courseID FROM Enrollment WHERE studentEmail = 'jrodri89@uwo.ca';

CREATE VIEW B AS SELECT courseID FROM Enrollment WHERE studentEmail = 'DaciaK_Abbott@uwo.ca';

SELECT * FROM A INNER JOIN B ON A.courseID = B.courseID;

DROP VIEW A;

DROP VIEW B;

-- Functionality #2

INSERT INTO COVID_Case VALUES ('Abbott@uwo.ca', 'A', '23:07:09', '2020-12-07', null);

SELECT * FROM Location_Distance WHERE (studentEmail1 = 'Abbott@uwo.ca' OR studentEmail2 = 'Abbott@uwo.ca') AND distance < 300;

SELECT MAX(idNotification) FROM Notification WHERE studentEmail_notif = 'jrodri89@uwo.ca';

INSERT INTO Notification VALUES (${result + 1}, 'jrodri89@uwo.ca', 'You have been in contact with a COVID case reported on 2020-12-07');


-- Functionality #3

SELECT C.*,L.* FROM Lecture L LEFT JOIN Classroom C ON C.roomNumber = L.classroomNumber WHERE C.numberOfSeats>= 100;

-- Functionality #4

INSERT INTO Lecture (lectureID, startTime, endTime, courseID,classroomNumber) VALUES ('33445','10:00','02:00','05134','05228');

-- Functionality #5

SELECT C.courseName, C.description, C.numberOfStudents, Cl.numberOfSeats, L.startTime, L.endTime, C.courseID FROM Course C JOIN Lecture L ON C.courseID = L.courseID JOIN Classroom Cl ON L.classroomNumber = Cl.roomNumber WHERE Cl.numberOfSeats>=C.numberOfStudents;

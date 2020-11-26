SELECT C.*,L.*, COUNT(1) AS count 
FROM Lecture L
LEFT JOIN Classroom C
ON C.roomNumber = L.classroomNumber
WHERE C.numberOfSeats>=50
GROUP BY buildingName
HAVING COUNT(1)>=2;


SELECT 
    *
FROM
    Student
WHERE
    EXISTS(SELECT 
            *
        FROM
            COVID_Case
        WHERE
            Student.studentEmail = COVID_Case.studentEmail AND COVID_Case.dateResolved IS NOT NULL) AND Student.year = 4;


SELECT MAX(numberOfSeats) FROM Classroom c
WHERE c.roomNumber IN (

SELECT classroomNumber FROM Lecture l 
WHERE l.courseID IN (

SELECT courseID	FROM Course c
WHERE c.courseID IN (

SELECT courseID FROM Enrollment e
WHERE e.studentEmail = (

	SELECT studentEmail FROM Student
	WHERE fName = "Lessie" AND lName = "Askew"

))));


SELECT L.longitude,L.latitude,L.studentEmail
FROM COVID_Case AS C, Location AS L
WHERE C.studentEmail = L.studentEmail AND dateResolved is NULL;


SELECT S.fName,S.lName, S.age
FROM Student AS S
JOIN COVID_Case AS C ON S.studentEmail = C.studentEmail
WHERE status = 'A'
ORDER BY S.age;


SELECT S.fName, S.lName,E.courseID,(S.studentEmail) AS count
FROM Student AS S
JOIN Enrollment AS E ON E.studentEmail = S.studentEmail
JOIN COVID_Case AS C ON S.studentEmail= C.studentEmail
where S.year = 3
GROUP BY courseID;

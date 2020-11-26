INSERT INTO Location_Distance (studentEmail1, studentEmail2, time,date, distance)

SELECT  l1.studentEmail, l2.studentEmail, l1.time, l1.date, SQRT((l1.latitude - l2.latitude)*(l1.latitude - l2.latitude) + (l1.longitude - l2.longitude)*(l1.longitude - l2.longitude))

FROM Location l1, Location l2
WHERE
	l1.studentEmail = "Zada.Paquette438@uwo.ca" AND
    l2.studentEmail = "Abbott@uwo.ca";


UPDATE Student 
SET year = - 1
WHERE
    EXISTS(
  SELECT 
            *
       FROM
            Enrollment
       WHERE
            Student.studentEmail = Enrollment.studentEmail
                AND Enrollment.currentlyEnrolled <> 1);
                


DELETE FROM Building
WHERE buildingName LIKE "02%"
	AND buildingName NOT IN (
		SELECT buildingName FROM Classroom
    );


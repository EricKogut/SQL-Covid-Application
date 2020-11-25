/* Using EXISTS keyword,
Checks which student emails from the student relation 
are present in the COVID_Case relation and returns those students with existing
entries in the COVID_Case table that are in fourth year
*/
SELECT *
FROM Student
WHERE EXISTS( 
				SELECT 
            *
        FROM
            COVID_Case
        WHERE
            Student.studentEmail = COVID_Case.studentEmail) AND Student.year = 4;


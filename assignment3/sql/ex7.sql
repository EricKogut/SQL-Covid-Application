-- Creating view
CREATE VIEW UnresolvedCases AS
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
            Student.studentEmail = COVID_Case.studentEmail AND 
COVID_Case.dateResolved IS NOT NULL);

-- Viewing the view (get it?)

SELECT * FROM UnresolvedCases;

-- Updating the view
INSERT INTO UnresolvedCases
VALUES ('jrodri89@uwo.ca', 'Juan', 'Rodriguez', 21, '123 Avenue Pkwy', 3, 42069);

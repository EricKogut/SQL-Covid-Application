CREATE TABLE `3309`.`Student` (
  `studentEmail` VARCHAR(30) NOT NULL,
  `fName` VARCHAR(45) NOT NULL,
  `lName` VARCHAR(45) NOT NULL,
  `age` INT NULL,
  `address` VARCHAR(45) NULL,
  `year` INT NULL,
  `deviceID` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`studentEmail`),
  UNIQUE INDEX `studentEmail_UNIQUE` (`studentEmail` ASC) VISIBLE,
  UNIQUE INDEX `deviceID_UNIQUE` (`deviceID` ASC) VISIBLE);
  
CREATE TABLE `Course` (
  `courseID` varchar(45) NOT NULL,
  `courseName` varchar(45) NOT NULL,
  `description` mediumtext,
  `numberOfStudents` int DEFAULT NULL,
  PRIMARY KEY (`courseID`),
  UNIQUE KEY `courseID_UNIQUE` (`courseID`)
);

CREATE TABLE `3309`.`Classroom` (
  `roomNumber` VARCHAR(45) NOT NULL,
  `numberOfSeats` INT NULL,
  `buildingName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`roomNumber`));

ALTER TABLE `3309`.`Classroom` 
ADD INDEX `name_idx` (`buildingName` ASC) VISIBLE;
;

ALTER TABLE `3309`.`Classroom` 
ADD CONSTRAINT `buildingName`
  FOREIGN KEY (`buildingName`)
  REFERENCES `3309`.`Building` (`buildingName`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

CREATE TABLE `3309`.`Building` (
  `buildingName` VARCHAR(45) NOT NULL,
  `longitude` DECIMAL(9,6) NOT NULL,
  `latitude` DECIMAL(9,6) NOT NULL,
  PRIMARY KEY (`buildingName`));

CREATE TABLE `3309`.`Zone` (
  `zoneID` VARCHAR(45) NOT NULL,
  `zoneDensity` DECIMAL(9,6) NULL,
  `riskLevel` INT NULL,
  PRIMARY KEY (`zoneID`));

CREATE TABLE `3309`.`Location` (
  `studentEmail` VARCHAR(45) NOT NULL,
  `time` TIME NOT NULL,
  `date` DATE NOT NULL,
  `longitude` DECIMAL(9,6) NOT NULL,
  `latitude` DECIMAL(9,6) NOT NULL,
  PRIMARY KEY (`studentEmail`, `time`, `date`));

ALTER TABLE `3309`.`Location` 
ADD CONSTRAINT `locationStudentEmail`
  FOREIGN KEY (`studentEmail`)
  REFERENCES `3309`.`Student` (`studentEmail`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

CREATE TABLE `3309`.`COVID_Case` (
  `studentEmail` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NULL,
  `timeReported` TIME NULL,
  `dateReported` DATE NOT NULL,
  `dateResolved` DATE NULL,
  PRIMARY KEY (`studentEmail`, `dateReported`));

ALTER TABLE `3309`.`COVID_Case` 
ADD CONSTRAINT `studentEmail`
  FOREIGN KEY (`studentEmail`)
  REFERENCES `3309`.`Student` (`studentEmail`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

CREATE TABLE `3309`.`Location_Distance` (
  `deviceID` VARCHAR(45) NOT NULL,
  `deviceID2` VARCHAR(45) NOT NULL,
  `time` TIME NOT NULL,
  `date` DATE NOT NULL,
  `distance` DECIMAL(9,6) NOT NULL,
  PRIMARY KEY (`deviceID`, `deviceID2`));
	
ALTER TABLE `3309`.`Location_Distance` 
DROP INDEX `student2LocationID_idx` ,
ADD INDEX `student2LocationID_idx` (`studentEmail2` ASC) VISIBLE,
DROP INDEX `student1LocationID_idx` ;
;

ALTER TABLE `3309`.`Location_Distance` 
ADD CONSTRAINT `student1LocationID`
  FOREIGN KEY (`studentEmail1`)
  REFERENCES `3309`.`Location` (`studentEmail`),
ADD CONSTRAINT `student2LocationID`
  FOREIGN KEY (`studentEmail2`)
  REFERENCES `3309`.`Location` (`studentEmail`);


	CREATE TABLE `3309`.`Lecture` (
  `lectureID` VARCHAR(45) NOT NULL,
  `startTime` TIME NULL,
  `endTime` TIME NULL,
  `courseID` VARCHAR(45) NULL,
  PRIMARY KEY (`lectureID`));

ALTER TABLE `3309`.`Lecture` 
ADD INDEX `lectureCourseID_idx` (`courseID` ASC) VISIBLE;

ALTER TABLE `3309`.`Lecture` 
ADD CONSTRAINT `lectureCourseID`
  FOREIGN KEY (`courseID`)
  REFERENCES `3309`.`Course` (`courseID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `3309`.`Lecture` 
ADD COLUMN `classroomNumber` VARCHAR(45) NULL AFTER `courseID`,
ADD INDEX `lectureClassroomNumber_idx` (`classroomNumber` ASC) VISIBLE;

ALTER TABLE `3309`.`Lecture` 
ADD CONSTRAINT `lectureClassroomNumber`
  FOREIGN KEY (`classroomNumber`)
  REFERENCES `3309`.`Classroom` (`roomNumber`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  CREATE TABLE `3309`.`Enrollment` (
  `courseID` VARCHAR(45) NOT NULL,
  `studentEmail` VARCHAR(45) NOT NULL,
  `currentlyEnrolled` TINYINT NULL,
  PRIMARY KEY (`courseID`, `studentEmail`));

ALTER TABLE `3309`.`Enrollment` 
DROP FOREIGN KEY `courseEnrollementID`,
DROP FOREIGN KEY `studentEnrollemenetEmail`;
ALTER TABLE `3309`.`Enrollment` 
ADD CONSTRAINT `courseEnrollmentID`
  FOREIGN KEY (`courseID`)
  REFERENCES `3309`.`Course` (`courseID`),
ADD CONSTRAINT `studentEnrollmentEmail`
  FOREIGN KEY (`studentEmail`)
  REFERENCES `3309`.`Student` (`studentEmail`);


CREATE TABLE `3309`.`Zone_Membership` (
  `zoneID` INT NOT NULL,
  `latitude`  DECIMAL(9,6) NOT NULL,
  `longitude`  DECIMAL(9,6) NOT NULL,
  PRIMARY KEY (`zoneID`, `latitude`, `longitude`));

ALTER TABLE `3309`.`Zone_Membership` 
CHANGE COLUMN `zoneID` `zoneID` VARCHAR(45) NOT NULL ;
ALTER TABLE `3309`.`Zone_Membership` 
ADD CONSTRAINT `zoneMemberShipID`
  FOREIGN KEY (`zoneID`)
  REFERENCES `3309`.`Zone` (`zoneID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;



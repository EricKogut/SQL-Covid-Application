-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: project-3309.c0vk0iwpo9it.us-east-2.rds.amazonaws.com    Database: 3309
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Temporary view structure for view `AssignedLectures`
--

DROP TABLE IF EXISTS `AssignedLectures`;
/*!50001 DROP VIEW IF EXISTS `AssignedLectures`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `AssignedLectures` AS SELECT 
 1 AS `lectureID`,
 1 AS `startTime`,
 1 AS `endTime`,
 1 AS `courseID`,
 1 AS `classroomNumber`,
 1 AS `roomNumber`,
 1 AS `numberOfSeats`,
 1 AS `buildingName`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `UnresolvedCases`
--

DROP TABLE IF EXISTS `UnresolvedCases`;
/*!50001 DROP VIEW IF EXISTS `UnresolvedCases`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `UnresolvedCases` AS SELECT 
 1 AS `studentEmail`,
 1 AS `fName`,
 1 AS `lName`,
 1 AS `age`,
 1 AS `address`,
 1 AS `year`,
 1 AS `deviceID`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `GettingTooCloseThereBud`
--

DROP TABLE IF EXISTS `GettingTooCloseThereBud`;
/*!50001 DROP VIEW IF EXISTS `GettingTooCloseThereBud`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `GettingTooCloseThereBud` AS SELECT 
 1 AS `studentEmail1`,
 1 AS `studentEmail2`,
 1 AS `time`,
 1 AS `date`,
 1 AS `distance`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `AssignedLectures`
--

/*!50001 DROP VIEW IF EXISTS `AssignedLectures`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `AssignedLectures` AS select `L`.`lectureID` AS `lectureID`,`L`.`startTime` AS `startTime`,`L`.`endTime` AS `endTime`,`L`.`courseID` AS `courseID`,`L`.`classroomNumber` AS `classroomNumber`,`C`.`roomNumber` AS `roomNumber`,`C`.`numberOfSeats` AS `numberOfSeats`,`C`.`buildingName` AS `buildingName` from (`Lecture` `L` left join `Classroom` `C` on((`C`.`roomNumber` = `L`.`classroomNumber`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `UnresolvedCases`
--

/*!50001 DROP VIEW IF EXISTS `UnresolvedCases`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `UnresolvedCases` AS select `Student`.`studentEmail` AS `studentEmail`,`Student`.`fName` AS `fName`,`Student`.`lName` AS `lName`,`Student`.`age` AS `age`,`Student`.`address` AS `address`,`Student`.`year` AS `year`,`Student`.`deviceID` AS `deviceID` from `Student` where exists(select 1 from `COVID_Case` where ((`Student`.`studentEmail` = `COVID_Case`.`studentEmail`) and (`COVID_Case`.`dateResolved` is not null))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `GettingTooCloseThereBud`
--

/*!50001 DROP VIEW IF EXISTS `GettingTooCloseThereBud`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `GettingTooCloseThereBud` AS select `Location_Distance`.`studentEmail1` AS `studentEmail1`,`Location_Distance`.`studentEmail2` AS `studentEmail2`,`Location_Distance`.`time` AS `time`,`Location_Distance`.`date` AS `date`,`Location_Distance`.`distance` AS `distance` from `Location_Distance` where (`Location_Distance`.`distance` < 0.00001) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-26 12:25:32

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
-- Dumping data for table `COVID_Case`
--

LOCK TABLES `COVID_Case` WRITE;
/*!40000 ALTER TABLE `COVID_Case` DISABLE KEYS */;
INSERT INTO `COVID_Case` VALUES ('Abbott@uwo.ca','A','18:36:44','2020-01-11','2020-04-16'),('Abe.Haskins@uwo.ca','B','15:41:06','2020-09-27','2020-02-14'),('Abram_Harvey@uwo.ca','C','22:29:35','2020-03-08','2020-04-11'),('Acevedo587@uwo.ca','C','01:29:45','2020-09-30','2020-06-11'),('Acuna@uwo.ca','E','10:23:22','2020-01-10','2020-01-08'),('AdrianH.Laughlin2@uwo.ca','D','02:58:27','2020-10-30',NULL),('AikoBain@uwo.ca','A','02:03:02','2020-07-05',NULL),('Akin376@uwo.ca','C','12:01:24','2020-05-31',NULL),('Alina.Wyatt@uwo.ca','B','00:01:38','2020-10-29','2020-06-10'),('ArmidaZepeda@uwo.ca','C','08:56:58','2020-09-29','2020-01-18'),('Bandy9@uwo.ca','E','08:29:52','2020-09-26','2020-07-16'),('blragmro70@uwo.ca','B','15:57:43','2020-07-02','2020-10-25'),('Blue@uwo.ca','B','00:14:48','2020-07-04','2020-05-20'),('BrittnyBerlin844@uwo.ca','B','00:00:03','2020-07-06','2020-05-02'),('Buckner3@uwo.ca','E','07:18:43','2020-08-29','2020-08-20'),('Buss@uwo.ca','C','00:00:07','2020-08-30','2020-08-06'),('CarolAndre@uwo.ca','B','10:49:46','2020-07-30','2020-08-20'),('Caron637@uwo.ca','B','04:13:48','2020-11-25','2020-08-13'),('ccvytcan_qlqnxys@uwo.ca','E','06:27:30','2020-04-07',NULL),('ColinPaulsen@uwo.ca','B','00:05:05','2020-07-29','2020-02-20'),('DaciaK_Abbott@uwo.ca','C','00:09:08','2020-08-31','2020-03-22'),('Debbie.Palma@uwo.ca','A','07:04:28','2020-05-13','2020-06-21'),('EmeryAcevedo@uwo.ca','B','11:45:51','2020-05-11',NULL),('EnriqueLemaster@uwo.ca','C','00:00:01','2020-06-01',NULL),('eroi9792@uwo.ca','A','00:08:52','2020-01-12','2020-08-05'),('Fitzgerald@uwo.ca','D','00:00:54','2020-10-28','2020-03-14'),('FlorencioBConti@uwo.ca','C','10:06:12','2020-04-10','2020-08-17'),('Hamby@uwo.ca','A','01:47:36','2020-04-08','2020-07-04'),('Hana_Abney@uwo.ca','C','10:51:11','2020-06-03','2020-01-01'),('Headrick87@uwo.ca','C','00:14:52','2020-09-28',NULL),('Jonathan.Cleary@uwo.ca','C','00:00:02','2020-01-09','2020-09-28'),('KelleyHoran67@uwo.ca','E','00:37:10','2020-05-12','2020-04-23'),('KyungBlanco@uwo.ca','B','00:31:40','2020-07-26','2020-05-27'),('Large@uwo.ca','B','00:00:02','2020-06-02','2020-05-01'),('Loyd183@uwo.ca','B','23:42:27','2020-09-02','2020-10-30'),('Lucien_W.Abernathy@uwo.ca','B','06:48:23','2020-09-01','2020-11-10'),('Lunsford9@uwo.ca','B','22:26:36','2020-07-03',NULL),('LutherM.Rubio@uwo.ca','C','15:35:46','2020-05-30','2020-08-28'),('NaomiCasillas4@uwo.ca','B','09:12:16','2020-07-28','2020-11-02'),('oksalwx5913@uwo.ca','B','00:08:45','2020-02-14','2020-02-25'),('oyjipemz_zaivthpnmi@uwo.ca','B','00:12:43','2020-02-16','2020-05-29'),('PetitY899@uwo.ca','C','03:03:58','2020-10-27',NULL),('RacquelMajor@uwo.ca','C','13:44:09','2020-02-13','2020-01-05'),('Raleigh_Aldrich@uwo.ca','E','00:00:05','2020-02-15','2020-05-05'),('ShawneeChan@uwo.ca','D','07:43:22','2020-01-13','2020-02-07'),('Slone218@uwo.ca','B','02:19:16','2020-04-09','2020-01-05'),('Sparkle_RAbney@uwo.ca','E','00:00:09','2020-02-12','2020-01-11'),('Tasha_Kroll762@uwo.ca','C','14:43:30','2020-10-26','2020-09-28'),('Willett6@uwo.ca','B','04:34:47','2020-05-29','2020-06-24'),('Zada.Paquette438@uwo.ca','B','00:00:07','2020-07-27','2020-06-30');
/*!40000 ALTER TABLE `COVID_Case` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-26 12:25:20

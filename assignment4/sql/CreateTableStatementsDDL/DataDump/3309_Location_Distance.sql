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
-- Dumping data for table `Location_Distance`
--

LOCK TABLES `Location_Distance` WRITE;
/*!40000 ALTER TABLE `Location_Distance` DISABLE KEYS */;
INSERT INTO `Location_Distance` VALUES ('Abbott@uwo.ca','ccvytcan_qlqnxys@uwo.ca','16:05:47','2001-01-22',871.727650),('Abe.Haskins@uwo.ca','blragmro70@uwo.ca','11:42:47','1971-04-15',1.880534),('Abram_Harvey@uwo.ca','Zada.Paquette438@uwo.ca','14:30:03','1989-06-21',-83.029257),('Acevedo587@uwo.ca','Loyd183@uwo.ca','04:55:18','2019-12-04',-591.064135),('Acuna@uwo.ca','PetitY899@uwo.ca','07:32:26','0000-00-00',-45.269537),('AdrianH.Laughlin2@uwo.ca','AdrianH.Laughlin2@uwo.ca','18:31:16','1983-09-29',-654.851269),('AikoBain@uwo.ca','Willett6@uwo.ca','00:01:30','1970-03-31',-227.254995),('Akin376@uwo.ca','eroi9792@uwo.ca','00:14:03','1972-04-22',914.957315),('Alina.Wyatt@uwo.ca','Lunsford9@uwo.ca','01:26:22','1984-03-09',349.591111),('ArmidaZepeda@uwo.ca','BrittnyBerlin844@uwo.ca','00:27:03','1999-08-08',-331.529814),('Bandy9@uwo.ca','Abbott@uwo.ca','18:24:02','2013-12-25',280.929866),('blragmro70@uwo.ca','KelleyHoran67@uwo.ca','00:01:19','1970-03-20',142.986420),('Blue@uwo.ca','KyungBlanco@uwo.ca','04:41:36','2003-10-19',-719.130066),('BrittnyBerlin844@uwo.ca','Buckner3@uwo.ca','05:08:29','1997-01-16',906.706796),('Buckner3@uwo.ca','Headrick87@uwo.ca','00:09:30','1971-07-24',-5.945185),('Buss@uwo.ca','Fitzgerald@uwo.ca','01:36:19','1985-10-27',29.462404),('CarolAndre@uwo.ca','FlorencioBConti@uwo.ca','00:10:09','1971-09-01',-365.899895),('Caron637@uwo.ca','LutherM.Rubio@uwo.ca','08:34:19','1989-08-06',-33.417537),('ccvytcan_qlqnxys@uwo.ca','Hamby@uwo.ca','00:00:06','1970-01-06',-433.835156),('ColinPaulsen@uwo.ca','Tasha_Kroll762@uwo.ca','09:37:02','1970-09-02',-285.926836),('DaciaK_Abbott@uwo.ca','Slone218@uwo.ca','01:25:15','1970-05-16',920.999062),('Debbie.Palma@uwo.ca','ArmidaZepeda@uwo.ca','13:16:16','2001-06-14',544.509255),('EmeryAcevedo@uwo.ca','EmeryAcevedo@uwo.ca','02:10:09','1991-05-19',-897.736935),('EnriqueLemaster@uwo.ca','Abe.Haskins@uwo.ca','00:03:59','2020-05-25',-672.947927),('eroi9792@uwo.ca','Alina.Wyatt@uwo.ca','01:21:55','1996-08-30',763.441692),('Fitzgerald@uwo.ca','Abram_Harvey@uwo.ca','20:52:50','2020-08-01',-8.766325),('FlorencioBConti@uwo.ca','Acevedo587@uwo.ca','18:01:16','1977-10-14',-929.489632),('Hamby@uwo.ca','EnriqueLemaster@uwo.ca','02:40:32','1996-05-15',-57.912174),('Hana_Abney@uwo.ca','AikoBain@uwo.ca','06:10:46','1989-02-16',-324.034350),('Headrick87@uwo.ca','NaomiCasillas4@uwo.ca','01:31:32','1985-01-13',-986.243998),('Jonathan.Cleary@uwo.ca','DaciaK_Abbott@uwo.ca','17:16:24','1985-07-16',-41.388514),('KelleyHoran67@uwo.ca','Acuna@uwo.ca','03:52:51','2018-12-06',-109.552196),('KyungBlanco@uwo.ca','Sparkle_RAbney@uwo.ca','17:37:32','2018-06-07',-117.261879),('Large@uwo.ca','oyjipemz_zaivthpnmi@uwo.ca','19:13:15','1977-02-27',-168.968337),('Loyd183@uwo.ca','Debbie.Palma@uwo.ca','02:45:44','1996-09-09',106.034999),('Lucien_W.Abernathy@uwo.ca','Bandy9@uwo.ca','13:37:16','1983-03-16',438.997455),('Lunsford9@uwo.ca','Raleigh_Aldrich@uwo.ca','13:49:10','2012-10-24',-396.970839),('LutherM.Rubio@uwo.ca','RacquelMajor@uwo.ca','01:36:53','1985-11-30',-632.138514),('NaomiCasillas4@uwo.ca','Buss@uwo.ca','02:20:12','1988-09-12',626.634963),('oksalwx5913@uwo.ca','oksalwx5913@uwo.ca','20:21:41','1997-02-22',-195.662244),('oyjipemz_zaivthpnmi@uwo.ca','Large@uwo.ca','14:59:08','2000-04-27',184.079956),('PetitY899@uwo.ca','Jonathan.Cleary@uwo.ca','00:13:57','1972-04-16',-963.866986),('RacquelMajor@uwo.ca','Blue@uwo.ca','00:01:05','1970-03-06',-930.204784),('Raleigh_Aldrich@uwo.ca','ShawneeChan@uwo.ca','03:53:25','1994-11-10',-270.969205),('ShawneeChan@uwo.ca','CarolAndre@uwo.ca','01:27:28','1984-05-14',-105.922704),('Slone218@uwo.ca','ColinPaulsen@uwo.ca','21:19:31','1976-08-22',8.113681),('Sparkle_RAbney@uwo.ca','Lucien_W.Abernathy@uwo.ca','00:00:01','1970-01-01',-406.035489),('Tasha_Kroll762@uwo.ca','Hana_Abney@uwo.ca','13:46:52','2005-11-12',789.036218),('Willett6@uwo.ca','Akin376@uwo.ca','23:53:08','2009-11-05',-475.761833),('Zada.Paquette438@uwo.ca','Abbott@uwo.ca','19:29:22','1975-02-06',418.266943),('Zada.Paquette438@uwo.ca','Caron637@uwo.ca','18:20:16','1974-02-06',885.841810);
/*!40000 ALTER TABLE `Location_Distance` ENABLE KEYS */;
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

-- Dump completed on 2020-11-26 12:25:28

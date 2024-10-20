-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dents_database
-- ------------------------------------------------------
-- Server version	8.3.0

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

-- Enable local_infile
SET GLOBAL local_infile = 1;


USE `dents_database`;
--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `weight` int NOT NULL,
  `energy` int NOT NULL,
  `image` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'6420256013519','Dents Menthol 85g',36,275,LOAD_FILE('D:/ProgramData/MySQL/MySQL Server 8.3/Uploads/menthol.jpg')),
	(2,'6420256001523','Dents Menthol 36g',36,269,LOAD_FILE('D:/ProgramData/MySQL/MySQL Server 8.3/Uploads/menthol36.jpg')),
    (3,'6420256002131','Dents Sweetmint',36,271,LOAD_FILE('D:/ProgramData/MySQL/MySQL Server 8.3/Uploads/sweetmint.jpg')),
    (4,'6420256012512','Dents Apple fresh white',36,268,LOAD_FILE('D:/ProgramData/MySQL/MySQL Server 8.3/Uploads/applefresh.jpg')),
    (5,'6420256012918','Dents Licorice vanilla',85,273,LOAD_FILE('D:/ProgramData/MySQL/MySQL Server 8.3/Uploads/liquoricevanilla.jpg')),
    (6,'6420256012901','Dents strawberry cream',85,272,LOAD_FILE('D:/ProgramData/MySQL/MySQL Server 8.3/Uploads/strawberry.jpg')),
    (7,'6420256016909','Dents raspberry salmiak',36,263,LOAD_FILE('D:/ProgramData/MySQL/MySQL Server 8.3/Uploads/raspberry.jpg')),
    (8,'6420256016299','Dents Sweet mango',85,274,LOAD_FILE('D:/ProgramData/MySQL/MySQL Server 8.3/Uploads/sweetmango.jpg'));
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` char(68) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jukka','$2a$10$9lBcVzYH3VvF1ouxZ3k3be48Uulam5YD8/5vYhaX.5UQS39gosVyq'),(2,'pekka','$2a$10$qeS0HEh7urweMojsnwNAR.vcXJeXR1UcMRZ2WcGQl9YeuspUdgF.q');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-16 11:22:19

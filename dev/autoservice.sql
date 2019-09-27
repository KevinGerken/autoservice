-- MySQL dump 10.13  Distrib 8.0.11, for macos10.13 (x86_64)
--
-- Host: localhost    Database: autoservice
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `detail` varchar(5000) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `labor_cost` decimal(7,2) DEFAULT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `oil_type` varchar(255) DEFAULT NULL,
  `name_plate_pressure` varchar(255) DEFAULT NULL,
  `belt_size` int(11) DEFAULT NULL,
  `belt_qty` int(11) DEFAULT NULL,
  `motor_hp` int(11) DEFAULT NULL,
  `motor_volts` int(11) DEFAULT NULL,
  `motor_amps` int(11) DEFAULT NULL,
  `motor_phase` varchar(255) DEFAULT NULL,
  `motor_sf` varchar(255) DEFAULT NULL,
  `motor_rpm` int(11) DEFAULT NULL,
  `motor_frame` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `st` char(2) DEFAULT NULL,
  `zip` int(5) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'Aut ut et labore tenetur doloremque quo nam consequatur. Similique nisi ut. Laborum vitae veritatis corporis.',0,'2018-12-11',66.78,'Chevrolet','Element','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Marion_Bergnaum38@yahoo.com','Kayli','Purdy','3917 Gilbert Rapid','Rheaton','MI',21074,'5300542500'),(2,'Voluptatem nobis voluptate eum. Et aut est est velit iure et est. Tempora aut officiis qui illum magni vel ea. A sit ab sit minima. Omnis id est repellat quas cumque. Possimus minima necessitatibus pariatur.',1,'2019-09-20',92.14,'Porsche','Volt','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','River_Huels@yahoo.com','Elda','Graham','92803 Shayna Courts','Romainefurt','KY',85316,'6125044352'),(3,'Iste quae vitae pariatur nobis quidem facilis delectus quas. Occaecati nihil omnis ad aspernatur iusto blanditiis error animi optio. Neque consequuntur accusantium quo et error qui optio illum. Laborum voluptas distinctio sequi fugiat debitis distinctio a officiis et. Soluta quos officia omnis esse aspernatur deleniti ea est tenetur.',1,'2019-03-19',621.80,'Dodge','Element','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Ressie12@yahoo.com','Furman','Grady','8550 Gottlieb Divide','Albertside','AR',17764,'5484946996'),(4,'Amet delectus consectetur quis voluptates atque eius sint quia. Voluptatem reprehenderit eum enim quis aliquam numquam quis magni. Quo rem id qui ipsam quisquam id assumenda voluptas. Perspiciatis dolorum tempore quod qui omnis.',1,'2019-07-19',621.57,'Bentley','LeBaron','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Wilhelmine_Howell@gmail.com','Thomas','Bode','141 Hartmann Brook','Bogisichside','KY',66455,'6336286674'),(5,'Ea est qui nesciunt explicabo amet quo. Adipisci aut excepturi modi molestias quaerat perferendis soluta est iusto. Fugiat dolores explicabo culpa et ut quia rem eos voluptas. Accusamus minus inventore et porro doloribus ut illum libero voluptas. Facere sunt vero ut voluptatum placeat suscipit voluptatum.',1,'2019-03-20',16.25,'Dodge','Challenger','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Brandy_Walker96@gmail.com','Melyssa','Cormier','41220 Jaskolski Divide','South Garettberg','NM',25531,'3723795393'),(6,'Officiis consectetur debitis velit rem. Reprehenderit sit omnis. Repellendus sit distinctio sit ratione officia aliquam animi dicta.',1,'2019-03-15',974.59,'BMW','Explorer','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Cecil.Stehr28@gmail.com','Jana','West','435 Tyler Court','West Concepcion','MA',18869,'6241843826'),(7,'Unde rem doloribus dolor. Sit aliquid voluptatem iure odit a ut. Harum sunt soluta velit et impedit perferendis.',1,'2018-12-03',615.73,'Cadillac','Countach','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Brad67@hotmail.com','Thomas','Koss','5738 Ines Island','Harrismouth','IA',10856,'6023502100'),(8,'Voluptatem voluptates enim voluptatem quod illo recusandae nesciunt. Consequatur veritatis est magnam voluptates. Ratione nesciunt qui temporibus quibusdam ea. Totam eligendi non eos tempore. Ut quasi sapiente distinctio corporis fugiat illo id voluptatum a.',0,'2019-06-24',297.02,'Chrysler','Malibu','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Joanne_Satterfield60@hotmail.com','Quinton','Brakus','30685 Reginald Shores','North Constanceport','IL',82597,'4370623663'),(9,'Architecto quae sapiente et laboriosam nisi architecto quaerat architecto. Sit aperiam ipsam nam nemo omnis voluptate esse. Consequatur illo nesciunt aut nam qui et minima quam.',0,'2019-08-03',486.85,'Aston Martin','Altima','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Lloyd_Fay1@yahoo.com','Green','Daniel','91886 Ratke Course','Lake Rachelleburgh','MT',69875,'8204053266'),(10,'Laboriosam eum eveniet iusto sint culpa aliquam et. Dolores dolores consequatur praesentium quod. Aut sequi placeat.',0,'2018-12-12',444.71,'Hyandai','Camaro','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Pietro34@yahoo.com','Giles','Beatty','35756 Lyla Turnpike','East Gennaromouth','GA',16898,'2183189018'),(11,'Facere totam sapiente voluptates quia porro aperiam recusandae. Qui consectetur voluptatem. Et veritatis quo eum veritatis minima quo. Inventore fugiat animi blanditiis. Sapiente qui quisquam nisi laudantium. Fugit occaecati dolores ipsum esse cum occaecati iste enim sed.',1,'2019-07-21',524.06,'BMW','Jetta','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Prince_Williamson@yahoo.com','Austen','Langosh','830 Lori Underpass','New Armandfort','IN',9716,'0699289839'),(12,'Inventore saepe et aut quaerat qui et. Soluta minus expedita quis ullam incidunt distinctio natus culpa. Quo a veniam odio eaque velit beatae occaecati quisquam. Et ab enim suscipit maxime libero debitis voluptatem ut at.',1,'2019-07-03',170.63,'Aston Martin','Explorer','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Garth_Carroll63@gmail.com','Monroe','Frami','143 John Vista','Silasside','NH',89896,'8755846945'),(13,'Assumenda corrupti beatae rerum ut fuga. Autem ut impedit id. At eligendi odit perspiciatis. Dolor reprehenderit qui fuga assumenda. Ex rem provident quo soluta voluptas et voluptas. In ut enim sunt fuga.',1,'2019-03-22',425.52,'Volkswagen','Camry','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Carlos.Bradtke66@hotmail.com','Green','Crooks','4685 Ferry Prairie','Daynaside','CT',72886,'8706573202'),(14,'Dolor eum mollitia neque impedit veritatis perspiciatis repellendus et. Asperiores et fuga qui ex pariatur totam. Ipsa sed deleniti nisi. Eos sunt quas. Illo perferendis facilis amet.',1,'2019-04-11',792.47,'Maserati','ATS','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Arnaldo_Mosciski27@hotmail.com','Raheem','Boehm','3809 Laura Roads','Abbytown','MD',52294,'4937776932'),(15,'Id velit velit tempore earum quia amet enim officiis cumque. Consequatur dolores id ut facere et omnis quam. Sapiente fuga hic ullam aut odio.',0,'2019-09-16',593.29,'Mercedes Benz','Countach','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Juana_Heller27@gmail.com','Rae','O\'Kon','035 Victoria Shore','New Ronaldoborough','ND',48633,'0445333119'),(16,'Nobis excepturi dolore id amet iusto voluptas eos ipsa. Quaerat alias architecto aliquam dolorem est sed ipsum iure. Eius aut consequuntur alias accusantium sed ab dolorum autem. Eum et soluta amet.',0,'2019-01-01',239.48,'Dodge','Challenger','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Amina.Brekke7@gmail.com','Adela','Medhurst','55716 Antonio Landing','Sylvesterview','TX',31986,'8365346567'),(17,'Est at repellat consequatur eveniet est fuga ut architecto. Doloribus in dolores itaque itaque commodi rerum ut sapiente. Architecto illo aliquid est. Porro nam rem harum sunt unde a.',1,'2019-02-21',402.01,'Lamborghini','Prius','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Freida20@yahoo.com','Abraham','Pagac','89762 Consuelo Rest','West Anastasiastad','MD',16078,'4230082917'),(18,'Facere explicabo autem doloribus sint dolorum. Expedita voluptas aperiam dolores voluptatem vel alias veniam. Et pariatur itaque vel illo qui eius. Et nisi eveniet nesciunt rerum. Ad quia explicabo veritatis rerum. Aut veritatis quisquam quia voluptatem similique voluptatem expedita qui.',0,'2019-01-01',489.60,'Bentley','Jetta','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Gabriella62@yahoo.com','Ursula','Hoeger','2643 Dare Views','New Aleen','VT',27045,'2535237827'),(19,'Molestiae sed sit vel. Aut nam consequatur soluta fugiat nesciunt temporibus dolorem accusantium maxime. Aliquam qui voluptate reprehenderit quae fuga enim impedit dolorum. Dignissimos deserunt fuga. Enim vitae aliquam earum minima pariatur. Architecto fugit quae blanditiis.',1,'2019-04-02',185.45,'Tesla','Silverado','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Gregorio_Kutch@yahoo.com','Ethelyn','Fadel','093 Madalyn Walks','Port Arnaldo','PA',80239,'2583471217'),(20,'Fuga neque in ex aut consequatur cumque tenetur aliquid. Qui sint occaecati vero expedita deleniti dolor magnam. Modi consectetur est omnis qui. Architecto porro ut perspiciatis consequatur quod nam. Odio dolor sed assumenda libero laboriosam et ut nam. Ex aut vel voluptas repellendus possimus id voluptatum ex a.',0,'2019-02-19',233.67,'Tesla','Impala','10W30','32',82,2,186,6,55,'3','1.15',3000,'42','Enos.Murray19@gmail.com','Mason','Bergnaum','63167 Solon Trail','East Jaydon','RI',8974,'9981751354');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parts`
--

DROP TABLE IF EXISTS `parts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `parts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_name` varchar(255) DEFAULT NULL,
  `price` decimal(7,2) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `parts_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parts`
--

LOCK TABLES `parts` WRITE;
/*!40000 ALTER TABLE `parts` DISABLE KEYS */;
INSERT INTO `parts` VALUES (1,'spark plug',12.05,1),(2,'muffler',84.48,2),(3,'tailpipe',20.37,3),(4,'belt',58.59,4),(5,'alternator',0.30,5),(6,'tire',29.03,6),(7,'brake pad',66.34,7),(8,'hose',99.92,8),(9,'tailpipe',42.24,9),(10,'oil filter',24.45,10),(11,'spark plug',63.60,1),(12,'muffler',56.57,2),(13,'tailpipe',42.65,3),(14,'belt',49.28,4),(15,'alternator',32.77,5),(16,'tire',91.34,6),(17,'brake pad',93.96,7),(18,'hose',48.83,8),(19,'tailpipe',91.68,9),(20,'oil filter',6.59,10),(21,'spark plug',77.86,1),(22,'muffler',58.81,2),(23,'tailpipe',25.50,3),(24,'belt',21.35,4),(25,'alternator',22.21,5),(26,'tire',3.75,6),(27,'brake pad',24.84,7),(28,'hose',8.07,8),(29,'tailpipe',87.80,9),(30,'oil filter',9.09,10),(31,'spark plug',87.08,1),(32,'muffler',4.05,2),(33,'tailpipe',90.77,3),(34,'belt',52.67,4),(35,'alternator',75.53,5),(36,'tire',69.95,6),(37,'brake pad',86.93,7),(38,'hose',79.56,8),(39,'tailpipe',74.13,9),(40,'oil filter',23.86,10);
/*!40000 ALTER TABLE `parts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-27 11:01:28

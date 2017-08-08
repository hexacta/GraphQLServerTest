-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.5.55-0+deb8u1 - (Debian)
-- SO del servidor:              debian-linux-gnu
-- HeidiSQL Versión:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para torneodefutbol
CREATE DATABASE IF NOT EXISTS `torneodefutbol` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `torneodefutbol`;

-- Volcando estructura para tabla torneodefutbol.players
CREATE TABLE IF NOT EXISTS `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `fullName` varchar(150) DEFAULT NULL,
  `idTeam` int(11) DEFAULT NULL,
  `captain` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `playerteam_idx` (`idTeam`),
  CONSTRAINT `playerteam` FOREIGN KEY (`idTeam`) REFERENCES `teams` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla torneodefutbol.players: ~67 rows (aproximadamente)
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` (`id`, `name`, `fullName`, `idTeam`, `captain`) VALUES
	(1, 'kdecibe', 'Kevin Decibe', 3, 1),
	(2, 'eselman', 'Esteban Socas Selman', 4, 1),
	(3, 'malvarez', 'Maximiliano Alvarez', 5, 1),
	(4, 'lsantillan', 'Leonel Santillan', 6, 1),
	(5, 'dsadrinas', 'David Sadrinas', 7, 1),
	(6, 'fbustos', 'Franco Bustos', 8, 1),
	(7, 'jrame', 'Javier Rame', 9, 1),
	(8, 'pviola', 'Pablo Viola', 10, 1),
	(9, 'dfrias', 'David Frias', 11, 1),
	(10, 'emeijomil', 'Ezequiel Meijomil', 3, 0),
	(11, 'mwieja', 'Marcelo Wieja', 3, 0),
	(12, 'sfiorillo', 'Sergio Fiorillo', 3, 0),
	(13, 'mcarrera', 'Martin Carrera', 3, 0),
	(14, 'jlopez', 'Jose Luis "El Puma" Lopez', 3, 0),
	(15, 'lgarcia', 'Leandro Garcia', 4, 0),
	(16, 'dorozco', 'Daniel Orozco', 4, 0),
	(17, 'ldelmoro', 'Lucas Delmoro', 4, 0),
	(18, 'gnano', 'Gustavo Nano', 4, 0),
	(19, 'masenzo', 'Manuel Asenzo', 4, 0),
	(20, 'gmassenzano', 'Gerardo Massenzano', 7, 0),
	(21, 'fdib', 'Fabrizio Dib', 7, 0),
	(22, 'jmougan', 'Juan Mougan', 7, 0),
	(23, 'mjimenez', 'Maximiliano Jimenez', 7, 0),
	(24, 'emontiel', 'Enoc Montiel', 7, 0),
	(25, 'fgaudino', 'Federico Gaudino', 8, 0),
	(26, 'fforciniti', 'Federico Forciniti', 8, 0),
	(27, 'lfernandez', 'Lucas "El Mago" Fernandez', 8, 0),
	(28, 'fpippia', 'Facundo Pippia', 8, 0),
	(29, 'jausfet', 'Javier Ausfet', 8, 0),
	(30, 'rmelendez', 'Rodrigo "Lole" Melendez', 5, 0),
	(31, 'ealvea', 'Emanuel Alvea', 5, 0),
	(32, 'jsaucedo', 'Juan Saucedo', 5, 0),
	(33, 'jabreu', 'Jorge Abreu', 5, 0),
	(34, 'mnavarro', 'Mateo Navarro', 5, 0),
	(35, 'mzukeran', 'Marcio Zukeran', 5, 0),
	(36, 'adebernardi', 'Ariel Debernardi', 9, 0),
	(37, 'mllave', 'Martin de la Llave', 9, 0),
	(38, 'mtejedor', 'Manuel Tejedor', 9, 0),
	(39, 'jricalde', 'Johnatan Ricalde', 9, 0),
	(40, 'fcittadini', 'Francisco Cittadini', 9, 0),
	(41, 'rgarcia', 'Rodrigo "Rolo" García Agüero', 10, 0),
	(42, 'fsanchez', 'Fernando Sanchez', 10, 0),
	(43, 'vdilena', 'Victor Di Lena', 10, 0),
	(44, 'fbucich', 'Federico Bucich', 10, 0),
	(45, 'mpena', 'Marco Pena', 10, 0),
	(46, 'estreitenberger', 'Ezequiel Streitenberger', 6, 0),
	(47, 'jmarianacci', 'Juan Ignacio Marianacci', 6, 0),
	(48, 'ngallinal', 'Nicolás Gallinal', 6, 0),
	(49, 'iaudi', 'Ignacio Audi', 6, 0),
	(50, 'fdoll', 'Federico Doll', 6, 0),
	(51, 'tnaftali', 'Tobias Naftali', 11, 0),
	(52, 'dpedro', 'Diego Pedro', 11, 0),
	(53, 'jtibi', 'Javier Tibi', 11, 0),
	(54, 'jcaceres', 'Javier Caceres', 11, 0),
	(55, 'msoberon', 'Matias Soberon', 11, 0),
	(56, 'fleiva', 'Federico Leiva', 8, 0),
	(57, 'cripetta', 'Carlos Ripetta', 6, 0),
	(59, 'edeleo', 'Esteban José de Leo', 5, 0),
	(60, 'giribarren', 'Gonzalo Iribarren', 6, 0),
	(61, 'jibianchi', 'Juan Ignacio "El Gato" Bianchi', 10, 0),
	(62, 'dzacharias', 'Daniel Zacharías', 7, 0),
	(63, 'ppecora', 'Pablo Pécora', 3, 0),
	(64, 'jsaucedo', 'Juan Saucedo', NULL, 0),
	(65, 'jsaucedo', 'Juan Saucedo', NULL, 0),
	(66, 'jsaucedo', 'Juan Saucedo', NULL, 0),
	(67, 'jsaucedo', 'Juan Saucedo', NULL, 0),
	(68, 'jsaucedo', 'Juan Saucedo', NULL, 0);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;

-- Volcando estructura para tabla torneodefutbol.teams
CREATE TABLE IF NOT EXISTS `teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `photo` varchar(250) DEFAULT 'Equipo.jpg',
  `zone` int(11) DEFAULT NULL,
  `points` int(11) DEFAULT '0',
  `matchesPlayed` int(11) DEFAULT '0',
  `matchesWon` int(11) DEFAULT '0',
  `matchesDrawn` int(11) DEFAULT '0',
  `matchesLost` int(11) DEFAULT '0',
  `goalsScored` int(11) DEFAULT '0',
  `goalsReceived` int(11) DEFAULT '0',
  `dif` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla torneodefutbol.teams: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` (`id`, `name`, `photo`, `zone`, `points`, `matchesPlayed`, `matchesWon`, `matchesDrawn`, `matchesLost`, `goalsScored`, `goalsReceived`, `dif`) VALUES
	(3, 'Fui a la pelota', 'Equipo1.jpg', 1, 9, 4, 3, 0, 1, 25, 15, 10),
	(4, 'Ipod Nano', 'Equipo2.jpg', 1, 9, 4, 3, 0, 1, 28, 20, 8),
	(5, 'Pumpa FC', 'Equipo3.jpg', 1, 0, 4, 0, 0, 4, 24, 38, -14),
	(6, 'Don barredora', 'Equipo4.jpg', 1, 6, 4, 2, 0, 2, 28, 32, -4),
	(7, 'El comandante', 'Equipo5.jpg', 2, 9, 4, 3, 0, 1, 43, 16, 27),
	(8, 'Volvé Mago', 'Equipo6.jpg', 2, 3, 4, 1, 0, 3, 26, 53, -27),
	(9, 'Wanchopp', 'Equipo7.jpg', 2, 9, 4, 3, 0, 1, 43, 22, 21),
	(10, 'Copa Juniors', 'Equipo8.jpg', 2, 9, 4, 3, 0, 1, 47, 26, 21),
	(11, 'Toco y no voy', 'Equipo9.jpg', 2, 0, 4, 0, 0, 4, 21, 63, -42);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

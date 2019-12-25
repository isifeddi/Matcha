-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql:3306
-- Généré le :  mer. 25 déc. 2019 à 19:32
-- Version du serveur :  5.7.27
-- Version de PHP :  7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `MATCHA`
--

-- --------------------------------------------------------

--
-- Structure de la table `blockList`
--

CREATE TABLE `blockList` (
  `blocker_id` int(11) DEFAULT NULL,
  `blocked_id` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `blockList`
--

INSERT INTO `blockList` (`blocker_id`, `blocked_id`, `date`) VALUES
(18, 4, '2019-12-25 00:00:00'),
(18, 6, '2019-12-25 00:00:00'),
(18, 12, '2019-12-25 00:00:00'),
(18, 20, '2019-12-25 00:00:00'),
(18, 20, '2019-12-10 00:00:00'),
(18, 21, '2019-12-03 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `isProfilePic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `user_id`, `path`, `isProfilePic`) VALUES
(1, 5, '2019-12-17T21:21:19.060Z655568.jpg', 0),
(2, 5, '2019-12-17T22:01:12.030Z655568.jpg', 0),
(4, 5, '2019-12-17T22:01:32.739Zright_picture.jpg', 1),
(5, 5, '2019-12-18T15:18:32.294Z655568.jpg', 0),
(6, 5, '2019-12-18T15:18:36.741Zright_picture.jpg', 0),
(25, 18, '2019-12-24T22:00:52.463Z655568.jpg', 1),
(27, 18, '2019-12-24T23:46:46.579Zright_picture.jpg', 0),
(29, 18, '2019-12-25T02:16:12.106Zright_picture.jpg', 0),
(30, 19, '2019-12-25T03:49:06.183Zright_picture.jpg', 1),
(31, 18, '2019-12-25T17:19:34.824Z655568.jpg', 0);

-- --------------------------------------------------------

--
-- Structure de la table `interests`
--

CREATE TABLE `interests` (
  `interest_id` int(11) NOT NULL,
  `interest` varchar(255) NOT NULL,
  `createdBy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `interests`
--

INSERT INTO `interests` (`interest_id`, `interest`, `createdBy`) VALUES
(1, 'Sport', 1),
(2, 'Reading', 1),
(3, 'Swimming', 1),
(4, 'Travel', 1),
(5, 'Gaming', 1),
(6, '1337', 1),
(7, 'xnxx', 18),
(8, 'porneHub', 18),
(9, 'kk', 18);

-- --------------------------------------------------------

--
-- Structure de la table `likesList`
--

CREATE TABLE `likesList` (
  `liker_id` int(11) DEFAULT NULL,
  `liked_id` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `verif_token` varchar(255) NOT NULL DEFAULT '',
  `confirmed` int(11) NOT NULL DEFAULT '0',
  `complete` int(11) NOT NULL DEFAULT '0',
  `gender` varchar(255) DEFAULT NULL,
  `sexOrient` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `rating` int(11) NOT NULL DEFAULT '0',
  `isOnline` int(11) NOT NULL DEFAULT '0',
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `lastSignIn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `verif_token`, `confirmed`, `complete`, `gender`, `sexOrient`, `bio`, `birthday`, `rating`, `isOnline`, `latitude`, `longitude`, `lastSignIn`) VALUES
(18, 'swd', 'erere', 'ibouroum', 'ibouroummana@gmail.com', '$2b$10$zOcTXSnpI5WlwJgQPy7/oeLo8FSJH3Jsbnv1JS0dMZvcA7imgP9Xm', '2d94b1434d2c7f42b9fbc10f9a92402c4d27ef7a143a8d6d557afe2425d6eb1efe5346685a7e618feb07ebd96b3b833d2d8231490ff598cbfd007d32089e9d06', 1, 3, 'male', 'women', 'nike', '2000-01-01', 5, 0, 32.8811, -6.9063, '2019-12-25 19:31:08'),
(19, 'ss', 'sss', 'sss', 'ibou@gmail.com', '$2b$10$aHXw/3BjUe8vTvtZ4sB/9.HXnrM6Wvidmk/M0WwGSivnmp3hCtwGm', '9aee865c51296071e244acb5f457bb773e8053cb18f45c7e614f9d44c8488b1dd4f9af7885d0680f4767d5383ee156cce456891205fce64bde350afc99631a11', 1, 3, 'male', 'women', 'asasas', '2000-02-22', 0, 0, 32.8847, -6.89682, '2019-12-25 17:13:55'),
(20, 'gfg', 'ghfgh', 'hh', 'hhh@hh.hhhh', '$2b$10$1MQAqvzlxuZ.1nhQMj4zduWAyYIQAgte/O/ix3NOFdVCPT/PYtoVu', 'c90caa6cebde9b8bbd8b35474e78abb5f3f0ed236fe28ccecd5bbf986ce6776d991a2e7c3e820afb7d73cbaf854e687649342df688968af422060464baa4c671', 1, 0, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL),
(21, 'dfd', 'fdfdf', 'aaa', 'aaa@aaa.aaa', '$2b$10$jHC4cB4viyGwxuuxLgM9beA7xK1MvdQcOKln7ELTsTqReuAUhmxCi', '1fcbff15df4949c94a5e7ef5c668b9eba522de5ac71ac1a2686477996f0cc828d61776707e132676179350cc6ce0896a1dd65febfce76f4d8b973232f430e505', 1, 0, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL),
(22, 'll', 'll', 'll', 'lll@lll.llll', '$2b$10$RaKhTZ3V.OD.OsXfpJ7IZOYd4jJiQbHqRBvNjixKPJc1L4AoIiOei', '956eb86e6d6443ebbfe12ed368fba19651710d0aeb18212fbdfeea568889c51d9e8175e0519e79431867734d431c59e8d533a9fdb8ffb0d7f5f61ef63e8dffc2', 1, 0, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL),
(23, 'aa', 'aaa', 'aaaaaaaa', 'aaaaaaaaa@aaaaa.aaa', '$2b$10$DzJl0wCNLBvMVvMwdr0rNOTYgJ0vUbBygzbvl5oxH.cZQGNK2nS4S', '958ae2aa7f1c0dfea001698904ec721920a95a9e3a333309e0d301f30b8945241ff90d7cc02a7362e9c3a1ba76737061acb1a0b17db29942b477cd0d8222922a', 1, 0, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `usersInterests`
--

CREATE TABLE `usersInterests` (
  `uId` int(11) NOT NULL,
  `iId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `usersInterests`
--

INSERT INTO `usersInterests` (`uId`, `iId`) VALUES
(1, 2),
(1, 4),
(1, 5),
(5, 1),
(5, 3),
(18, 1),
(18, 2),
(18, 7),
(18, 8),
(19, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `interests`
--
ALTER TABLE `interests`
  ADD PRIMARY KEY (`interest_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `usersInterests`
--
ALTER TABLE `usersInterests`
  ADD PRIMARY KEY (`uId`,`iId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `interests`
--
ALTER TABLE `interests`
  MODIFY `interest_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

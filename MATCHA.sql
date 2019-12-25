-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql:3306
-- Généré le :  Dim 15 déc. 2019 à 23:39
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
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `isProfilePic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(6, '1337', 1);

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
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `verif_token`, `confirmed`, `complete`, `gender`, `sexOrient`, `bio`, `birthday`) VALUES
(1, 'ILYAS', 'SIFEDDINE', 'isifeddi', 'sifeddineilyass@gmail.com', '$2b$10$9ljLeuUKzaNwk5PK9POnguF1l0qKTq3QZZbvZ8YhsQxsQPDI8e7CK', 'b49f62d27a6bb40a5d554d02ae255c0a9ed019126a96b95fa6fb93512033081663543abe5d63d3452abb3507f075ec3b4844fbcab2f6e20ce19ed4835f4e224a', 1, 1, 'male', 'both', 'be like water ;)', '1998-10-28');

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
(1, 5);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `interests`
--
ALTER TABLE `interests`
  MODIFY `interest_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql:3306
-- Généré le :  lun. 09 déc. 2019 à 20:37
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
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `interests`
--

CREATE TABLE `interests` (
  `interest_id` int(11) NOT NULL,
  `interest` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `interests`
--

INSERT INTO `interests` (`interest_id`, `interest`) VALUES
(1, 'Sport'),
(2, 'Reading'),
(3, 'Swimming'),
(4, 'Travel'),
(5, 'Gaming'),
(6, 'dsf'),
(7, 'dsfdsf'),
(8, 'dsfdsfdsfdsds');

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
  `gender` varchar(255) NOT NULL,
  `sexOrient` varchar(255) NOT NULL,
  `bio` varchar(255) NOT NULL,
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `verif_token`, `confirmed`, `complete`, `gender`, `sexOrient`, `bio`, `birthday`) VALUES
(1, 'ILYAS', 'SIFEDDINE', 'isifeddi', 'sifeddineilyass@gmail.com', '$2b$10$eWEoVzJyBAcAzJz6Om.VguYFG//x5x/2ptNr7UQTcZuO7pPZStKxC', '2efbcb8faba6b95fe1941ca7dec159e7f25f602650b57a16b86694c6fe1416d8071b271ba35297dcf97c3391a666e7047ec728e475ee304827969e1c736986fd', 1, 0, '', '', '', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `usersInterests`
--

CREATE TABLE `usersInterests` (
  `uId` int(11) NOT NULL,
  `iId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  MODIFY `interest_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

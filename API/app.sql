-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 02 Maj 2020, 16:45
-- Wersja serwera: 10.4.11-MariaDB
-- Wersja PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `app`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `miejsca_pracy`
--

CREATE TABLE `miejsca_pracy` (
  `id` int(11) NOT NULL,
  `oznaczenie` tinytext NOT NULL,
  `opis` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `miejsca_pracy`
--

INSERT INTO `miejsca_pracy` (`id`, `oznaczenie`, `opis`) VALUES
(1, 'Stanowisko nr 1', 'To jest stanowisko nr 1'),
(2, 'Stanowisko nr 2', 'To jest stanowisko nr 2');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `mozliwe_rodzaje_wyposazenia`
--

CREATE TABLE `mozliwe_rodzaje_wyposazenia` (
  `id` int(11) NOT NULL,
  `nazwa_rodzaju` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `mozliwe_rodzaje_wyposazenia`
--

INSERT INTO `mozliwe_rodzaje_wyposazenia` (`id`, `nazwa_rodzaju`) VALUES
(1, 'komputer'),
(2, 'klawiatura');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `osoba`
--

CREATE TABLE `osoba` (
  `id` int(11) NOT NULL,
  `imie` tinytext NOT NULL,
  `nazwisko` tinytext NOT NULL,
  `telefon` tinytext NOT NULL,
  `email` tinytext NOT NULL,
  `opis` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `osoba`
--

INSERT INTO `osoba` (`id`, `imie`, `nazwisko`, `telefon`, `email`, `opis`) VALUES
(1, 'Karol', 'Hamburger', '000000000', 'karolhamburger@gmail.stek', 'heheheew');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rezerwacja`
--

CREATE TABLE `rezerwacja` (
  `id` int(11) NOT NULL,
  `id_miejsce_pracy` int(11) NOT NULL,
  `id_osoba` int(11) NOT NULL,
  `data_rezerwacji` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wyposazenie`
--

CREATE TABLE `wyposazenie` (
  `id` int(11) NOT NULL,
  `id_mozliwe_rodzaje_wyposazenia` int(11) NOT NULL,
  `model` tinytext NOT NULL,
  `oznaczenie` tinytext NOT NULL,
  `rok_zakupu` tinytext NOT NULL,
  `wartosc` tinytext NOT NULL,
  `opis` tinytext NOT NULL,
  `id_miejsce_pracy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `wyposazenie`
--

INSERT INTO `wyposazenie` (`id`, `id_mozliwe_rodzaje_wyposazenia`, `model`, `oznaczenie`, `rok_zakupu`, `wartosc`, `opis`, `id_miejsce_pracy`) VALUES
(1, 1, 'Lg gt500 Bekon', 'Komputer - Stanowisko 1', '2020', '8000', 'To jest komputer ze stanowiska 1', 1),
(2, 2, 'Razer nie ma zer', 'Komputer - Stanowisko 1', '2020', '1200', 'To jest klawiatura ze stanowiska 1', 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `miejsca_pracy`
--
ALTER TABLE `miejsca_pracy`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `mozliwe_rodzaje_wyposazenia`
--
ALTER TABLE `mozliwe_rodzaje_wyposazenia`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `osoba`
--
ALTER TABLE `osoba`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `rezerwacja`
--
ALTER TABLE `rezerwacja`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `wyposazenie`
--
ALTER TABLE `wyposazenie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `miejsca_pracy`
--
ALTER TABLE `miejsca_pracy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `mozliwe_rodzaje_wyposazenia`
--
ALTER TABLE `mozliwe_rodzaje_wyposazenia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `osoba`
--
ALTER TABLE `osoba`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `rezerwacja`
--
ALTER TABLE `rezerwacja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `wyposazenie`
--
ALTER TABLE `wyposazenie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

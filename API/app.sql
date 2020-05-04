-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 04 Maj 2020, 22:42
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
(2, 'Stanowisko nr 2', 'To jest stanowisko nr 2'),
(3, 'Stanowisko nr 3', 'To jest stanowisko nr 3'),
(4, 'Stanowisko nr 4', 'To jest stanowisko nr 4'),
(5, 'Stanowisko nr 5', 'To jest stanowisko nr 5');

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
(2, 'klawiatura'),
(3, 'myszka'),
(4, 'telefon'),
(5, 'podkładka');

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
(1, 'Karol', 'Hamburger', '000000000', 'karolhamburger@gmail.com', 'To jest Karol Hamburger'),
(2, 'Damian', 'Ratajczak', '123456789', 'damianratajczak@gmail.com', 'To jest Damian Ratajczak'),
(3, 'Zbigniew', 'Słowacki', '123432123', 'zbigniewslowacki@gmail.com', 'To jest Zbigniew Słowacki'),
(4, 'Grzegorz', 'Mickiewicz', '765678876', 'grzegorzmickiewicz@gmail.com', 'To jest Grzegorz Mickiewicz'),
(5, 'Jacek', 'Soplica', '543456787', 'jaceksoplice@gmail.com', 'To jest Jacek Soplica');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rezerwacja`
--

CREATE TABLE `rezerwacja` (
  `id` int(11) NOT NULL,
  `id_miejsce_pracy` int(11) NOT NULL,
  `id_osoba` int(11) NOT NULL,
  `data_startu_rezerwacji` datetime NOT NULL,
  `data_konca_rezerwacji` datetime NOT NULL
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
(1, 1, 'Dell PC - 1', 'Komputer - Stanowisko 1', '2020', '2100', 'To jest komputer ze stanowiska 1', 1),
(2, 2, 'Dell klawiatura - 1', 'Klawiatura - Stanowisko 1', '2020', '99', 'To jest klawiatura ze stanowiska 1', 1),
(3, 1, 'Dell PC - 2', 'Komputer - Stanowisko 2', '2020', '2100', 'To jest komputer ze stanowiska 2', 2),
(4, 2, 'Dell klawiatura - 2', 'Klawiatura - Stanowisko 2', '2020', '99', 'To jest klawiatura ze stanowiska 2', 2),
(5, 1, 'Dell PC - 3', 'Komputer - Stanowisko 3', '2020', '2100', 'To jest komputer ze stanowiska 3', 3),
(6, 2, 'Dell klawiatura - 3', 'Klawiatura - Stanowisko 3', '2020', '99', 'To jest klawiatura ze stanowiska 3', 3),
(7, 1, 'Dell PC - 4', 'Komputer - Stanowisko 4', '2020', '2100', 'To jest komputer ze stanowiska 4', 4),
(8, 2, 'Dell klawiatura - 4', 'Klawiatura - Stanowisko 4', '2020', '99', 'To jest klawiatura ze stanowiska 4', 4),
(9, 1, 'Dell PC - 5', 'Komputer - Stanowisko 5', '2020', '2100', 'To jest komputer ze stanowiska 5', 5),
(10, 2, 'Dell klawiatura - 5', 'Klawiatura - Stanowisko 5', '2020', '99', 'To jest klawiatura ze stanowiska 5', 5),
(11, 3, 'Dell Myszka - 1', 'Myszka - Stanowisko 1', '2020', '87', 'To jest myszka ze stanowiska 1', 1),
(12, 3, 'Dell myszka - 2', 'Myszka - Stanowisko - 2', '2020', '87', 'To jest myszka ze stanowiska 2', 2),
(13, 3, 'Dell Myszka - 3', 'Myszka - Stanowisko 3', '2020', '87', 'To jest myszka ze stanowiska 3', 3),
(14, 3, 'Dell myszka - 4', 'Myszka - Stanowisko 4', '2020', '87', 'To jest myszka ze stanowiska 4', 4),
(15, 4, 'Samsung telefon - 1', 'Telefon - Stanowisko 1', '2020', '500', 'To jest telefon ze stanowiska 1', 1),
(16, 4, 'Samsung telefon - 2', 'Telefon - Stanowisko 2', '2020', '500', 'To jest telefon ze stanowiska 2', 2),
(17, 4, 'Samsung telefon - 3', 'Telefon - Stanowisko 3', '2020', '500', 'To jest telefon ze stanowiska 3', 3),
(18, 4, 'Samsung telefon - 4', 'Telefon - Stanowisko 4', '2020', '500', 'To jest telefon ze stanowiska 4', 4),
(19, 4, 'Samsung telefon - 5', 'Telefon - Stanowisko 5', '2020', '500', 'To jest telefon ze stanowiska 5', 5),
(20, 3, 'Dell myszka - 5', 'Myszka - Stanowisko 5', '2020', '87', 'To jest myszka ze stanowiska 5', 5),
(21, 5, 'Podkładka - 1', 'Podkładka P1', '2020', '25', 'To jest podkładka', 0),
(22, 5, 'Podkładka - 2', 'Podkładka P2', '2020', '25', 'To jest podkładka', 0),
(23, 5, 'Podkładka 3', 'Podkładka P3', '2020', '25', 'To jest podkładka', 0),
(24, 5, 'Podkładka - 4', 'Podkładka P4', '2020', '25', 'To jest podkładka', 0),
(25, 5, 'Podkładka - 5', 'Podkładka P5', '2020', '25', 'To jest podkładka', 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT dla tabeli `mozliwe_rodzaje_wyposazenia`
--
ALTER TABLE `mozliwe_rodzaje_wyposazenia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `osoba`
--
ALTER TABLE `osoba`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `rezerwacja`
--
ALTER TABLE `rezerwacja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- AUTO_INCREMENT dla tabeli `wyposazenie`
--
ALTER TABLE `wyposazenie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

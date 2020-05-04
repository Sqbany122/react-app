-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 04 Maj 2020, 21:37
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

--
-- Zrzut danych tabeli `rezerwacja`
--

INSERT INTO `rezerwacja` (`id`, `id_miejsce_pracy`, `id_osoba`, `data_startu_rezerwacji`, `data_konca_rezerwacji`) VALUES
(113, 1, 1, '2020-05-05 08:00:00', '2020-05-05 16:00:00'),
(114, 1, 1, '2020-05-05 17:00:00', '2020-05-05 20:00:00'),
(115, 1, 2, '2020-05-21 08:00:00', '2020-05-21 16:00:00'),
(116, 1, 1, '2020-05-24 08:00:00', '2020-05-24 16:00:00'),
(117, 1, 1, '2020-05-31 08:00:00', '2020-05-31 16:00:00'),
(118, 1, 1, '2020-06-01 08:00:00', '2020-06-01 16:00:00'),
(119, 1, 2, '2020-05-01 08:00:00', '2020-05-01 16:00:00'),
(120, 5, 1, '2020-05-12 08:00:00', '2020-05-12 16:00:00'),
(121, 5, 1, '2020-05-12 07:00:00', '2020-05-12 15:00:00'),
(122, 4, 1, '2020-05-14 08:00:00', '2020-05-14 16:00:00'),
(123, 4, 1, '2020-05-14 07:00:00', '2020-05-14 15:00:00'),
(124, 2, 1, '2020-05-22 08:00:00', '2020-05-22 16:00:00'),
(125, 2, 1, '2020-05-22 17:00:00', '2020-05-22 19:00:00'),
(126, 3, 1, '2020-05-04 08:00:00', '2020-05-04 16:00:00'),
(127, 1, 3, '2020-07-30 08:00:00', '2020-07-30 16:00:00');

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
(2, 2, 'SteelSeries 300', 'Klawiatura - Stanowisko 1', '2020', '1200', 'To jest klawiatura ze stanowiska 1', 1),
(3, 1, 'Lg gt500 Bekon', 'Komputer - Stanowisko 2', '2020', '8000', 'To jest komputer ze stanowiska 2', 2),
(4, 2, 'Corsair 700', 'Klawiatura - Stanowisko 2', '2020', '1200', 'To jest klawiatura ze stanowiska 2', 2),
(5, 1, 'Asus pc', 'Komputer - Stanowisko 3', '2020', '8000', 'To jest komputer ze stanowiska 3', 3),
(6, 2, 'SteelSeries 8000', 'Klawiatura - Stanowisko 3', '2020', '1200', 'To jest klawiatura ze stanowiska 3', 3),
(7, 1, 'Komputer PC', 'Komputer - Stanowisko 4', '2020', '8000', 'To jest komputer ze stanowiska 4', 4),
(8, 2, 'SteelSeries 8734', 'Klawiatura - Stanowisko 4', '2020', '1200', 'To jest klawiatura ze stanowiska 4', 4),
(9, 1, 'Asus pc nowy', 'Komputer - Stanowisko 5', '2020', '8000', 'To jest komputer ze stanowiska 5', 5),
(10, 2, 'Razer 76565', 'Klawiatura - Stanowisko 5', '2020', '1200', 'To jest klawiatura ze stanowiska 5', 5);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `osoba`
--
ALTER TABLE `osoba`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `rezerwacja`
--
ALTER TABLE `rezerwacja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT dla tabeli `wyposazenie`
--
ALTER TABLE `wyposazenie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

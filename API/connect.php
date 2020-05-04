<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

class Database {
    
    static private $pdo;

    static private function connect() {
        self::$pdo = new PDO('mysql:host=localhost;dbname=app', 'root', '');  
    }
    
    static public function get_miejsca_pracy() {
        self::connect();
        $sql = "
        SELECT * 
        FROM miejsca_pracy";
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute();
        echo json_encode($stmt->fetchAll());
    }

    static public function get_wyposazenie() {
        self::connect();
        $sql = "
        SELECT a.id, a.model, a.oznaczenie, a.rok_zakupu, a.wartosc, a.opis, a.id_miejsce_pracy, b.nazwa_rodzaju, c.oznaczenie as oznaczenia,
        CASE 
        WHEN a.id_miejsce_pracy = 0 THEN 'Brak przypisania'
        WHEN a.id_miejsce_pracy = c.id THEN c.oznaczenie
        END AS sprawdzenie_przypisania_wyposazenia
        FROM wyposazenie a
        LEFT JOIN mozliwe_rodzaje_wyposazenia b ON b.id = a.id_mozliwe_rodzaje_wyposazenia
        LEFT JOIN miejsca_pracy c ON c.id = a.id_miejsce_pracy
        ORDER BY b.nazwa_rodzaju
        ";
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute();
        echo json_encode($stmt->fetchAll());
    }

    static public function get_wyposazenie_stanowiska($id) {
        self::connect();
        $sql = "
        SELECT a.oznaczenie, b.id, b.model, b.oznaczenie as oznaczenia, b.rok_zakupu, b.wartosc, b.opis, c.nazwa_rodzaju
        FROM miejsca_pracy a
        LEFT JOIN wyposazenie b ON b.id_miejsce_pracy = a.id
        LEFT JOIN mozliwe_rodzaje_wyposazenia c ON c.id = b.id_mozliwe_rodzaje_wyposazenia
        WHERE a.id = :id
        ";
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute(array(':id' => $id));
        echo json_encode($stmt->fetchAll());
    }

    static public function pokaz_wolne_wyposazenie() {
        self::connect();
        $sql = "
        SELECT id, oznaczenie
        FROM wyposazenie
        WHERE id_miejsce_pracy = 0
        ";
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute();
        echo json_encode($stmt->fetchAll());
   }

   static public function wstaw_wolne_wyposazenie() {
        self::connect();
        $json = file_get_contents('php://input');
        $obj = json_decode($json, true);
        $id_wyposazenia = $obj['idWyposazenia'];
        $id_miejsce_pracy = $obj['idMiejscePracy'];
        $sql = "
        UPDATE wyposazenie
        SET id_miejsce_pracy = '$id_miejsce_pracy'
        WHERE id = '$id_wyposazenia'  
        ";
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute();
   }

   static public function usun_wyposazenie_ze_stanowiska() {
        self::connect();
        $json = file_get_contents('php://input');
        $obj = json_decode($json, true);
        $id_wyposazenia = $obj['idWyposazenia'];
        $sql = "
        UPDATE wyposazenie
        SET id_miejsce_pracy = 0
        WHERE id = '$id_wyposazenia'
        ";
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute();
   }

   static public function pokaz_osoby() {
        self::connect();
        $sql = "
        SELECT * 
        FROM osoba";
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute();
        echo json_encode($stmt->fetchAll());
    }

    static public function dodaj_termin_rezerwacji() {
        self::connect();
        $json = file_get_contents('php://input');
        $obj = json_decode($json, true);
        $id_miejsce_pracy = $obj['idMiejscePracy'];
        $id_osoba = $obj['idOsoba'];
        $data_startu_rezerwacji = $obj['dataStartuRezerwacji'];
        $data_konca_rezerwacji = $obj['dataKoncaRezerwacji'];
        $existDate = "
        SELECT * 
        FROM rezerwacja 
        WHERE (id_miejsce_pracy = '$id_miejsce_pracy' AND data_startu_rezerwacji <= '$data_startu_rezerwacji' AND data_konca_rezerwacji >= '$data_konca_rezerwacji')
        OR (id_miejsce_pracy = '$id_miejsce_pracy' AND data_startu_rezerwacji <= '$data_startu_rezerwacji' AND data_konca_rezerwacji >= '$data_startu_rezerwacji' AND data_konca_rezerwacji <= '$data_konca_rezerwacji')
        OR (id_miejsce_pracy = '$id_miejsce_pracy' AND data_startu_rezerwacji >= '$data_startu_rezerwacji' AND data_konca_rezerwacji >= '$data_konca_rezerwacji')
        OR (id_miejsce_pracy = '$id_miejsce_pracy' AND data_startu_rezerwacji >= '$data_startu_rezerwacji' AND data_konca_rezerwacji <= '$data_konca_rezerwacji')
        ";
        if ($res = self::$pdo->query($existDate)) {
            if ($res->fetchColumn() > 0) {
            } else {
                if ($id_miejsce_pracy != 0) {
                    $sql = "
                    INSERT INTO rezerwacja(id, id_miejsce_pracy, id_osoba, data_startu_rezerwacji, data_konca_rezerwacji)
                    VALUES ('','$id_miejsce_pracy', '$id_osoba', '$data_startu_rezerwacji', '$data_konca_rezerwacji')
                    ";
                }
            }
        }
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute();
   }

   static public function pokaz_zarezerwowane_terminy($id) {
        self::connect();
        $sql = "    
        SELECT a.data_startu_rezerwacji, a.data_konca_rezerwacji, b.imie, b.nazwisko, b.telefon, b.email, b.opis, c.oznaczenie
        FROM rezerwacja a
        LEFT JOIN osoba b ON b.id = a.id_osoba
        LEFT JOIN miejsca_pracy c ON c.id = a.id_miejsce_pracy
        WHERE c.id = :id
        ";
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute(array(':id' => $id));
        echo json_encode($stmt->fetchAll());
    }
}
<?php 
header("Access-Control-Allow-Origin: *");

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

    static public function get_wyposazenie_stanowiska($id) {
        self::connect();
        $sql = "
        SELECT a.oznaczenie, b.model, b.oznaczenie as oznaczenia, b.rok_zakupu, b.wartosc, b.opis, c.nazwa_rodzaju
        FROM miejsca_pracy a
        LEFT JOIN wyposazenie b ON b.id_miejsce_pracy = a.id
        LEFT JOIN mozliwe_rodzaje_wyposazenia c ON c.id = b.id_mozliwe_rodzaje_wyposazenia
        WHERE a.id = :id
        ";
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute(array(':id' => $id));
        echo json_encode($stmt->fetchAll());
    }

}
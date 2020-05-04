Aplikacja została stworzona za pomocą React (biblioteki JavaScript). Dzięki temu od momentu uruchomienia aplikacji nie jest ona w żadnym momencie przeładowana.

Opis uruchomienia aplikacji:

Do uruchomienia aplikacji potrzebne będą takie narzędzia jak (git, nodejs, npm, xampp). Poniżej umiesczam linki do pobrania poszczególnych komponentów.
1. https://git-scm.com/
2. Node.js https://nodejs.org/en/ - npm powinien zostać zainstalowany razem z node.
3. Xampp - https://www.apachefriends.org/pl/index.html

Przygotowanie aplikacji do uruchomienia:

1. Po zainstalowaniu wszystkich potrzebnych narzędzi należy sklonować repozytorium. Można to zrobić np. za pomocą polecenia "git clone <link do repozytorium, który znajduje się pod przyciskiem - Clone or download>" można to zrobić w wierszu poleceń, PowerShell'u (Windows), terminalu (Linux).

2. W katalogu repozytorium o nazwie "react-app" znajduje się katalog o nazwie "API", który przenieść trzeba do folderu np. C:\xampp\htdocs\API.

3. Następnie należy uruchomić program Xampp Controll Panel a w nim włączyć funkcje "Appache oraz MySQL".

4. Po uruchomieniu Xampp'a i potrzebnych funkcji należy przejść pod adres "localhost/phpmyadmin". W panelu daministracyjnym należy utworzyć nową bazę danych o nazwie "app" oraz zaimportować bazę znajdującą się w folderze "API" pod nazwą app.sql.

5. W wierszu poleceń przechodzimy do katalogu o nazwie "react-app", który znajduje się w sklonowanym repozytorium i wywołujemy polecenie "npm start", które otworzy okno przeglądarki z adresem "localhost:3000". 

Jeżeli wszystkie kroki zostały wykonane poprawnie to w tym momencie powinniśmy mieć uruchomioną aplikację gotową do działnia.
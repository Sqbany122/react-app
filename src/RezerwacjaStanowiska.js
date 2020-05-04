import React from 'react';

const apiWyposazenie = 'http://localhost/api/modal.php?id=';
const apiOsoba = 'http://localhost/api/pokaz_osoby.php';
const apiDodajTerminRezerwacji = 'http://localhost/api/dodaj_termin_rezerwacji.php';
const apiPokazZarezerwowaneTerminy = 'http://localhost/api/pokaz_zarezerwowane_terminy.php?id=';

class RezerwacjaStanowiska extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
           miejscePracy: [],
           zarezerwowaneTerminy: [],
           idOsoba: '',
           dataStartuRezerwacji: '',
           dataKoncaRezerwacji: '',
           idMiejscePracy: '',
           osoba: [],
      };
      this.handleChange = this.handleChange.bind(this);
      this.dodajTerminRezerwacji = this.dodajTerminRezerwacji.bind(this);
    }

    componentDidMount() {
        fetch(apiWyposazenie + this.props.id)
        .then(data => data.json())
        .then(json => {
            this.setState({
                 miejscePracy: json,
            })
        })

        fetch(apiOsoba)
        .then(data => data.json())
        .then(json => {
          this.setState({
            osoba: json,
          })
        })

        this.pokazZarezerwowaneTerminy();
    }

    pokazZarezerwowaneTerminy() {
        fetch(apiPokazZarezerwowaneTerminy + this.props.id)
        .then(data => data.json())
        .then(json => {
          this.setState({
              zarezerwowaneTerminy: json,
          })
        }) 
    }

    handleChange(e) {
        if (e.target.name == "osoba") {
            this.setState({ 
                idOsoba: e.target.value,
                idMiejscePracy: this.props.id,
            });
        } else if (e.target.name == "startRezerwacji") {
            this.setState({ 
                dataStartuRezerwacji: e.target.value,
            });
        } else if (e.target.name == "koniecRezerwacji") {
            this.setState({
                dataKoncaRezerwacji: e.target.value,    
            })  
        }
    }

    dodajTerminRezerwacji() {
        const { idOsoba, dataStartuRezerwacji, dataKoncaRezerwacji, idMiejscePracy } = this.state;
        
        fetch (apiDodajTerminRezerwacji, {
            method: "POST",
            headers: {
                "Accept": 'application/json', 
                "Content-type": "application/json" 
            },
            body:JSON.stringify({
                idOsoba: idOsoba,
                idMiejscePracy: idMiejscePracy,
                dataStartuRezerwacji: dataStartuRezerwacji,
                dataKoncaRezerwacji: dataKoncaRezerwacji
            })
        })
        .then((response) => response.text())
        .catch((error) => {
            console.error(error);
        })
        this.setTimeoutWolne = setTimeout(() => this.pokazZarezerwowaneTerminy(), 100);
    }

    render() {

    let { osoba, miejscePracy, zarezerwowaneTerminy } = this.state;
      return (
        <div className="container mb-5 mt-5">
        <h1 className="mb-5 text-center">Rezerwacja - Stanowisko nr {this.props.id}</h1>
            <form className="mt-5 row justify-content-center">
            <div className="form-group mb-5 col-lg-6 text-center">
                    <h3 className="mb-3">Zarezerwuj stanowisko</h3>
                    <select name="osoba" id="osoba" onChange={this.handleChange} className="form-control mb-3">
                        <option value="" selected disabled hidden>Wybierz osobę rezerwującą stanowisko...</option>
                        {osoba.map((item, key) => (
                            <option value={item.id}>{item.imie} {item.nazwisko}</option>
                        ))}
                    </select>
                    <label for="rezerwacjaStanowiskaStart">Wybierz datę i godzinę startu rezerwacji</label>
                    <input name="startRezerwacji" id="rezerwacjaStanowiskaStart" onChange={this.handleChange} className="form-control mb-2 text-center" type="datetime-local"></input>
                    <label for="rezerwacjaStanowiskaKoniec">Wybierz datę i godzinę końca rezerwacji</label>
                    <input name="koniecRezerwacji" id="rezerwacjaStanowiskaKoniec" onChange={this.handleChange} className="form-control mb-2 text-center" type="datetime-local"></input>
                    <button type="button" onClick={this.dodajTerminRezerwacji} className="btn btn-primary mt-3 w-100" id="wstawWyposazenie">Rezerwuj</button>
                </div>
                </form>
                <h2 className="mb-5 text-center">Zarezerwowane terminy</h2>
                <table className="table table-bordered mb-5">
                    <thead>
                    <tr className="text-center">
                        <td colspan="2">Data rezerwacji (od/do)</td>
                        <td>Imie</td>
                        <td>Nazwisko</td>
                        <td>Telefon</td>
                        <td>Email</td>
                        <td>Opis</td>
                        <td>Stanowisko</td>
                    </tr>
                    </thead>
                    <tbody>
                        {zarezerwowaneTerminy.map((item, key) => (
                            <tr className="text-center">
                                <td>{item.data_startu_rezerwacji}</td>
                                <td>{item.data_konca_rezerwacji}</td>
                                <td>{item.imie}</td>
                                <td>{item.nazwisko}</td>
                                <td>{item.telefon}</td>
                                <td>{item.email}</td>
                                <td>{item.opis}</td>
                                <td>{item.oznaczenie}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
                <h3 className="mb-5 text-center">Wyposażenie rezerwowanego stanowiska</h3>
                    <table className="table table-bordered mt-5 mb-5">
                        <thead>
                            <tr className="text-center">
                                <td>Rodzaj</td>
                                <td>Model</td>
                                <td>Oznaczenie</td>
                                <td>Rok zakupu</td>
                                <td>Wartość</td>
                                <td>Opis</td>
                            </tr>
                        </thead>
                        <tbody>
                           {miejscePracy.map((item, key) => (
                               <tr className="text-center">
                                   <td key={item.nazwa_rodzaju}>{item.nazwa_rodzaju}</td>
                                   <td key={item.model}>{item.model}</td>
                                   <td key={item.oznaczenia}>{item.oznaczenia}</td>
                                   <td key={item.rok_zakupu}>{item.rok_zakupu}</td>
                                   <td key={item.wartosc}>{item.wartosc}</td>
                                   <td key={item.opis}>{item.opis}</td>
                               </tr>
                           ))}
                        </tbody>
                    </table>
            <button className="btn btn-primary pl-5 pr-5 pt-2 pb-2 mt-5" onClick={this.props.backToMenuCallback}>Wróć</button>
        </div>
      );
    }
  }

  export default RezerwacjaStanowiska; 
import React from 'react';

const apiWyposazenie = 'http://localhost/api/modal.php?id=';
const apiWolneWyposazenie = 'http://localhost/api/wolne_wyposazenie.php'
const apiWstawWolneWyposazenie = 'http://localhost/api/wstaw_wolne_wyposazenie.php';
const apiUsunWyposazenieZeStanowiska = 'http://localhost/api/usun_wyposazenie_ze_stanowiska.php';

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
           miejscePracy: [],
           wolneWyposazenie: [],
           idWyposazenia: '',
           idWyposazeniaa: '',
           idMiejscePracy: '',
           value: '',
      };
      this.dodajNoweWyposazenie = this.dodajNoweWyposazenie.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.usunWyposazenieZeStanowiska = this.usunWyposazenieZeStanowiska.bind(this);
    }

    componentDidMount() {
        this.loadWyposazenie();
        this.loadWolneWyposazenie();
    }

    // POBIERANIE WYPOSAZENIA
    loadWyposazenie() {
        fetch(apiWyposazenie + this.props.id)
        .then(data => data.json())
        .then(json => {
            this.setState({
                 miejscePracy: json,
            })
        })
    }

    // POBIERANIE WOLNEGO WYPOSAZENIE
    loadWolneWyposazenie() {
        fetch(apiWolneWyposazenie)
        .then(dataWolneWyposazenie => dataWolneWyposazenie.json())
        .then(json => {
            this.setState({
                wolneWyposazenie: json,
            })
        })  
    }

    handleChange(e) {
        this.setState({ 
            idWyposazenia: e.target.value,
            idMiejscePracy: this.props.id,
        });
    }

    dodajNoweWyposazenie = () => {
        const { idWyposazenia, idMiejscePracy } = this.state;

        fetch (apiWstawWolneWyposazenie, {
            method: "POST",
            headers: {
                "Accept": 'application/json', 
                "Content-type": "application/json" 
            },
            body:JSON.stringify({
                idWyposazenia: idWyposazenia,
                idMiejscePracy: idMiejscePracy
            })
        })
        .then((response) => response.text())
        .catch((error) => {
            console.error(error);
        })
        this.setTimeout = setTimeout(() => this.loadWyposazenie(), 100);
        this.setTimeoutWolne = setTimeout(() => this.loadWolneWyposazenie(), 100);
    }

    usunWyposazenieZeStanowiska(e) {
        fetch (apiUsunWyposazenieZeStanowiska, {
            method: "POST",
            headers: {
                "Accept": 'application/json', 
                "Content-type": "application/json" 
            },
            body:JSON.stringify({
                idWyposazenia: e.target.id
            })
        })
        .then((response) => response.text())
        .catch((error) => {
            console.error(error);
        })
        this.setTimeout = setTimeout(() => this.loadWyposazenie(), 100);
        this.setTimeoutWolne = setTimeout(() => this.loadWolneWyposazenie(), 100);
    }

    render() {

    let { wolneWyposazenie, miejscePracy } = this.state;
    let content;
      return (
        <div className="container mb-5">
            <form className="mt-5">
                <h1 className="text-center mb-5">Modyfikacja - Stanowisko nr {this.props.id}</h1>
                <h3>Wyposażenie stanowiska</h3>
                    <table className="table table-bordered mt-5 mb-5">
                        <thead>
                            <tr className="text-center">
                                <td>Rodzaj</td>
                                <td>Model</td>
                                <td>Oznaczenie</td>
                                <td>Rok zakupu</td>
                                <td>Wartość</td>
                                <td>Opis</td>
                                <td>Usuń</td>
                            </tr>
                        </thead>
                        <tbody>
                           {miejscePracy.map((item, key) => (
                               <tr key={item.id} className="text-center">
                                   <td key={item.nazwa_rodzaju}>{item.nazwa_rodzaju}</td>
                                   <td key={item.model}>{item.model}</td>
                                   <td key={item.oznaczenia}>{item.oznaczenia}</td>
                                   <td key={item.rok_zakupu}>{item.rok_zakupu}</td>
                                   <td key={item.wartosc}>{item.wartosc}</td>
                                   <td key={item.opis}>{item.opis}</td>
                                   <td><button id={item.id} type="button" className="btn btn-primary" onClick={this.usunWyposazenieZeStanowiska}>Usuń</button></td>
                               </tr>
                           ))}
                        </tbody>
                    </table>
                <div className="form-group">
                    <h3 className="mb-5">Dodaj sprzęt do stanowiska</h3>
                    <select onChange={this.handleChange} id="wolneWyposazenie" className="form-control mb-3">
                    <option value="" selected disabled hidden>Wybierz wyposażenie z listy...</option>
                        {wolneWyposazenie.map((item, key) => (
                            <option value={item.id}>{item.oznaczenie}</option>
                        ))}
                    </select>
                    <button type="button" onClick={this.dodajNoweWyposazenie} className="btn btn-primary" id="wstawWyposazenie">Wstaw wyposażenie</button>
                </div>
            </form>
            <button className="btn btn-primary pl-5 pr-5 pt-2 pb-2 mt-5" onClick={this.props.backToMenuCallback}>Wróć</button>
        </div>
      );
    }
  }

  export default Modal; 
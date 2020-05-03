import React from 'react';

const apiWyposazenie = 'http://localhost/api/modal.php?id=';
const apiWolneWyposazenie = 'http://localhost/api/wolne_wyposazenie.php'
const apiWstawWolneWyposazenie = 'http://localhost/api/wstaw_wolne_wyposazenie.php';

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
           miejscePracy: [],
           wolneWyposazenie: [],
           value: '',
      };
      this.myChangeHandler = this.myChangeHandler.bind(this);
    }

    componentDidMount() {
        fetch(apiWyposazenie + this.props.id)
        .then(data => data.json())
        .then(json => {
            this.setState({
                 miejscePracy: json,
            })
        })

        fetch(apiWolneWyposazenie)
        .then(dataWolneWyposazenie => dataWolneWyposazenie.json())
        .then(json => {
            this.setState({
                wolneWyposazenie: json,
            })
        })    
    }

    myChangeHandler() {
        alert(this.refs.nazwaWyposazenia.value);
    }

    render() {
        
        let { wolneWyposazenie, miejscePracy } = this.state;
        let deleteBtn;
        if (miejscePracy.length){
            deleteBtn = <React.Fragment>
                <button id={this.props.id} className="btn btn-primary">Usuń</button>
            </React.Fragment>;
        } else {
            
        }
        

      return (
        <div className="container mb-5">
            <form className="mt-5">
                <h1 className="mb-5">Stanowisko nr {this.props.id}</h1>
                <h3>Wyposażenie</h3>
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
                               <tr className="text-center">
                                   <td key={item.id}>{item.nazwa_rodzaju}</td>
                                   <td key={item.id}>{item.model}</td>
                                   <td key={item.id}>{item.oznaczenia}</td>
                                   <td key={item.id}>{item.rok_zakupu}</td>
                                   <td key={item.id}>{item.wartosc}</td>
                                   <td key={item.id}>{item.opis}</td>
                                   <td>{deleteBtn}</td>
                               </tr>
                           ))}
                        </tbody>
                    </table>
                <div className="form-group">
                    <h3 className="mb-3">Dodaj sprzęt</h3>
                    <label className="mt-3" for="wolneWyposazenie">Wybierz wyposażenie które chcesz dodać do stanowiska:</label>        
                    <select ref="nazwaWyposazenia" id="wolneWyposazenie" className="form-control mb-3">
                        {wolneWyposazenie.map((item, key) => (
                            <option value={item.id}>{item.oznaczenie}</option>
                        ))}
                    </select>
                    <button type="button" onClick={this.myChangeHandler} className="btn btn-primary" id="wstawWyposazenie">Wstaw wyposażenie</button>
                </div>
            </form>
            <button className="btn btn-primary pl-5 pr-5 pt-2 pb-2 mt-5" onClick={this.props.backToMenuCallback}>Wróć</button>
        </div>
      );
    }
  }

  export default Modal; 
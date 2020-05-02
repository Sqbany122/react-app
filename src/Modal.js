import React from 'react';

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
           miejscePracy: [],
      };
      this.Stanowisko = this.Stanowisko.bind(this);
    }
    
    componentDidMount() {
        fetch('http://localhost/api/modal.php?id=' + this.props.id)
        .then(data => data.json())
        .then(json => {
            this.setState({
                 miejscePracy: json,
            })
            console.log(json);
        })    
    }

    Stanowisko(index) {
        return <React.Fragment>
            <tr>
                <td>{index[6]}</td>
                <td>{index[1]}</td>
                <td>{index[2]}</td>
                <td>{index[3]}</td>
                <td>{index[4]}</td>
                <td>{index[5]}</td>
                <td>X</td>
            </tr>
        </React.Fragment>;
    }

    render() {
        
        let miejscePracy = this.state.miejscePracy.map(
            index => {
                return this.Stanowisko(index)
            });
        let oznaczenie = "";

        if (miejscePracy.length) {
            oznaczenie = miejscePracy[0].oznaczenie
        }
        console.log(miejscePracy);
      return (
        <form className="mt-5">
            <h1 className="mb-5">Stanowisko nr {this.props.id}</h1>
            <h3>Wyposażenie</h3>
                <table className="table mt-5 mb-5">
                    <thead>
                        <tr>
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
                        {miejscePracy}
                    </tbody>
                </table>
            <div className="form-group">
                <h3 className="mb-3">Dodaj sprzęt</h3>
                <label for="mozliwyRodzajWyposazenia">Nazwa wyposażenia (rodzaj)</label>
                    <input type="text" className="form-control mb-2" id="mozliwyRodzajWyposazenia" placeholder="wpisz nazwę wyposażenia" />
                <label for="modelWyposazenia">Model wyposażenia</label>
                    <input type="text" className="form-control mb-2" id="modelWyposazenia" placeholder="wpisz model wyposażenia" />
                <label for="oznaczenieWyposazenia">Oznaczenie wyposażenia</label>    
                    <input type="text" className="form-control mb-2" id="oznaczenieWyposazenia" placeholder="wpisz oznaczenie wyposażenia" />
                <label for="rokZakupuWyposazenia">Rok zakupu wyposażenia</label>    
                    <input type="text" className="form-control mb-2" id="rokZakupuWyposazenia" placeholder="wpisz rok zakupu wyposażenia" />
                <label for="wartoscWyposazenia">Wartość wyposażenia</label>    
                    <input type="text" className="form-control mb-2" id="wartoscWyposazenia" placeholder="wpisz wartość wyposażenia" />
                <label for="opisWyposazenia">Opis wyposażenia</label>
                    <input type="text" className="form-control mb-2" id="opisWyposazenia" placeholder="wpisz opis wyposażenia" />
            </div>
        </form>
      );
    }
  }

  export default Modal; 
import React from 'react';

const api = 'http://localhost/api/wyposazenie.php'

class Wyposazenie extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        wyposazenie: [],
      }
    }
  
    componentDidMount() {
      fetch(api)
      .then(data => data.json())
      .then(json => {
          this.setState({
            wyposazenie: json,
          })
      })   
    }

    render() {
      let { wyposazenie } = this.state;

      return (
        <div className="container pt-5">
          <h1 className="mb-5">Dostępne wyposażenie</h1>
            <table className="table table-bordered">
              <thead>
                <tr className="text-center">
                  <td>Rodzaj</td>
                  <td>Model</td>
                  <td>Oznaczenie</td>
                  <td>Rok zakupu</td>
                  <td>Wartość</td>
                  <td>Opis</td>
                  <td>Przypisanie</td>
                </tr>
              </thead>
              <tbody>
                {wyposazenie.map((item, key) => (
                  <tr className="text-center">
                    <td key={item.id}>{item.nazwa_rodzaju}</td>
                    <td key={item.id}>{item.model}</td>
                    <td key={item.id}>{item.oznaczenie}</td>
                    <td key={item.id}>{item.rok_zakupu}</td>
                    <td key={item.id}>{item.wartosc}</td>
                    <td key={item.id}>{item.opis}</td>
                    <td>{item.sprawdzenie_przypisania_wyposazenia}</td>
                  </tr>
                ))}
              </tbody>  
            </table> 
            <button className="btn btn-primary pl-5 pr-5 pt-2 pb-2 mt-5" onClick={this.props.backToMenuCallback}>Wróć</button>
        </div>
      );
    }
  }

  export default Wyposazenie; 
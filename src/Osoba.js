import React from 'react';

const api = 'http://localhost/api/pokaz_osoby.php';

class Osoba extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        osoba: [],
      }
    }

    componentDidMount() {
      fetch(api)
      .then(data => data.json())
      .then(json => {
          this.setState({
            osoba: json,
          })
      }) 
    }
  
    render() {
      let { osoba } = this.state; 
      return (
        <div className="container pt-5">
            <h1 className="mb-5 text-center">Użytkownicy w systemie</h1>
            <table className="table table-bordered">
              <thead>
                <tr className="text-center">
                  <td>Id</td>
                  <td>Imie</td>
                  <td>Nazwisko</td>
                  <td>Telefon</td>
                  <td>Email</td>
                  <td>Opis</td>
                </tr>
              </thead>
              <tbody>
                {osoba.map((item, key) => (
                  <tr className="text-center">
                    <td>{item.id}</td>
                    <td>{item.imie}</td>
                    <td>{item.nazwisko}</td>
                    <td>{item.telefon}</td>
                    <td>{item.email}</td>
                    <td>{item.opis}</td>
                  </tr>
                ))}
              </tbody>  
            </table>
            <button className="btn btn-primary pl-5 pr-5 pt-2 pb-2 mt-5" onClick={this.props.backToMenuCallback}>Wróć</button>
        </div>
      );
    }
  }

  export default Osoba; 
import React from 'react';

class Rezerwacja extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          miejscaPracy: [],

      }
      this.Stanowisko = this.Stanowisko.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost/api/miejsca_pracy.php')
        .then(data => data.json())
        .then(json => {
            this.setState({
                 miejscaPracy: json,
            })
            console.log(this.state.miejscaPracy);
        })
        
    }
    
    Stanowisko(index) {
        return <React.Fragment>
            <tr><td>{index[0]}</td><td>{index[1]}</td><td>{index[2]}</td><td><button className="btn btn-primary">Rezerwacja</button></td></tr>
        </React.Fragment>;
    }

    render() {
        
      let miejscaPracy = this.state.miejscaPracy.map(
          index => {
              return this.Stanowisko(index)
          });

      return (
        <div className="container">
            <div className="mt-5">
                <table className="table">
                    <thead>
                        <tr>
                        <td>Id</td>
                        <td>Oznaczenie</td>
                        <td>Opis</td>
                        <td>Rezerwacja</td>
                        </tr>
                    </thead>
                    <tbody>
                        {miejscaPracy} 
                    </tbody>
                </table>    
            </div>
            <button className="btn btn-primary" onClick={this.props.backToMenuCallback}>Wróć</button>
        </div>
      );
    }
  }

  export default Rezerwacja; 
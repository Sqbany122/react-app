import React from 'react';

const api = 'http://localhost/api/miejsca_pracy.php';

class Rezerwacja extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          miejscaPracy: [],

      }
      this.Stanowisko = this.Stanowisko.bind(this);
    }

    componentDidMount() {
        fetch(api)
        .then(data => data.json())
        .then(json => {
            this.setState({
                 miejscaPracy: json,
            })
        })
        
    }
    
    Stanowisko(index) {
        return <React.Fragment>
            <tr className="text-center"><td>{index[0]}</td><td>{index[1]}</td><td>{index[2]}</td><td><button className="btn btn-primary">Rezerwuj</button></td></tr>
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
            <h1 className="text-center mb-5">Rezerwacja</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-center">
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
            <button className="btn btn-primary pl-5 pr-5 pt-2 pb-2 mt-5" onClick={this.props.backToMenuCallback}>Wróć</button>
        </div>
      );
    }
  }

  export default Rezerwacja; 
import React from 'react';
import Modal from './Modal.js';

const api = 'http://localhost/api/miejsca_pracy.php';

class Stanowiska extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        miejscaPracy: [],
        modal: false,
        id: null,
    }
    this.Stanowisko = this.Stanowisko.bind(this);
    this.showModal = this.showModal.bind(this);
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
          <tr className="text-center"><td>{index[0]}</td><td>{index[1]}</td><td>{index[2]}</td><td><button id={index[0]} onClick={this.showModal} className="btn btn-primary">Edytuj</button></td></tr>
      </React.Fragment>;
  }

  showModal(event) {
    this.setState({
      modal: true,
      id: event.target.id,
    });
  }

  backToMenu() {
    this.setState({
      modal: false,
    })
  }

  render() {
    let content;
    let modal = this.state.modal;
    let id = this.state.id;
    let miejscaPracy = this.state.miejscaPracy.map(
        index => {
            return this.Stanowisko(index)
        }); 
    if (modal) {
      content = <Modal id={id} backToMenuCallback={ () => this.backToMenu()}/>;
    }  else {
      content = <React.Fragment>
        <div className="pt-5">
        <h1 className="text-center mb-5">Stanowiska</h1>
              <table className="table table-bordered">
                  <thead>
                      <tr className="text-center">
                      <td>Id</td>
                      <td>Oznaczenie</td>
                      <td>Opis</td>
                      <td>Edycja</td>
                      </tr>
                  </thead>
                  <tbody>
                      {miejscaPracy} 
                  </tbody>
              </table>    
          </div>
          <button className="btn btn-primary pl-5 pr-5 pt-2 pb-2 mt-5" onClick={this.props.backToMenuCallback}>Wróć</button>
      </React.Fragment>
    }
    return (
      <div className="container">
          {content}
      </div>
    );
  }
}

  export default Stanowiska; 
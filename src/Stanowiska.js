import React from 'react';
import Modal from './Modal.js';

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
      fetch('http://localhost/api/miejsca_pracy.php')
      .then(data => data.json())
      .then(json => {
          this.setState({
               miejscaPracy: json,
          })
      })
      
    }
  
  Stanowisko(index) {
      return <React.Fragment>
          <tr><td>{index[0]}</td><td>{index[1]}</td><td>{index[2]}</td><td><button id={index[0]} onClick={this.showModal} className="btn btn-primary">Edytuj</button></td></tr>
      </React.Fragment>;
  }

  showModal(event) {
    this.setState({
      modal: true,
      id: event.target.id,
    });
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
      content = <Modal id={id}/>;
    }  else {
      content = <React.Fragment>
        <div className="mt-5">
              <table className="table">
                  <thead>
                      <tr>
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
          <button className="btn btn-primary" onClick={this.props.backToMenuCallback}>Wróć</button>
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
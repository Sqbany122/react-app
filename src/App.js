import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rezerwacja from './Rezerwacja.js';
import Stanowiska from './Stanowiska.js';
import Osoba from './Osoba.js';
import Wyposazenie from './Wyposazenie.js';
import {REZERWACJA, STANOWISKA, OSOBA, WYPOSAZENIE} from './options.js';
import styled  from 'styled-components';

const Title = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
`;

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      [REZERWACJA]:false,
      [STANOWISKA]:false,
      [OSOBA]:false,
      [WYPOSAZENIE]:false,
    }

    this.onClick = this.onClick.bind(this);
    this.backToMenu = this.backToMenu.bind(this);
  } 

  onClick(event) {
    this.setState({
      [event.target.id]: true,
    })
  }

  backToMenu(option) {
      this.setState({
        [option]:false,
      })
  }

  render () {
    let content;
    const rezerwacja = this.state[REZERWACJA];
    const stanowiska = this.state[STANOWISKA];
    const osoba = this.state[OSOBA];
    const wyposazenie = this.state[WYPOSAZENIE];

    if (rezerwacja) {
      content = <Rezerwacja backToMenuCallback={ () => this.backToMenu(REZERWACJA)}/>;
    } else if (stanowiska) {
      content = <Stanowiska backToMenuCallback={ () => this.backToMenu(STANOWISKA)}/>;
    } else if (osoba) {
      content = <Osoba backToMenuCallback={ () => this.backToMenu(OSOBA)}/>;
    } else if (wyposazenie) {
      content = <Wyposazenie backToMenuCallback={ () => this.backToMenu(WYPOSAZENIE)}/>;
    } else {
      content = <div className="d-flex flex-column">
      <Title id="rezerwacja" className="btn btn-primary w-100 mt-4" onClick={this.onClick}>Rezerwacja</Title>
      <Title id="stanowiska" className="btn btn-primary w-100 mt-4" onClick={this.onClick}>Stanowiska</Title>
      <Title id="osoba" className="btn btn-primary w-100 mt-4" onClick={this.onClick}>Osoba</Title>
      <Title id="wyposazenie" className="btn btn-primary w-100 mt-4" onClick={this.onClick}>Wyposażenie</Title>
    </div>;
    }

    return (
      <div className="container">
        {content}
      </div>
    ); 
  }
}

export default App;

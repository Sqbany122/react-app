import React from 'react';

class Osoba extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="container">
            Osoba
            <button className="btn btn-primary" onClick={this.props.backToMenuCallback}>jhb</button>
        </div>
      );
    }
  }

  export default Osoba; 
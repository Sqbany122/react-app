import React from 'react';

class Wyposazenie extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="container">
            Wyposazenie
            <button className="btn btn-primary" onClick={this.props.backToMenuCallback}>Wyposazenie</button>
        </div>
      );
    }
  }

  export default Wyposazenie; 
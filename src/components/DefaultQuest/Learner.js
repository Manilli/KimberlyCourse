import React, { Component } from 'react';

class Learner extends Component {
  render() {
    return (
      <div style={content} >
        <p style={puntaje}>{this.props.name}</p>
        {/* <p style={checked}>{this.lmsCheck()}</p> */}
      </div>
    );
  };
};

const content= {
  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
}

const puntaje = {
  color: '#100685',
  position: 'relative',
  top: 4,
  left: 60,
  fontSize: 24,
  fontWeight: 'bold',
  fontFamily: 'Gotham',
}

export default Learner;

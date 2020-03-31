import React, { Component } from 'react';
// import logo from './logo.svg';

class App extends Component{
  render() {
    const dom = <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {
      console.log("Clicked.");
    }} />
    </React.Fragment>
    
    ;
    return dom;
  }
};

export default App;

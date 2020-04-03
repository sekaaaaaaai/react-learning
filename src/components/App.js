import React, { Component } from 'react';
// import logo from './logo.svg';

// class App extends Component{
//   render() {
//     return <Counter/>;
//   }
// };

const App = () => (<Counter />)

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    console.log("render");
    return(
      <React.Fragment>
        <div>
          count: {this.state.count}
        </div>
        <button onClick={this.handleMinusButton}>-1</button>
        <button onClick={this.handlePlusButton}>+1</button>
      </React.Fragment>
    );
  }

  handlePlusButton = () => {
    console.log("PlusButton tapped!!");
    this.setState({
      count: this.state.count + 1
    });
  }

  handleMinusButton = () => {
    console.log("PlusButton tapped!!");
    this.setState({
      count: this.state.count - 1
    });
  }
};


export default App;

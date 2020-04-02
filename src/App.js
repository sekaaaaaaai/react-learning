import React, { Component } from 'react';
// import logo from './logo.svg';

class App extends Component{
  render() {
    const profiles = [
      {name: "Taro", age: 17},
      {name: "Hanako", age: 5},
      {name: "Rei"}
    ]

    const dom = <React.Fragment>
      <div>
        {
          profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index}/>
          })
        }
      </div>
    </React.Fragment>
    ;
    return dom;
  }
};

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name}!
      and {props.age} years old.
    </div>
  )
}

User.defaultProps = {
  age: 1
}

export default App;

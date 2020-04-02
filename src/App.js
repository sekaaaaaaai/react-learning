import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';

class App extends Component{
  render() {
    const profiles = [
      {name: "Taro", age: 17},
      {name: "Hanako", age: 5},
      {name: "Rio", age: null}
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
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;

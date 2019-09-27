/* eslint-disable no-console */
/* eslint-disable space-before-blocks */
/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// eslint-disable-next-line import/extensions
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/extensions
import TextFieldDemo from './pages/TextFieldDemo';

console.log(TextFieldDemo);

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render(){
    // eslint-disable-next-line keyword-spacing
    return(
      <>
        <TextFieldDemo />
      </>
    );
  }

// eslint-disable-next-line padded-blocks
}

export default App;

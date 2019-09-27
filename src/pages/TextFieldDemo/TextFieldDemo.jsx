/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// eslint-disable-next-line import/extensions
import TextField from "../../components/TextField";

// eslint-disable-next-line no-console

// eslint-disable-next-line react/prefer-stateless-function
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prefer-stateless-function
// eslint-disable-next-line no-unused-vars
class TextFieldDemo extends Component {
  constructor(props) {
    super(props);
  }

  styleUse = {
    border: "1px solid black"
  };
  styleuse = {
    color: "red"
  };
  render() {
    return (
      <>
        <div style={this.styleUse} class="container">
          <h1>This is a Disabled Input</h1>
          <TextField disable="true" value="Disabled Input" />
          <h1>A Valid Input</h1>
          <TextField value="Accessible" />
          <h1>An Input with errors</h1>
          <TextField value="101" />
          <h4 style={this.styleuse}>Could not be greater than 101</h4>
        </div>
      </>
    );
  }
}

export default TextFieldDemo;

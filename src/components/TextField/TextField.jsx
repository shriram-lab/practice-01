/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
// eslint-disable-next-line import/extensions
import Styles from './style.js';

// eslint-disable-next-line react/prefer-stateless-function
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prefer-stateless-function
// eslint-disable-next-line no-unused-vars
class TextField extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(<>
      <div>
        {this.props.value === '101' ? (<input style={Styles.errorStyle} type="text" value={this.props.value} disabled={this.props.disable} error={this.props.error} />) : (<input style={Styles.InputStyle} type="text" value={this.props.value} disabled={this.props.disable} error={this.props.error} />)}


      </div>
      </>)
  }
}

export default TextField;

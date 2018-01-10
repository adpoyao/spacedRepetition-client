import React, { Component } from 'react';
import './example.css';

const Example = props => {
  return(
    <div className="example-container">
      {props.example}
    </div>
  )
}

export default Example;
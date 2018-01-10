import React, { Component } from 'react';
import './multipleChoice.css';

const MultipleChoice = props => {

  return(
    <div className="multi-choice-container" onClick={props.onClick}>
      {props.choice}
    </div>
  )
}

export default MultipleChoice;
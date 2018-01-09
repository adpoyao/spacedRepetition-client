import React, { Component } from 'react';
import './multipleChoice.css';

const MultipleChoice = props => {

  return(
    <div className="multi-choice-container">
      {props.choice}
    </div>
  )
}

export default MultipleChoice;
import React, { Component } from 'react';
import { connect } from 'react-redux';

const Vocabulary = props => {
  return(
    <div>{props.vocab}</div>
  )
  
}

export default Vocabulary;
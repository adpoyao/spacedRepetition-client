import React, { Component } from 'react';
import { connect } from 'react-redux';

import './vocabulary.css';

const Vocabulary = props => {
  return(
    <div className='vocab-container'>
      <div className="vocab">{props.vocab}</div>
      {props.romaji}
      {props.hiragana}
      {props.katakana}  
      {props.example}
    </div>
  )
  
}

export default Vocabulary;
import React, { Component } from 'react';
import { connect } from 'react-redux';

import MultipleChoice from './multipleChoice';

import './answer.css';

class Answer extends Component {
  constructor(){
    super();
    this.dummyData = [
      'A. Cheers',
      'B. Yesterday',
      'C. Future',
      'D. Perfection'
    ]
  }

  render(){
    let choices = this.dummyData.map((item, index) => {
      return <MultipleChoice key={index} choice={item}/>
    });
    
    return(
      <div className="answer-container">
        {choices}
      </div>
    )
  }
}

export default connect()(Answer);
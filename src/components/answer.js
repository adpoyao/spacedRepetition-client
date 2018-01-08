import React, { Component } from 'react';
import { connect } from 'react-redux';

import MultipleChoice from './multipleChoice';

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
      <div>
        {choices}
      </div>
    )
  }
}

export default connect()(Answer);
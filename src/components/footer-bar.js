import React, { Component } from 'react';
import {connect} from 'react-redux';
import { nextQuestion } from '../actions/question';

class FooterBar extends Component {
  handleNextQuestion = () => {
    this.props.dispatch(nextQuestion());
  }

  render(){
    return(
      <button onClick={this.handleNextQuestion}>Next</button>
    )
  }
}

export default connect()(FooterBar);
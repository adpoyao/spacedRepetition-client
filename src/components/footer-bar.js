import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleExample, nextQuestion, saveProgress } from '../actions';

import './footer-bar.css';

class FooterBar extends Component {
  handleNextQuestion = () => {
    this.props.dispatch(nextQuestion());
    this.props.dispatch(toggleExample(false));
    //TODO: Implement Save Progress
    this.props.dispatch(saveProgress());
  }

  render(){
    return(
      <div className="footer-bar">
        <button onClick={this.handleNextQuestion}>Next</button>
      </div>
    )
  }
}

export default connect()(FooterBar);
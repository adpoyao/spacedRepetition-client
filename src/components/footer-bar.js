import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleExample, nextQuestion } from '../actions';

import './footer-bar.css';

class FooterBar extends Component {
  handleNextQuestion = () => {
    this.props.dispatch(nextQuestion(this.props.user, this.props.answeredCorrectly));
    this.props.dispatch(toggleExample(false));
  }

  render(){
  let nextButton;
  if(this.props.questionAnswered){
    nextButton =(
      <div className="next-button">
        <button className="next answered" onClick={this.handleNextQuestion}>Next</button>
      </div>
    )
  } else {
    nextButton =(
      <div className="next-button">
        <button className="next not-answered">Next</button>
      </div>
    )
  }


    return(
      <div className="footer-bar">
        {nextButton}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser.username,
  answeredCorrectly: state.question.answeredCorrectly,
  questionAnswered: state.question.questionAnswered
})

export default connect(mapStateToProps)(FooterBar);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './multipleChoice.css';

class MultipleChoice extends Component {
  render(){
  let selection;
  if(!this.props.questionAnswered){
    selection=(
      <div className="multi-choice-container" onClick={this.props.onClick}>
        {this.props.choice}
      </div>
    )
  } else {
    if(this.props.answeredCorrectly){
      if(this.props.choice === this.props.correctAnswer){
        selection = (
          <div className="multi-choice-container" style={{color: 'green'}}>
            {this.props.choice}
         </div>
        )
      } else {
        selection= (
          <div className="multi-choice-container">
            {this.props.choice}
         </div>
        )
      }
    }
    if(!this.props.answeredCorrectly){
      if(this.props.choice === this.props.correctAnswer){
        selection = (
          <div className="multi-choice-container" style={{color: 'green'}}>
            {this.props.choice}
         </div>
        )
      } else {
        selection= (
          <div className="multi-choice-container" style={{color: 'red'}}>
            {this.props.choice}
         </div>
        )
      }
    }
  }

    return(
      <div>
        {selection}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questionAnswered: state.question.questionAnswered,
  answeredCorrectly: state.question.answeredCorrectly,
  correctAnswer: state.question.question.correct
})

export default connect(mapStateToProps)(MultipleChoice);
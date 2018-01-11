import React, { Component } from 'react';
import { connect } from 'react-redux';
import './multipleChoice.css';

class MultipleChoice extends Component {
  render(){
  let selection;
  if(!this.props.questionAnswered){
    selection=(
      <button className="multi-choice-container" onClick={this.props.onClick}>
        {this.props.choice}
      </button>
    )
  } else {
    if(this.props.answeredCorrectly){
      if(this.props.choice === this.props.correctAnswer){
        selection = (
          <button className="multi-choice-container" disabled="true" style={{color: 'green'}}>
            {this.props.choice}
         </button>
        )
      } else {
        selection= (
          <button className="multi-choice-container" disabled="true">
            {this.props.choice}
         </button>
        )
      }
    }
    if(!this.props.answeredCorrectly){
      if(this.props.choice === this.props.correctAnswer){
        selection = (
          <button className="multi-choice-container" disabled="true" style={{color: 'green'}}>
            {this.props.choice}
         </button>
        )
      } else {
        selection= (
          <button className="multi-choice-container" disabled="true" style={{color: 'red'}}>
            {this.props.choice}
         </button>
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
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
          <button className="multi-choice-container correct" disabled="true">
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
          <button className="multi-choice-container correct" disabled="true">
            {this.props.choice}
         </button>
        )
      } 
      // else if (this.props.choice === this.props.selectedAnswer){
      //   console.log(this.props.selectedAnswer);
      //   selection= (
      //     <button className="multi-choice-container wrong-selected" disabled="true">
      //       {this.props.choice}
      //    </button>
      //   )
      // }
      else if (this.props.choice !== this.props.selectedAnswer){
        selection= (
          <button className="multi-choice-container wrong-selected" disabled="true">
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
  correctAnswer: state.question.question.correct,
  selectedAnswer: state.question.question.selectedAnswer
})

export default connect(mapStateToProps)(MultipleChoice);
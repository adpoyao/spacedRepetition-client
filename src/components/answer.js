import React, { Component } from 'react';
import { connect } from 'react-redux';

import MultipleChoice from './multipleChoice';
import { randomChooser } from '../wordBank/wordBank';
import { evaluateAnswer } from '../actions';

import './answer.css';

class Answer extends Component {

  handleOnClick = (item) => {
    let evaluate;
    item === this.props.correctAnswer ? evaluate = true : evaluate = false;
    this.props.dispatch(evaluateAnswer(true, evaluate));
  }

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  render(){
    let answerArray = [
      this.props.correctAnswer, 
      randomChooser(),
      randomChooser(),
      randomChooser()
    ];
    answerArray = this.shuffle(answerArray);

    let choices = answerArray.map((item, index) => {
      return <MultipleChoice key={index} choice={item} onClick={()=>this.handleOnClick(item)}/>
    });
    
    return(
      <div className="answer-container">
        {choices}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  correctAnswer: state.question.question.correct
})

export default connect(mapStateToProps)(Answer);
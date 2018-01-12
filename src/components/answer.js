import React, { Component } from 'react';
import { connect } from 'react-redux';

import MultipleChoice from './multipleChoice';
import { randomChooser } from '../wordBank/wordBank';
import { evaluateAnswer } from '../actions';

import './answer.css';

class Answer extends Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    if(!this.props.questionAnswered) { return false;
    } else {
    return true
    }
  }

  handleOnClick = (e, item) => {
    e.preventDefault();
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
      return <MultipleChoice key={index} choice={item} onClick={(e)=>this.handleOnClick(e, item)}/>
    });
    
    let link = `https://jisho.org/search/${this.props.vocab}`;
    let jisho;
    if(this.props.answeredCorrectly === false){
      jisho=(
        <div className="jishou"><a href={link} target="_blank" className="jishou-link"><h5 className="jishou-kanji">辞書</h5><p className="dictionary">dictionary</p></a></div>
      )
    }
    return(
      <div className="answer-container">
        <form className="answer-form">
        <fieldset>
          <legend>Select an answer:</legend>
            {choices}
        </fieldset>
        {jisho}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  correctAnswer: state.question.question.correct,
  vocab: state.question.question.vocab,
  answeredCorrectly: state.question.answeredCorrectly,
  questionAnswered: state.question.questionAnswered
})

export default connect(mapStateToProps)(Answer);
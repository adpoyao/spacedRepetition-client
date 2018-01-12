import React, { Component } from 'react';
import { connect } from 'react-redux';

import Vocabulary from './vocabulary';
import Example from './example';
import { toggleExample } from '../actions/question';

import './question.css';

class Question extends Component {

  handleToggleExample = () => {
    this.props.dispatch(toggleExample(!this.props.showExample))
  }

  render(){
    let example;
    if(!this.props.showExample){
      example = 
      <button onClick={this.handleToggleExample}>View example >></button>
    }
    else {
      example = (
      <div>
        <p className="example-sentence">Example Sentence:</p>
        <Example example={this.props.example} />
        <button onClick={this.handleToggleExample}>Hide example </button>
      </div>)
    }

    let romaji, hiragana, katakana, resource;
    if(this.props.showRomaji){
      romaji = <div>{this.props.romaji}</div>;
    }

    if(this.props.showHiragana){
      hiragana = <div>{this.props.hiragana}</div>;
    }

    if(this.props.showKatakana){
      katakana = <div>{this.props.katakana}</div>;
    }
    
    if (this.props.answeredCorrectly){
      let percentage = Math.floor(((this.props.totalRight+1) / (this.props.totalAnswered+1) *100));
      resource = (
      <div>
        <p className="right-answer"><h5 className="right-answer-japanese">正しい!</h5><p className="correct-caption">Correct</p><p className="accuracy">Word accuracy: <span className="percentage">{percentage}%</span></p>
        </p>
      </div>
      )}
    else if(this.props.answeredCorrectly === false){
      let percentage = Math.floor(((this.props.totalRight) / (this.props.totalAnswered+1) *100));
      resource = (
        <div className="resource">
          <h5 className="wrong-answer wrong-answer-japanese">違います</h5>
            <p className="incorrect-caption">Incorrect</p>
            <p className="accuracy">Word accuracy: <span className="percentage">{percentage}%</span></p>
        </div>
      )
    }
    
    return(
      <div className='container'>
        <Vocabulary 
          vocab={this.props.vocab} 
          romaji={romaji}
          hiragana={hiragana}
          katakana={katakana}
          example = {example}
          />
        {resource}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  vocab: state.question.question.vocab,
  example: state.question.question.example,
  romaji: state.question.question.romaji,
  hiragana: state.question.question.hiragana,
  katakana: state.question.question.katakana,
  showExample: state.question.showExample,
  showRomaji: state.setting.showRomaji,
  showHiragana: state.setting.showHiragana,
  showKatakana: state.setting.showKatakana,
  answeredCorrectly: state.question.answeredCorrectly,
  correctAnswer: state.question.question.correct,
  totalRight: state.question.question.right,
  totalAnswered: state.question.question.total
})

export default connect(mapStateToProps)(Question);
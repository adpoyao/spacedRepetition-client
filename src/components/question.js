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
        <p>Example Sentence:</p>
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
    
    let link = `https://jisho.org/search/${this.props.vocab}`

    if (this.props.answeredCorrectly){
      resource = (
      <div>
        <p className="right-answer">正しい!<p className="correct-caption">Correct</p>
</p>
      </div>
      )}
    else if(this.props.answeredCorrectly === false){
      resource = (
        <div className="resource">
          <a href={link} target="_blank" className="wrong-answer">違います
            <p className="incorrect-caption">Incorrect</p>
            <p className="link-to-jisho">Click here to view resources</p>
          </a>
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
  correctAnswer: state.question.question.correct
})

export default connect(mapStateToProps)(Question);
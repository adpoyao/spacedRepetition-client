import React, { Component } from 'react';
import { connect } from 'react-redux';

import Vocabulary from './vocabulary';
import Example from './example';
import { toggleExample } from '../actions/question';

import { retrieve } from '../linkedList/linkedList';

import './question.css';

class Question extends Component {

  handleToggleExample = () => {
    this.props.dispatch(toggleExample(!this.props.showExample))
  }

  render(){
    let vocab = retrieve(this.props.questions, 0);
    let example;
    if(!this.props.showExample){
      example = 
      <button onClick={this.handleToggleExample}>View example >></button>
    }
    else {
      example = (
      <div>
        <p>Example Sentence:</p>
        <Example example={vocab.example} />
        <button onClick={this.handleToggleExample}>Hide example </button>
      </div>)
    }

    let romaji, hiragana, katakana;
    if(this.props.showRomaji){
      romaji = <div>{vocab.romaji}</div>;
    }

    if(this.props.showHiragana){
      hiragana = <div>{vocab.hiragana}</div>;
    }

    if(this.props.showKatakana){
      katakana = <div>{vocab.katakana}</div>;
    }


    return(
      <div className='container'>
        <Vocabulary 
          vocab={vocab.vocab} 
          romaji={romaji}
          hiragana={hiragana}
          katakana={katakana}
          example = {example}
          />
        {/* {example} */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // Linked List:
  questions: state.questions.questions,

  // vocab: state.questions.vocab,
  // example: state.questions.example,
  showExample: state.questions.showExample,
  // romaji: state.questions.romaji,
  // hiragana: state.questions.hiragana,
  // katakana: state.questions.katakana,
  showRomaji: state.setting.showRomaji,
  showHiragana: state.setting.showHiragana,
  showKatakana: state.setting.showKatakana
})

export default connect(mapStateToProps)(Question);
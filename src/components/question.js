import React, { Component } from 'react';
import { connect } from 'react-redux';

import Vocabulary from './vocabulary';
import Example from './example';

import { toggleExample } from '../actions/question';

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

    let romaji, hiragana, katakana;
    if(this.props.showRomaji){
      romaji = <div>{this.props.romaji}</div>;
    }

    if(this.props.showHiragana){
      hiragana = <div>{this.props.hiragana}</div>;
    }

    if(this.props.showKatakana){
      katakana = <div>{this.props.katakana}</div>;
    }

    return(
      <div>
        <Vocabulary vocab={this.props.vocab}/>
        {romaji}
        {hiragana}
        {katakana}
        {example}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  vocab: state.questions.vocab,
  example: state.questions.example,
  showExample: state.questions.showExample,
  romaji: state.questions.romaji,
  hiragana: state.questions.hiragana,
  katakana: state.questions.katakana,
  showRomaji: state.setting.showRomaji,
  showHiragana: state.setting.showHiragana,
  showKatakana: state.setting.showKatakana
})

export default connect(mapStateToProps)(Question);
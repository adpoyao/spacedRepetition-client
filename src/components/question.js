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

    return(
      <div>
        <Vocabulary vocab={this.props.vocab}/>
        {example}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  vocab: state.questions.vocab,
  example: state.questions.example,
  showExample: state.questions.showExample
})

export default connect(mapStateToProps)(Question);
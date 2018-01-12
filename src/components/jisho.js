import React, { Component } from 'react';
import { connect } from 'react-redux';

class Jisho extends Component {
  
  render(){

    let link = `https://jisho.org/search/${this.props.vocab}`;
    let jisho;
    if(this.props.answeredCorrectly === false){
      jisho=(
        <div className="jishou"><a href={link} target="_blank" className="jishou-link"><h5 className="jishou-kanji">辞書</h5><p className="dictionary">dictionary</p></a></div>
      )
    }

    return(
      <div>{jisho}</div>
    )
  }
}

const mapStateToProps = state => ({
  answeredCorrectly: state.question.answeredCorrectly,
  vocab: state.question.question.vocab
})

export default connect(mapStateToProps)(Jisho)
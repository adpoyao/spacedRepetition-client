import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSetting, toggleRomaji, toggleHiragana, toggleKatakana } from '../actions';

import backgroundImage from '../assets/tokyo-streets-night-photography-3.jpg';
import './setting.css';

class Setting extends Component {
  
  toggleSetting = () => {
    this.props.dispatch(toggleSetting(!this.props.showSetting))
  }
  toggleRomaji = () => {
    this.props.dispatch(toggleRomaji(!this.props.showRomaji))
  }
  toggleHiragana = () => {
    this.props.dispatch(toggleHiragana(!this.props.showHiragana))
  }
  toggleKatakana = () => {
    this.props.dispatch(toggleKatakana(!this.props.showKatakana))
  }

  render(){

    let romajiButton, hiraganaButton, katakanaButton;
    if(this.props.showRomaji){
      romajiButton = <button onClick={this.toggleRomaji}>Display On</button>
    } else {
      romajiButton = <button onClick={this.toggleRomaji}>Display Off</button>
    }
    if(this.props.showHiragana){
      hiraganaButton = <button onClick={this.toggleHiragana}>Display On</button>
    } else {
      hiraganaButton = <button onClick={this.toggleHiragana}>Display Off</button>
    }
    if(this.props.showKatakana){
      katakanaButton = <button onClick={this.toggleKatakana}>Display On</button>
    } else {
      katakanaButton = <button onClick={this.toggleKatakana}>Display Off</button>
    }

    return(
      <div className="overlay" id="modal" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="content">
          <h3>Setting</h3>
          <div>
            <p>Romaji</p>
            {romajiButton}
          </div>
          <div>
            <p>Hiragana</p>
            {hiraganaButton}
          </div>
          <div>
            <p>Katakana</p>
            {katakanaButton}
          </div>
          <a onClick={this.toggleSetting}>Close</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showSetting: state.setting.showSetting,
  showRomaji: state.setting.showRomaji,
  showHiragana: state.setting.showHiragana,
  showKatakana: state.setting.showKatakana
})

export default connect(mapStateToProps)(Setting);
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
      romajiButton = <button onClick={this.toggleRomaji} className="setting-button button-on">Display On</button>
    } else {
      romajiButton = <button onClick={this.toggleRomaji} className="setting-button button-off">Display Off</button>
    }
    if(this.props.showHiragana){
      hiraganaButton = <button onClick={this.toggleHiragana} className="setting-button button-on">Display On</button>
    } else {
      hiraganaButton = <button onClick={this.toggleHiragana} className="setting-button button-off">Display Off</button>
    }
    if(this.props.showKatakana){
      katakanaButton = <button onClick={this.toggleKatakana} className="setting-button button-on">Display On</button>
    } else {
      katakanaButton = <button onClick={this.toggleKatakana} className="setting-button button-off">Display Off</button>
    }

    return(
      <div className="overlay" id="modal" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="content">
          <h3>Setting</h3>
          <div>
            <p className="setting-label">Romaji</p>
            {romajiButton}
          </div>
          <div>
            <p className="setting-label">Hiragana</p>
            {hiraganaButton}
          </div>
          <div>
            <p className="setting-label">Katakana</p>
            {katakanaButton}
          </div>
          <button onClick={this.toggleSetting} className="setting-close">Close</button>
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
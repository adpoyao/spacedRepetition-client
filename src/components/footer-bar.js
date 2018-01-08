import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class FooterBar extends Component {
  render(){
    return(
      <button onClick={()=>console.log('Pressed Next')}>Next</button>
    )
  }
}

export default FooterBar;
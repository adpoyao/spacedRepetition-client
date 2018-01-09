import React from 'react';
import './landing-highlights.css';

const LandingHighlights = props => {
  
  return(
    <div>
      <div className="highlight-icon">{props.icon}</div>
      <p className="excerpt">{props.highlight}</p>
    </div>
  )
}

export default LandingHighlights;
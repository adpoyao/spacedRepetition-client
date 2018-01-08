import React from 'react';

const LandingHighlights = props => {
  
  return(
    <div>
      <div className="highlight-icon">{props.icon}</div>
      <p>{props.highlight}</p>
    </div>
  )
}

export default LandingHighlights;
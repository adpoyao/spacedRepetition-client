import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LandingHighlights from './landing-highlights';

import './landing-page.css';

export function LandingPage(props) {
    //DUMMY DATA
    let highlightsArray = [
        {
            icon: <div className="highlight-circle">あ</div>,
            highlight: 'Insert highlight #1 details, i.e. promote Spaced-Repetition learning method.'
        },
        {
            icon: <div className="highlight-circle">い</div>,
            highlight: 'Insert highlight #2 details'
        },
        {
            icon: <div className="highlight-circle">う</div>,
            highlight: 'Insert highlight #3 details'
        },
    ]
    
    let highlights = highlightsArray.map((item, index) => {
        return (
            <div className="highlight-column" > 
                <LandingHighlights key={index} icon={item.icon} highlight={item.highlight}/>
            </div>
        )
    })

    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }  

    return (
        <div className="home">
            <h2>Expand your learning<br></br>potential with Kurikaeshi</h2>
            <div className="begin-learning">
                <Link to="/signup" style={{ textDecoration: 'none' }}><a >Begin Learning!</a></Link>
            </div>
            
            {highlights}

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

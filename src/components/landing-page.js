import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import backgroundImage from '../assets/tokyo-streets-night-photography.jpg';

import LandingHighlights from './landing-highlights';

import './landing-page.css';

export function LandingPage(props) {
    //DUMMY DATA
    let highlightsArray = [
        {
            icon: <div className="highlight-circle hoverable">
            <span className="hover white">等間隔</span>
            <span className="normal font2 white">Spaced Repetition</span></div>,
            highlight: 'Our spaced repetition algorithm is so smart, it can even tell what\'s going on inside your brain! That\'s how it helps you learn new words quickly, and retain them forever.'
        },
        {
            icon: <div className="highlight-circle hoverable">
            <span className="hover white">進展</span>
            <span className="normal font2 white">Track Progress</span></div>,
            highlight: 'Track your progress as you go! Kurikaeshi shows you how well you\'re doing on each word. The higher your accuracy, the better you know your stuff.'
        },
        {
            icon: <div className="highlight-circle hoverable">
            <span className="hover white">特装</span>
            <span className="normal font2 white">Customize</span></div>,
            highlight: 'Kurikaeshi is customizable! Pick and choose the settings that work best for you to maximize your Japanese learnage. '
        },
    ]
    
    let highlights = highlightsArray.map((item, index) => {
        return (
            <div className="highlight-column" key={index}> 
                <LandingHighlights icon={item.icon} highlight={item.highlight}/>
            </div>
        )
    })

    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }  

    return (
        <div className="home" style={{backgroundImage: `url(${backgroundImage})`}}>
            <h2 className="landing-intro">Expand your learning<br></br>potential with Kurikaeshi</h2>
            <div className="begin-learning">
                <Link to="/signup" style={{ textDecoration: 'none' }}><button className="begin-button">Begin Learning!</button></Link>
            </div>
            
            {highlights}

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

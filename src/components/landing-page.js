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
            <span className="hover white line-height">等間隔</span>
            <span className="normal font2 white line-height">Spaced Repetition</span></div>,
            highlight: 'Learn new words quickly and retain them forever with our super-smart spaced repetition algorithm!'
        },
        {
            icon: <div className="highlight-circle hoverable">
            <span className="hover white line-height">進展</span>
            <span className="normal font2 white line-height">Track Progress</span></div>,
            highlight: 'Track your progress as you go! The higher your accuracy, the better you know your stuff.'
        },
        {
            icon: <div className="highlight-circle hoverable">
            <span className="hover white line-height">特装</span>
            <span className="normal font2 white line-height">Customize</span></div>,
            highlight: 'Kurikaeshi is customizable! Pick and choose your settings to maximize your Japanese learnage. '
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
                <Link to="/signup" style={{ textDecoration: 'none' }}><button className="begin-button hoverable">
                <span className="hover white">行きましょう！</span>
                <span className="normal white font2">Let's go!</span></button></Link>
            </div>
            
            {highlights}

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LandingHighlights from './landing-highlights';

export function LandingPage(props) {
    //DUMMY DATA
    let highlightsArray = [
        {
            icon: 'icon1',
            highlight: 'Blah Blah Blah Blah'
        },
        {
            icon: 'icon2',
            highlight: 'Tralala Tralala'
        },
        {
            icon: 'icon3',
            highlight: 'Yippy Yappy Yay'
        },
    ]
    
    let highlights = highlightsArray.map((item, index) => {
        return <LandingHighlights key={index} icon={item.icon} highlight={item.highlight}/>
    })

    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }  

    return (
        <div className="home">
            <h2>Expand your learning</h2> 
            <h2>potential with Kurikaeshi</h2>
            
            <Link to="/signup"><button onClick={() => console.log('Pressed Begin Learning')}>Begin Learning!</button></Link>
            
            {highlights}

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

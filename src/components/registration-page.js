import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import backgroundImage from '../assets/tokyo-streets-night-photography.jpg';

import RegistrationForm from './registration-form';

import './registration-page.css'

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div 
            className="home login-page"
            style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="login-container">
                <h2 className="login-signup-title">Sign Up</h2>
                <RegistrationForm />
            </div>
            {/* <Link to="/">Login</Link> */}
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);

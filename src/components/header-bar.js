import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link, Redirect} from 'react-router-dom';

import Setting from './setting';
import { toggleSetting, evaluateAnswer } from '../actions';

import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        this.props.dispatch(evaluateAnswer(false, null));
        clearAuthToken();
    }

    toggleSetting = () => {
        this.props.dispatch(toggleSetting(!this.props.showSetting))
    }

    render() {
        let navButton;
        //TODO: Change Back after testing
        if (this.props.loggedIn) {
            navButton = (
                <div className="username-button-container">
                    <div className="setting-logout">
                        <p className="logged-in-as">Logged in as <span className="username">{this.props.username.username}</span></p>
                    </div>
                    <div className="setting-logout">
                        <button onClick={this.toggleSetting} className="setting">Setting</button>
                        <Link to="/"><button onClick={() => this.logOut()} className="logout">Logout</button></Link>
                    </div>
                </div>
            );
        } else {
            navButton = (
                <div className="nav-button">
                    <Link to="/login" style={{ textDecoration: 'none' }}><button className="login">Login</button></Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}><button className="signup">Sign Up</button></Link>
                </div>
            )
        }

        let settingModal;
        if(this.props.showSetting){
            settingModal = <Setting/>
        }

        return (
            <div className="header-bar">
                <Link to="/" style={{ textDecoration: 'none' }} className="logo-container">
                    <h1 className="site-name"><span className="logo">々</span><span className="scooch">Kurikaeshi</span></h1>
                </Link>
                {navButton}
                {settingModal}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    showSetting: state.setting.showSetting,
    username: state.auth.currentUser
});

export default connect(mapStateToProps)(HeaderBar);

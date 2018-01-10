import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link, Redirect} from 'react-router-dom';

import Setting from './setting';
import { toggleSetting } from '../actions';

import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
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
                <div>
                    <button onClick={this.toggleSetting}>Setting</button>
                    <Link to="/"><button onClick={() => this.logOut()}>Log out</button></Link>
                </div>
            );
        } else {
            navButton = (
                <div className="nav-button">
                    <Link to="/login" style={{ textDecoration: 'none' }}><button className="login">Log In</button></Link>
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
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 className="site-name"><span className="logo">々</span>Kurikaeshi</h1>
                </Link>
                {navButton}
                {settingModal}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    showSetting: state.setting.showSetting
});

export default connect(mapStateToProps)(HeaderBar);

import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';

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
        if (!this.props.loggedIn) {
            navButton = (
                <div>
                    <button onClick={this.toggleSetting}>Setting</button>
                    <button onClick={() => this.logOut()}>Log out</button>
                </div>
            );
        } else {
            navButton = (
                <div className="nav-button">
                    <Link to="/login" style={{ textDecoration: 'none' }}><a className="login">Log In</a></Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}><a className="signup">Sign Up</a></Link>
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

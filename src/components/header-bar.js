import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let navButton;
        if (this.props.loggedIn) {
            navButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        } else {
            navButton = (
                <div>
                    <Link to="/login"><button onClick={() => console.log('login pressed')}>Log In</button></Link>
                    <Link to="/signup"><button onClick={() => console.log('signup pressed')}>Sign Up</button></Link>
                </div>
            )
        }

        return (
            <div className="header-bar">
                <Link to="/">
                    <h1>々Kurikaeshi</h1>
                </Link>
                {navButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);

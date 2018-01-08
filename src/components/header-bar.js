import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

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
                    <button onClick={() => console.log('Pressed Log in')}>Log in</button>
                    <button onClick={() => console.log('Pressed Register')}>Register</button>
                </div>
            )
        }

        // SAMPLE LINK
        // <LoginForm />
        //     <Link to="/register">Register</Link>

        return (
            <div className="header-bar">
                <h1>々Kurikaeshi</h1>
                {navButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);

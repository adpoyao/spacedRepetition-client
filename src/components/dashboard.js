import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

import Question from './question';
import Answer from './answer';
import FooterBar from './footer-bar';

import dashboard from './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        // if (!this.props.loggedIn) {
        //     return 
        // } 
        this.props.dispatch(fetchProtectedData());
    }
     
    render() {
        // TODO: prevent sneaking into Dashboard
        // if(!this.props.loggedIn){
        //     return <Redirect to="/login" />
        // }

        return (
            <div className="dashboard">
                <Question />
                <Answer />
                <FooterBar />
            </div>

            // Defaulted Data:
            // <div className="dashboard">
            //     <div className="dashboard-username">
            //         Username: {this.props.username}
            //     </div>
            //     <div className="dashboard-name">Name: {this.props.name}</div>
            //     <div className="dashboard-protected-data">
            //         Protected data: {this.props.protectedData}
            //     </div>
            // </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        loggedIn: state.auth.currentUser !== null
    };
};

export default requiresLogin()(connect()(Dashboard));

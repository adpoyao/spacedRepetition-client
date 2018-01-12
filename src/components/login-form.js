import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import backgroundImage from '../assets/tokyo-streets-night-photography.jpg'

import './login-form.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username"></label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password"></label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    validate={[required, nonEmpty]}
                />
                <button 
                    className="login-button"
                    disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state, props) => ({
    loggedIn: state.auth.currentUser !== null
})

export default LoginForm = connect(
    mapStateToProps)(reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
    })(LoginForm));

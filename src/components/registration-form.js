import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)))
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName"></label>
                <Field component={Input} type="text" name="firstName" placeholder="first name"/>
                <label htmlFor="lastName"></label>
                <Field component={Input} type="text" name="lastName" placeholder="last name"/>
                <label htmlFor="username"></label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    placeholder="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password"></label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    placeholder="password"
                    validate={[required, length({min: 6, max: 72}), isTrimmed]}
                />
                <label htmlFor="passwordConfirm"></label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    placeholder="confirm password"
                    validate={[required, nonEmpty, matches('password')]}
                />
                <button
                    className="login-button"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Sign Up
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);

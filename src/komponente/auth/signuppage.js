import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from './Firebase'
import * as RUTE from './routes';

const SignUp = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>
);
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        
    }
    onSubmit = e => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                return this.props.firebase
                .user(authUser.user.uid)
                .set({
                    username,
                    email,
                });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(RUTE.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
            e.preventDefault();

    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        const isInvalid = 
            passwordOne !== passwordTwo || 
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                name='username'
                value={username}
                onChange={this.onChange}
                type='text'
                placeholder='Puno ime'
                />
                <input 
                name='email'
                value={email}
                onChange={this.onChange}
                type='text'
                placeholder='Email adresa'
                />
                <input 
                name='passwordOne'
                value={passwordOne}
                onChange={this.onChange}
                type='password'
                placeholder='Sifra'
                />
                <input 
                name='passwordTwo'
                value={passwordTwo}
                onChange={this.onChange}
                type='password'
                placeholder='Potvrdi sifru'
                />
                <button disabled={isInvalid} type='submit'>Napravi nalog</button>
                {error && <p>{error.message}</p>}
            </form>
        )
    }

}
const SignUpLink = () => (
    <p>
        Nemas nalog? <Link to={RUTE.SIGN_UP}>Napravi nalog</Link>
    </p>
)

const SignUpForm = compose(withRouter, withFirebase,)(SignUpFormBase);

export default SignUp;

export { SignUpForm, SignUpLink};
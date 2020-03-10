import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

//import { SignUpLink } from './signuppage';
//import { PasswordForgetLink } from './passforgetpage';
import { LogoWeb } from '../../tema/logo';
import { withFirebase } from './Firebase';
import * as RUTE from './routes';

const SignIn = () => (
    <div className="loginstr">
        <img alt='BodaVet logo'src={LogoWeb} />
        <h1>Admin stranica</h1>
        <SignInForm />
    </div>
);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};
class SignInBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = e => {
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(RUTE.LANDING);
            })
            .catch(error => {
            this.setState({ error });
            });
        e.preventDefault();
    };
    onChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
    };
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name='email'
                    value={email}
                    onChange={this.onChange}
                    type='text'
                    placeholder='Email adresa'
                />
                <input 
                    name='password'
                    value={password}
                    onChange={this.onChange}
                    type='password'
                    placeholder='Unesi šifru'
                />
                <button className="button primary" disabled={isInvalid} type='submit'> 
                Uloguj se
                </button>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInBase);

export default SignIn;
export { SignInForm };
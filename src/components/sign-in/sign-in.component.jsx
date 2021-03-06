import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log(this.state);

        const {email, password} = this.state;

        

        try {
            const signInUser = await auth.signInWithEmailAndPassword(email, password);
            console.log(signInUser);

        } catch(error) {
            console.error(error);
            alert(error);
        }

    

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });

    }



    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='current-password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <div className='buttons' >
                        <CustomButton type='submit' children='sign in' />
                        <CustomButton onClick={signInWithGoogle} children='Sign in with Google' isGoogleSignIn={true} />

                    </div>




                </form>

            </div>
        )
    }
}

export default SignIn;
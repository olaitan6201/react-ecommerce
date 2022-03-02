import { Component } from 'react';
import { CustomButton } from '../../forms/custom-button/custom-button.component';
import { FormInput } from '../../forms/form-input/form-input.component';
import { signInWithGoogle, userSignIn } from '../../../firebase/firebase.util';
import './sign-in.styles.scss';

export class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = this.mount
    }

    mount = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email , password } = this.state;

        try{
            await userSignIn({ email, password});
            this.setState(this.mount);
        }catch(err){
            console.error(err);
        }

    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({[name]: value});
    }

    render(){
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                    />

                    <div className="buttons">
                        <CustomButton
                            type="submit"
                        >
                            Sign In
                        </CustomButton>
                        <CustomButton
                            type="button"
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
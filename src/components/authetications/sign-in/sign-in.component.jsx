import { Component } from 'react';
import { CustomButton } from '../../forms/custom-button/custom-button.component';
import { FormInput } from '../../forms/form-input/form-input.component';
import './sign-in.styles.scss';

export class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
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

                    <CustomButton
                        type="submit"
                    >
                        Sign In
                    </CustomButton>
                </form>
            </div>
        );
    }
}
import { Component } from 'react';
import { CustomButton } from '../../forms/custom-button/custom-button.component';
import { FormInput } from '../../forms/form-input/form-input.component';
import { createUserProfileDocument, userAuthentication } from '../../../firebase/firebase.util';

import './sign-up.styles.scss';

export class SignUp extends Component {
    constructor(){
        super();

        this.state = this.mount;
    }

    mount = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) return alert('Password don\'t match');

        try{
            const { user } = await userAuthentication({ email, password});

            await createUserProfileDocument(user, { displayName });

            this.setState(this.mount);
        }catch(error){
            console.error(error);
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }


    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account?</h2>
                <span>Sign up now!</span>

                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <div className="form-group">
                        <FormInput
                            type="text"
                            name="displayName"
                            onChange={this.handleChange}
                            value={displayName}
                            label="Username"
                            required
                        />
                        <FormInput
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            value={email}
                            label="Email"
                            required
                        />
                        <FormInput
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={password}
                            label="Password"
                            required
                        />
                        <FormInput
                            type="password"
                            name="confirmPassword"
                            onChange={this.handleChange}
                            value={confirmPassword}
                            label="Confirm Password"
                            required
                        />


                        <CustomButton type="submit">SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
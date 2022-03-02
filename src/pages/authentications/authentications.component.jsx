import { SignIn } from '../../components/authetications/sign-in/sign-in.component';
import { SignUp } from '../../components/authetications/sign-up/sign-up.component';
import './authentications.styles.scss';

export const Authentications = () => (
    <div className="authentications">
        <SignIn />
        <SignUp />
    </div>
);
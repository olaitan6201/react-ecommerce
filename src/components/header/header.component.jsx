import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.util';

export const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/shop'>CONTACT</Link>
            {
                currentUser ? 
                <div 
                    className='option'
                    onClick={() => auth.signOut()}
                >
                    SIGN OUT
                </div>
                :
                <Link 
                    className="option"
                    to="/signin"
                >
                    SIGN IN
                </Link>
            }
        </div>
    </div>
);
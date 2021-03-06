import './custom-button.styles.scss';

export const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button 
        className={`
            ${isGoogleSignIn? 'google-sign-in':''} 
            ${inverted? 'inverted':''} 
            custom-button`
        }
        {...otherProps}
    >
        {children}
    </button>
);
import './cart-dropdown.styles.scss';

import { CustomButton } from '../../forms/custom-button/custom-button.component';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    </div>
);


export default CartDropdown;
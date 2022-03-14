import './cart-dropdown.styles.scss';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../../redux/cart/cart.selectors';

import { CustomButton } from '../../forms/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => {
    const navigateTo = useNavigate();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(
                            cartItem => <CartItem key={cartItem.id} item={cartItem}/>
                        )
                    :
                    <div className="empty-message">
                        Your cart is empty
                    </div>
                }
            </div>
            <CustomButton 
                onClick={() => navigateTo('/checkout')}
            >Go To Checkout</CustomButton>
        </div>
    )
};


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// });
// const mapStateToProps = ({cart: { cartItems }}) => ({
//     cartItems
// });

export default connect(mapStateToProps)(CartDropdown);
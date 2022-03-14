import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({cartItems, totalValue}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-blocks">
                <span>Product</span>
            </div>
            <div className="header-blocks">
                <span>Description</span>
            </div>
            <div className="header-blocks">
                <span>Quantity</span>
            </div>
            <div className="header-blocks">
                <span>Price</span>
            </div>
            <div className="header-blocks">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                cartItem.name    
            )
        }
        <div className="total">
            <span>TOTAL: ${totalValue}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
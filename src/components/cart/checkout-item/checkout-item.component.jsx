import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import { removeCartItem, addCartItem, decreaseCartItem } from '../../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, addItem, removeItem, decreaseItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div 
                    className="arrow"
                    onClick={()=>decreaseItem(cartItem)}
                >&#10094;</div>
                <span className="value">{quantity}</span>
                <div 
                    className="arrow"
                    onClick={()=>addItem(cartItem)}
                >&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div 
                className="remove-button"
                onClick={()=>removeItem(cartItem)}
            >
                &#10006;
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeCartItem(item)),
    addItem: item => dispatch(addCartItem(item)),
    decreaseItem: item => dispatch(decreaseCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
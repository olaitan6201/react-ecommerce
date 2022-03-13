import './collection-item.styles.scss';
import { connect } from 'react-redux';

import { addCartItem } from '../../redux/cart/cart.actions';

import { CustomButton } from '../forms/custom-button/custom-button.component';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={
                    {backgroundImage: `url(${imageUrl})`}
                }
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton 
                inverted 
                onClick={()=>addItem(item)}
            >
                Add to Cart
            </CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
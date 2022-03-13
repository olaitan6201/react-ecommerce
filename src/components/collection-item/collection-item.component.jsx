import './collection-item.styles.scss';

import { CustomButton } from '../forms/custom-button/custom-button.component';

export const CollectionItem = ({id, name, price, imageUrl}) => (
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
        <CustomButton inverted>Add to Cart</CustomButton>
    </div>
);
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = () => {
    const { category } = useParams();
    const collection = useSelector(selectCollection(category));
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div className="items">
                {
                    items.map(
                        item => <CollectionItem key={item.id} item={item}/>
                    )
                }
            </div>
        </div>
    );
}


export default CollectionPage;
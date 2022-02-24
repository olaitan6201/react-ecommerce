import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

const { Component } = require("react");
const { SHOP_DATA } = require("./shop.data");

class ShopPage extends Component{
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }


    render(){
        const { collections } = this.state;
        return (<div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>)
    }
}


export default ShopPage;
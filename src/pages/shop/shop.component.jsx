import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import { Route, Routes } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const ShopPage = () =>{ 
    return (
        <div className="shop-page">
            <Routes>
                <Route path='' element={<CollectionsOverviewComponent/>}/>
                <Route path=':category' element={<CollectionPage/>}/>
            </Routes>
        </div>
    )
}
export default ShopPage;